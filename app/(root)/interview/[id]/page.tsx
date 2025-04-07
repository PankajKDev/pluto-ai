import { fetchInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = await fetchInterviewById(id);
  if (!interview) redirect("/");
  return (
    <>
      <h1 className="text-center text-2xl md:text-3xl py-5 uppercase font-medium">
        {interview?.role} interview
      </h1>
      <h1 className="text-center text-lg md:text-3xl py-5 uppercase font-medium">
        Type: {interview?.type}
      </h1>
    </>
  );
};

export default page;
