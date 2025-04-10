"use client";
import { fetchInterviews } from "@/lib/actions/fetch.action";
import CourseCard from "../ui/CourseCard";
import { useUser } from "@clerk/nextjs";
import { useEffect, useState } from "react";
import { CourseType } from "@/types/mongoose";
import { Button } from "../ui/button";
import Link from "next/link";
import { Pen } from "lucide-react";
import { toast } from "sonner";
import { Progress } from "../ui/progress";

function MyCourses() {
  const [data, setData] = useState<CourseType[]>([]);
  const [loading, setLoading] = useState<ILoading>({
    isLoading: false,
    progress: 30,
  });
  const { user } = useUser();
  useEffect(() => {
    async function getInterviews() {
      setLoading((prev) => ({ ...prev, isLoading: true, progress: 50 }));
      try {
        if (!user?.id) return;
        const interviews = await fetchInterviews(user?.id);
        setLoading((prev) => ({ ...prev, progress: 50 }));
        setData(interviews || []);
      } catch (error) {
        console.error(error);
        toast("Error fetching Interviews");
      } finally {
        setLoading((prev) => ({ ...prev, isLoading: false, progress: 100 }));
      }
    }
    getInterviews();
  }, [user]);
  console.log(data);
  if (loading.isLoading) {
    return (
      <div className="w-full flex flex-col gap-5 justify-center h-full  items-center">
        <Progress value={loading.progress} className="w-64 mt-10" />
        <h1 className="text-primary/50 text-xl text-center ">
          Fetching Courses . . .{" "}
        </h1>
      </div>
    );
  }
  return (
    <div className="w-full flex justify-center flex-col  items-center">
      {data.length == 0 ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-10">
          <h1 className="text-foreground text-2xl">No Course made yet</h1>
          <Link href="/interview">
            <Button>
              <Pen /> <span>Create Now</span>
            </Button>
          </Link>
        </div>
      ) : (
        <>
          <h1 className="mt-5 text-2xl text-foreground/25 text-center ">
            Your Courses
          </h1>
          <main className="grid w-full lg:w-[80%] gap-4 min-h-full py-5  grid-cols-1  place-items-center place-content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {data.map((item, index) => (
              <CourseCard
                key={index}
                url={item._id}
                role={item.role}
                techstack={item.techstack}
                level={item.level}
              />
            ))}
          </main>
        </>
      )}
    </div>
  );
}

export default MyCourses;
