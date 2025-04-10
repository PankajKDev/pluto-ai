import AreasForImprovment from "@/components/ui/AreasForImprovment";
import CategoryScores from "@/components/ui/CategoryScores";
import FeedbackButtons from "@/components/ui/FeedbackButtons";
import PageHeading from "@/components/ui/PageHeading";
import Strength from "@/components/ui/Strength";
import Summary from "@/components/ui/Summary";
import { fetchFeedbackByInterviewId } from "@/lib/actions/fetch.action";
import { fetchInterviewById } from "@/lib/actions/general.action";
import { auth } from "@clerk/nextjs/server";
import dayjs from "dayjs";
import { redirect } from "next/navigation";
const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const { userId } = await auth();
  const interview = await fetchInterviewById(id);
  if (!interview) redirect("/");
  const feedback = await fetchFeedbackByInterviewId({
    interviewId: id,
    userId: userId!,
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
      <Summary
        totalScore={feedback?.totalScore}
        finalAssessment={feedback?.finalAssessment}
      />
      <Strength strengths={feedback?.strengths} />
      <AreasForImprovment areasForImprovement={feedback?.areasForImprovement} />
      <CategoryScores categoryScores={feedback?.categoryScores} />
      <FeedbackButtons id={id.toString()} />
    </>
  );
};

export default page;
