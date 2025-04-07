import InterviewCard from "@/components/shared/InterviewCard";

import { fetchInterviewById } from "@/lib/actions/general.action";
import { Code } from "lucide-react";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = await fetchInterviewById(id);

  if (!interview) {
    console.log(interview);
    redirect("/");
  }
  return (
    <>
      <div className="w-full flex justify-between items-center py-4 px-5  ">
        <h1 className="text-xl font-semibold text-white">
          {interview?.role} Interview
        </h1>
        <div className="flex items-center gap-2 bg-gray-800 px-3 py-1 rounded-full shadow-md">
          <Code size={16} className="text-gray-300" />

          <span className="text-sm font-medium text-gray-200">
            {interview.type}
          </span>
        </div>
      </div>
      <InterviewCard
        type="interview"
        interviewId={id}
        questions={interview?.questions}
      />
    </>
  );
};

export default page;
