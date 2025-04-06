"use client";
import { fetchInterviews } from "@/lib/actions/fetch.action";
import CourseCard from "../ui/CourseCard";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";

function MyCourses() {
  const [data, setData] = useState([]);
  const { user } = useUser();
  useEffect(() => {
    async function getInterviews() {
      if (!user?.id) return; // Wait for user to load
      const interviews = await fetchInterviews(user?.id);
      setData(interviews || []); // Default to empty array if undefined
    }
    getInterviews();
  }, []); // Depend on user
  console.log(data);
  return (
    <div className="w-full flex justify-center flex-col  items-center">
      <h1 className="mt-5 text-2xl text-foreground/25 text-center ">
        Your Courses
      </h1>
      <main className="grid w-full lg:w-[80%] gap-4 min-h-full py-5  grid-cols-1  place-items-center place-content-center   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </main>
    </div>
  );
}

export default MyCourses;
