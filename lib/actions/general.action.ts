"use server";

import connectDB from "../connectDB";
import { generateObject } from "ai";
import { google } from "@ai-sdk/google";
import { feedbackSchema } from "@/constants";
import Feedback from "@/models/Feedback.schema";
import Course from "@/models/Course.schema";
import { auth } from "@clerk/nextjs/server";
import { toast } from "sonner";

export async function createFeedback(params: FeedbackParams) {
  await connectDB();
  const { interviewId, transcript, interviewName } = params;
  const { userId } = await auth();
  console.log(interviewName);
  try {
    const formattedTranscript = transcript
      .map(
        (sentence: { role: string; content: string }) =>
          `-${sentence.role} : ${sentence.content}`
      )
      .join("");
    const { object } = await generateObject({
      model: google("gemini-2.0-flash-001", {
        structuredOutputs: false,
      }),
      schema: feedbackSchema,
      prompt: `
          You are an AI interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories. Be thorough and detailed in your analysis. Don't be lenient with the candidate. If there are mistakes or areas for improvement, point them out.
          Transcript:
          ${formattedTranscript}
  
          Please score the candidate from 0 to 100 in the following areas. Do not add categories other than the ones provided:
          - **Communication Skills**: Clarity, articulation, structured responses.
          - **Technical Knowledge**: Understanding of key concepts for the role.
          - **Problem-Solving**: Ability to analyze problems and propose solutions.
          - **Cultural & Role Fit**: Alignment with company values and job role.
          - **Confidence & Clarity**: Confidence in responses, engagement, and clarity.
          `,
      system:
        "You are a professional interviewer analyzing a mock interview. Your task is to evaluate the candidate based on structured categories",
    });
    console.log(object);
    const newFeedback = new Feedback({
      interviewId,
      interviewName,
      userid: userId,
      totalScore: object.totalScore,
      categoryScores: object.categoryScores,
      strengths: object.strengths,
      areasForImprovement: object.areasForImprovement,
      finalAssessment: object.finalAssessment,
    });
    await newFeedback.save();
    return {
      success: true,
      feedbackId: newFeedback._id.toString(),
    };
  } catch (error) {
    console.error("Error saving feedback :", error);
    toast("Error generating feedback");
    return {
      success: false,
    };
  }
}

export async function fetchInterviewById(id: string) {
  await connectDB();
  try {
    const course = await Course.findById(id).lean();
    return course ? JSON.parse(JSON.stringify(course)) : null;
  } catch (error) {
    console.log("Error :", error);
  }
}
