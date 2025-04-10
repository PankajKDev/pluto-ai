import { ThumbsDown, ThumbsUp } from "lucide-react";

function Summary({
  totalScore,
  finalAssessment,
}: {
  totalScore: number | undefined;
  finalAssessment: string | undefined;
}) {
  return (
    <div className="w-fit max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
      <div className="flex items-center gap-5 rounded-full ">
        {totalScore < 50 ? (
          <ThumbsDown height={28} width={28} color="red" />
        ) : (
          <ThumbsUp height={32} width={32} color="green" />
        )}
        <h1 className="text-xl">{totalScore}/100</h1>
      </div>
      <h3 className="text-center sm:text-left leading-relaxed">
        {finalAssessment ||
          "The candidate immediately concluded the interview, stating it was for testing purposes. Therefore, it's impossible to assess their skills and suitability for the role. The candidate needs to actively participate and demonstrate their abilities in future interviews."}
      </h3>
    </div>
  );
}

export default Summary;
