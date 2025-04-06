"use client";
import { fetchInterviews } from "@/lib/actions/fetch.action";
import CourseCard from "../ui/CourseCard";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CourseType } from "@/types/mongoose";

function MyCourses() {
  const [data, setData] = useState<CourseType[]>([]);
  const { user } = useUser();
  useEffect(() => {
    async function getInterviews() {
      if (!user?.id) return;
      const interviews = await fetchInterviews(user?.id);
      setData(interviews || []);
    }
    getInterviews();
  }, [user]);
  console.log(data);
  return (
    <div className="w-full flex justify-center flex-col  items-center">
      <h1 className="mt-5 text-2xl text-foreground/25 text-center ">
        Your Courses
      </h1>
      {data.length == 0 ? (
        <div className="py-6 text-center">
          <h1 className="text-foreground text-2xl">No Courses made yet</h1>
        </div>
      ) : (
        <main className="grid w-full lg:w-[80%] gap-4 min-h-full py-5  grid-cols-1  place-items-center place-content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
          {data.map((item, index) => (
            <CourseCard
              key={index}
              role={item.role}
              techstack={item.techstack}
              level={item.level}
            />
          ))}
        </main>
      )}
    </div>
  );
}

export default MyCourses;
