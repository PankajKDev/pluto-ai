import Course from "@/models/Course.schema";
import connectDB from "../connectDB";

export async function fetchInterviews(userId: string) {
  await connectDB();
  try {
    const fetchedCourses = await Course.find({ userid: userId });
    const courses = fetchedCourses.map((doc) => doc.toObject());
    return courses;
  } catch (error) {
    console.log("Error :", error);
  }
}
