"use client";
import { useUser } from "@clerk/nextjs";
import { User } from "lucide-react";

function UserCard() {
  const { user } = useUser();
  const isSpeaking = true;
  return (
    <div
      className={`w-[80%] h-72 md:w-72 bg-accent/45 rounded-2xl flex-col gap-2 flex justify-center items-center ${
        isSpeaking ? "border border-red-600" : "border border-white/50"
      }`}
    >
      <User width={64} height={64} />
      <h2 className="text-lg font-bold">{user?.fullName}</h2>
    </div>
  );
}

export default UserCard;
