"use server";
import Course from "@/models/Course.schema";
import connectDB from "../connectDB";

export async function fetchInterviews(userId: string) {
  await connectDB();
  try {
    const fetchedCourses = await Course.find({ userid: userId }).lean();
    return JSON.parse(JSON.stringify(fetchedCourses));
  } catch (error) {
    console.log("Error :", error);
  }
}

export async function fetchFeedbackById(
  params: GetFeedbackByInterviewIdParams
): Promise<Feedback | null> {
  await connectDB();
  const { interviewId, userId } = params;
  try {
    const feedback = await Course.findOne({
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
