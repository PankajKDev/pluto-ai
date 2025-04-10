import { BicepsFlexed } from "lucide-react";

function Strength({ strengths }: { strengths: string[] | undefined }) {
  return (
    <div className="w-full mt-5 max-w-3xl shadow-md gap-5 m-auto bg-black/25 p-5 rounded-md  flex flex-col justify-center ">
      <div className="flex items-center gap-5 rounded-full ">
        <BicepsFlexed height={32} width={32} />
        <h1 className="text-xl">Strengths</h1>
      </div>
      <ul className="flex flex-col">
        {strengths.map((item, index) => (
          <li key={index}>- {item}</li>
        ))}
      </ul>
    </div>
  );
}

export default Strength;
