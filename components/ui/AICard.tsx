import { Bot } from "lucide-react";
function AICard() {
  const isSpeaking = true;
  return (
    <div
      className={`w-[80%] h-72 md:w-72 bg-accent/45 rounded-2xl flex-col gap-2 flex justify-center items-center ${
        isSpeaking ? "border border-violet-700" : "border border-white/50"
      }`}
    >
      <Bot height={64} width={64} />
      <h2 className="text-lg font-bold">AI Interviewer</h2>
    </div>
  );
}

export default AICard;
