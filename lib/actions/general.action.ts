"use server";
import Course from "@/models/Course.schema";
import connectDB from "../connectDB";

export async function fetchInterviewById(id: string) {
  await connectDB();
  try {
    const course = await Course.findById(id).lean();
    return course ? JSON.parse(JSON.stringify(course)) : null;
  } catch (error) {
    console.log("Error :", error);
  }
}
