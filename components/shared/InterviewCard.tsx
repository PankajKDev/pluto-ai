"use client";
import { cn } from "@/lib/utils";
import vapi from "@/lib/vapi";
import { useUser } from "@clerk/nextjs";
import { Bot, User } from "lucide-react";
import { useEffect, useState } from "react";

enum CallStatus {
  INACTIVE = "INACTIVE",
  CONNECTING = "CONNECTING",
  ACTIVE = "ACTIVE",
  FINISHED = "FINISHED",
}

interface SavedMessage {
  role: "user" | "system" | "assistant";
  content: string;
}

function InterviewCard({ type }: { type: string }) {
  const [callStatus, setCallStatus] = useState<CallStatus>(CallStatus.INACTIVE);
  const [messages, setMessages] = useState<SavedMessage[]>([]);
  const [isSpeaking, setIsSpeaking] = useState(false);
  const [lastMessage, setLastMessage] = useState<string>(
    "Transcript shows here"
  );
  const { user } = useUser();

  useEffect(() => {
    //event listeners
    const onCallStart = () => setCallStatus(CallStatus.ACTIVE);
    const onCallEnd = () => setCallStatus(CallStatus.INACTIVE);
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const onMessage = (message: any) => {
      if (message.type === "transcript" && message.transcriptType === "final") {
        const newMessage = { role: message.role, content: message.transcript };
        setMessages((prev) => [...prev, newMessage]);
      }
    };
    const onSpeechStart = () => {
      console.log("Speech Started");
      setIsSpeaking(true);
    };
    const onSpeechEnd = () => {
      console.log("Speech Started");
      setIsSpeaking(false);
    };
    const onError = (error: Error) => console.log("Error :", error);

    vapi.on("call-start", onCallStart);
    vapi.on("call-end", onCallEnd);
    vapi.on("message", onMessage);
    vapi.on("speech-start", onSpeechStart);
    vapi.on("speech-end", onSpeechEnd);
    vapi.on("error", onError);

    return () => {
      vapi.off("call-start", onCallStart);
      vapi.off("call-end", onCallEnd);
      vapi.off("message", onMessage);
      vapi.off("speech-start", onSpeechStart);
      vapi.off("speech-end", onSpeechEnd);
      vapi.off("error", onError);
    };
  }, []);

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }
  }, [messages]);
  //Starting VAPI call
  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);
    if (type == "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!, {
        variableValues: { username: user?.fullName, userid: user?.id },
      });
    }
  };
  //disconnect call
  const handleDisconnect = () => {
    setCallStatus(CallStatus.FINISHED);
    vapi.stop();
  };
  return (
    <>
      <div className="w-full flex flex-col">
        <div className="w-full flex justify-center items-center gap-10 flex-col md:flex-row">
          <div
            className={`bg-black/50 w-64 h-64 rounded-2xl flex flex-col justify-center items-center ${
              isSpeaking ? "border border-purple-600" : "border border-white/25"
            }`}
          >
            <Bot size={64} />
            <h1 className="text-xl text-white/50">Interviewer</h1>
          </div>

          <div className="bg-black/50 w-64 h-64 rounded-2xl flex flex-col justify-center items-center">
            <User size={64} />
            <h1 className="text-xl text-white/50">{user?.fullName}</h1>
          </div>
        </div>
        <div className="py-6 flex w-full justify-center">
          {callStatus !== "ACTIVE" ? (
            <button
              className="bg-green-600 w-32 rounded-lg h-8 cursor-pointer"
              onClick={() => handleCall()}
            >
              <span
                className={cn(
                  "absolute animate-ping rounded-full opacity-75",
                  callStatus !== "CONNECTING" && "hidden"
                )}
              />

              <span className="relative">
                {callStatus === "INACTIVE" || callStatus === "FINISHED"
                  ? "Call"
                  : ". . ."}
              </span>
            </button>
          ) : (
            <button
              className="bg-red-600 w-32 rounded-lg h-8 cursor-pointer"
              onClick={() => handleDisconnect()}
            >
              End
            </button>
          )}
        </div>
        <div className="w-full py-5 bg-black/50 rounded-lg">
          <p className="text-white text-center" key={lastMessage}>
            {lastMessage}
          </p>
        </div>
      </div>
    </>
  );
}

export default InterviewCard;
