"use client";
import { fetchFeedbacks } from "@/lib/actions/fetch.action";
import { useEffect, useState } from "react";
import FeedbackCard from "../ui/FeedbackCard";
import { toast } from "sonner";
import { Progress } from "../ui/progress";
import Link from "next/link";
import { Button } from "../ui/button";
import { Book } from "lucide-react";

function MyFeedback() {
  const [data, setData] = useState<Feedback[]>([]);
  const [loading, setLoading] = useState<ILoading>({
    isLoading: false,
    progress: 30,
  });
  useEffect(() => {
    async function getFeedbacks() {
      setLoading((prev) => ({ ...prev, isLoading: true, progress: 50 }));
      try {
        const feedbacks = await fetchFeedbacks();
        setData(feedbacks || []);
        setLoading((prev) => ({ ...prev, progress: 80 }));
      } catch (error) {
        console.log(error);
        toast("Error fetching feedback");
      } finally {
        setLoading((prev) => ({ ...prev, isLoading: false, progress: 100 }));
      }
    }
    getFeedbacks();
  }, []);
  if (loading.isLoading) {
    return (
      <div className="w-full flex flex-col gap-5 justify-center h-full  items-center">
        <Progress value={loading.progress} className="w-64 mt-10" />
        <h1 className="text-primary/50 text-xl text-center ">
          Fetching feedbacks . . .{" "}
        </h1>
      </div>
    );
  }

  return (
    <main className="grid w-full lg:w-[80%] gap-4 min-h-full py-5  grid-cols-1  place-items-center place-content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {data.length < 1 ? (
        <div className="w-full h-full flex justify-center items-center flex-col gap-10">
          <h1 className="text-foreground text-2xl text-center">
            No course attempted hence no feedback
          </h1>
          <Link href="/courses">
            <Button>
              <Book /> <span>Attempt course</span>
            </Button>
          </Link>
        </div>
      ) : (
        <>
          {data.map((item, index) => (
            <FeedbackCard
              key={index}
              totalScore={item.totalScore}
              url={item._id.toString()}
              name={item.interviewName!}
              summary={item.finalAssessment}
            />
          ))}
        </>
      )}
    </main>
  );
}

export default MyFeedback;
