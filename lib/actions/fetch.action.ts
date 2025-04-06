"use server";
import Course from "@/models/Course.schema";
import connectDB from "../connectDB";

export async function fetchInterviews(userId: string) {
  await connectDB();
  try {
    const courses = await Course.find({ userid: userId });
    return courses;
  } catch (error) {
    console.log("Error :", error);
  }
}
