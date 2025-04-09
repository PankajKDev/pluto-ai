"use client";
import { fetchFeedbacks } from "@/lib/actions/fetch.action";
import { useEffect, useState } from "react";
import FeedbackCard from "../ui/FeedbackCard";

function MyFeedback() {
  const [data, setData] = useState<Feedback[]>([]);

  useEffect(() => {
    async function getFeedbacks() {
      const feedbacks = await fetchFeedbacks();
      setData(feedbacks || []);
    }
    getFeedbacks();
  }, []);
  console.log(data);

  return (
    <main className="grid w-full lg:w-[80%] gap-4 min-h-full py-5  grid-cols-1  place-items-center place-content-center sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
      {data.map((item, index) => (
        <FeedbackCard
          key={index}
          totalScore={item.totalScore}
          url={item._id.toString()}
          name={item.interviewName!}
          summary={item.finalAssessment}
        />
      ))}
    </main>
  );
}

export default MyFeedback;
