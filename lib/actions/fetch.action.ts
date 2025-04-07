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
