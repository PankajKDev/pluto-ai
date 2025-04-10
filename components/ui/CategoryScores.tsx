import { PieChart } from "lucide-react";

function CategoryScores({
  categoryScores,
}: {
  categoryScores:
    | Array<{ name: string; score: number; comment: string }>
    | undefined;
}) {
  return (
    <div className="w-full mt-5 max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
      <div className="flex items-center gap-5 rounded-full ">
        <PieChart height={32} width={32} />
        <h1 className="text-xl">Category Score</h1>
      </div>
      <ul className="flex flex-col">
        {categoryScores.map((item, index) => (
          <div key={index}>
            <p className="font-bold">
              - {item.name} ({item.score}/100)
            </p>
            <p>{item.comment}</p>
          </div>
        ))}
      </ul>
    </div>
  );
}

export default CategoryScores;
