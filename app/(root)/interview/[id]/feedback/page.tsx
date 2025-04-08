import { Button } from "@/components/ui/button";
import PageHeading from "@/components/ui/PageHeading";
import { fetchFeedbackById } from "@/lib/actions/fetch.action";
import { fetchInterviewById } from "@/lib/actions/general.action";
import { auth } from "@clerk/nextjs/server";
import dayjs from "dayjs";
import {
  BicepsFlexed,
  Lightbulb,
  PieChart,
  ThumbsDown,
  ThumbsUp,
} from "lucide-react";
import Link from "next/link";
import { redirect } from "next/navigation";
const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const { userId } = await auth();
  const interview = await fetchInterviewById(id);
  if (!interview) redirect("/");
  const feedback = await fetchFeedbackById({
    interviewId: id,
    userId: userId,
  });
  console.log(id);
  const formatteddate = dayjs(feedback?.createdAt).format("DD MMMM YYYY HH:mm");

  return (
    <>
      <div className="py-5">
        <PageHeading
          headingText="Interview Feedback"
          subHeadingText={`${formatteddate}`}
        />
      </div>
      <div className="w-fit max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
        <div className="flex items-center gap-5 rounded-full ">
          {feedback?.totalScore < 50 ? (
            <ThumbsDown height={28} width={28} color="red" />
          ) : (
            <ThumbsUp height={32} width={32} color="green" />
          )}
          <h1 className="text-xl">{feedback?.totalScore}/100</h1>
        </div>
        <h3 className="text-center sm:text-left leading-re">
          {feedback?.finalAssessment ||
            "The candidate immediately concluded the interview, stating it was for testing purposes. Therefore, it's impossible to assess their skills and suitability for the role. The candidate needs to actively participate and demonstrate their abilities in future interviews."}
        </h3>
      </div>
      {feedback?.strengths.length > 0 ? (
        <div className="w-full mt-5 max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
          <div className="flex items-center gap-5 rounded-full ">
            <BicepsFlexed height={32} width={32} />
            <h1 className="text-xl">Strengths</h1>
          </div>
          <ul className="flex flex-col">
            {feedback?.strengths.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}
      {feedback?.areasForImprovement.length > 0 ? (
        <div className="w-full mt-5 max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
          <div className="flex items-center gap-5 rounded-full ">
            <Lightbulb height={32} width={32} />
            <h1 className="text-xl">Areas for Improvement</h1>
          </div>
          <ul className="flex flex-col">
            {feedback?.areasForImprovement.map((item, index) => (
              <li key={index}>- {item}</li>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      {feedback?.categoryScores ? (
        <div className="w-full mt-5 max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
          <div className="flex items-center gap-5 rounded-full ">
            <PieChart height={32} width={32} />
            <h1 className="text-xl">Category Score</h1>
          </div>
          <ul className="flex flex-col">
            {feedback?.categoryScores.map((item, index) => (
              <div key={index}>
                <p className="font-bold">
                  - {item.name} ({item.score}/100)
                </p>
                <p>{item.comment}</p>
              </div>
            ))}
          </ul>
        </div>
      ) : (
        ""
      )}

      <div className="w-full flex gap-5 py-11 justify-center">
        <Link href="/courses">
          <Button variant="default">Courses</Button>
        </Link>
        <Link href={`/interview/${id.toString()}`}>
          <Button>Retake Interview</Button>
        </Link>
      </div>
    </>
  );
};

export default page;
