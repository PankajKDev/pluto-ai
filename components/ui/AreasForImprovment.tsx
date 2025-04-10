import { Lightbulb } from "lucide-react";

function AreasForImprovment({
  areasForImprovement,
}: {
  areasForImprovement: string[] | undefined;
}) {
  return (
    <div className="w-full mt-5 max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
      <div className="flex items-center gap-5 rounded-full ">
        <Lightbulb height={32} width={32} />
        <h1 className="text-xl">Areas for Improvement</h1>
      </div>
      <ul className="flex flex-col">
        {areasForImprovement.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default AreasForImprovment;
