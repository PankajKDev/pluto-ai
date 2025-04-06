import Course from "@/models/Course.schema";
import connectDB from "../connectDB";

export async function fetchInterviewById(id: string) {
  await connectDB();
  try {
    const fetchedCourse = await Course.findById(id);
    return fetchedCourse;
  } catch (error) {
    console.log("Error :", error);
  }
}
