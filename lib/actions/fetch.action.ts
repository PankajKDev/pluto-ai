"use server";
import Course from "@/models/Course.schema";
import connectDB from "../connectDB";
import Feedback from "@/models/Feedback.schema";
import { toast } from "sonner";
import { auth } from "@clerk/nextjs/server";

export async function fetchInterviews(userId: string) {
  await connectDB();
  try {
    const fetchedCourses = await Course.find({ userid: userId }).lean();
    return JSON.parse(JSON.stringify(fetchedCourses));
  } catch (error) {
    console.log("Error :", error);
  }
}
//this is for after interview
export async function fetchFeedbackByInterviewId(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  await connectDB();
  const { interviewId, userId } = params;
  try {
    const feedback = await Feedback.findOne({
      interviewId: interviewId,
      userid: userId,
    })
      .limit(1)
      .lean();
    if (!feedback) return null;
    const doc = JSON.parse(JSON.stringify(feedback));
    const { _id, ...rest } = doc;
    return {
      id: _id.toString(),
      ...rest,
    } as Feedback;
  } catch (error) {
    console.log("Error :", error);
    return null;
  }
}

export async function fetchFeedbacks() {
  await connectDB();
  const { userId } = await auth();
  try {
    const fetchedFeedbacks = await Feedback.find({ userid: userId }).lean();
    return JSON.parse(JSON.stringify(fetchedFeedbacks));
  } catch (error) {
    console.log("Error :", error);
  }
}
//this is for feedbacks page
export async function fetchFeedbackById(id: string): Promise<Feedback | null> {
  await connectDB();
  try {
    const feedback = await Feedback.findById(id).limit(1);
    return JSON.parse(JSON.stringify(feedback));
  } catch (error) {
    console.log("Error :", error);
    return null;
    toast("Error fetching feedback");
  }
}
