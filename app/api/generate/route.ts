import connectDB from "@/lib/connectDB";
import Course from "@/models/Course.schema";
import { google } from "@ai-sdk/google";
import { generateText } from "ai";

export async function GET() {
  return Response.json({ success: true }, { status: 200 });
}
export async function POST(request: Request) {
  await connectDB();
  const { role, type, level, amount, userid, techstack } = await request.json();

  try {
    const { text: questions } = await generateText({
      model: google("gemini-2.0-flash-exp"),
      prompt: `Generate interview questions based on the following parameters:
    Role: ${role}
    Experience Level: ${level}
    Tech Stack: ${techstack}
    Question Focus: ${type} (behavioral or technical)
    Number of Questions: ${amount}
Return only the questions in this format:
["Question 1", "Question 2", "Question 3"]
Avoid special characters that might interfere with voice assistants.
  `,
    });
    const questionsArray = JSON.parse(questions);
    console.log(questionsArray);
    const newCourse = new Course({
      userid,
      role,
      type,
      level,
      techstack: techstack.split(","),
      questions: questionsArray,
      attempted: false,
    });
    await newCourse.save();
    return Response.json({ status: 200 });
  } catch (error) {
    console.log("error :", error);
  }
}
