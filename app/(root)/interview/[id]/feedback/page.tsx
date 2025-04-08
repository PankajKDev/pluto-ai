import PageHeading from "@/components/ui/PageHeading";
import { fetchFeedbackById } from "@/lib/actions/fetch.action";
import { fetchInterviewById } from "@/lib/actions/general.action";
import { auth } from "@clerk/nextjs/server";
import dayjs from "dayjs";
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
  console.log(feedback);
  const formatteddate = dayjs(feedback?.createdAt).format("DD MMMM YYYY HH:mm");

  return (
    <>
      <div className="py-5">
        <PageHeading
          headingText="Interview Feedback"
          subHeadingText={`${formatteddate}`}
        />
      </div>
    </>
  );
};

export default page;
