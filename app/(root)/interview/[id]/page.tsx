import { fetchInterviewById } from "@/lib/actions/general.action";
import { redirect } from "next/navigation";

const page = async ({ params }: RouteParams) => {
  const { id } = await params;
  const interview = await fetchInterviewById(id);
  if (!interview) redirect("/");
};

export default page;
