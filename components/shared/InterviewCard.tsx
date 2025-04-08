"use client";
import { interviewer } from "@/constants";
import { cn } from "@/lib/utils";
import vapi from "@/lib/vapi";
import { Card, CardContent } from "@/components/ui/card";
import { Bot, User } from "lucide-react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "../ui/button";
import { motion } from "framer-motion";
import { Badge } from "../ui/badge";
import { createFeedback } from "@/lib/actions/general.action";
import { useUser } from "@clerk/nextjs";
import { toast, Toaster } from "sonner";

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

function InterviewCard({
  type,
  interviewId,
  questions,
}: {
  type: string;
  interviewId?: string;
  questions?: string[];
}) {
  const router = useRouter();
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

  //handle feedback
  const handleGenerateFeedback = async (messages: SavedMessage[]) => {
    toast("Feedback is being generated");
    const { success, feedbackId: id } = await createFeedback({
      interviewId: interviewId!,
      transcript: messages,
    });
    if (success && id) {
      router.push(`/interview/${interviewId}/feedback`);
    } else {
      {
        console.log("error saving feedback");
        router.push("/");
      }
    }
  };

  useEffect(() => {
    if (messages.length > 0) {
      setLastMessage(messages[messages.length - 1].content);
    }

    if (callStatus === CallStatus.FINISHED) {
      if (type == "generate") {
        router.push("/");
      } else {
        handleGenerateFeedback(messages);
      }
    }
  }, [messages, callStatus, type, router]);
  //Starting VAPI call
  const handleCall = async () => {
    setCallStatus(CallStatus.CONNECTING);
    if (type == "generate") {
      await vapi.start(process.env.NEXT_PUBLIC_VAPI_ASSISTANT_ID!, {
        variableValues: { username: user?.fullName, userid: user?.id },
      });
    } else {
      let formattedQuestions = "";
      if (questions) {
        formattedQuestions = questions
          .map((question) => `- ${question}`)
          .join("\n");
      }
      await vapi.start(interviewer, {
        variableValues: {
          questions: formattedQuestions,
        },
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
      <div className="flex flex-col items-center gap-6">
        <div className="flex flex-col md:flex-row items-center gap-8">
          <Card
            className={cn(
              "w-64 h-64 flex flex-col items-center justify-center",
              isSpeaking ? "border-purple-600 border-2" : "border-muted"
            )}
          >
            <CardContent className="flex flex-col items-center justify-center gap-2">
              <Bot size={48} className="text-muted-foreground" />
              <h2 className="text-lg font-semibold text-muted-foreground">
                Interviewer
              </h2>
              <Badge variant="outline" className="text-xs">
                {callStatus}
              </Badge>
            </CardContent>
          </Card>

          <Card className="w-64 h-64 flex flex-col items-center justify-center">
            <CardContent className="flex flex-col items-center justify-center gap-2">
              <User size={48} className="text-muted-foreground" />
              <h2 className="text-lg font-semibold text-muted-foreground">
                {user?.fullName || "You"}
              </h2>
            </CardContent>
          </Card>
        </div>

        <Card className="w-full max-w-4xl bg-muted/30">
          <CardContent className="p-6 text-center text-white text-base min-h-[120px]">
            {lastMessage || "Transcript will appear here..."}
          </CardContent>
        </Card>

        <div className="flex gap-4">
          {callStatus !== "ACTIVE" ? (
            <Button
              variant="default"
              className="bg-green-600 hover:bg-green-700 w-32"
              onClick={handleCall}
              disabled={callStatus === "CONNECTING"}
            >
              {callStatus === "CONNECTING" ? (
                <motion.div
                  className="h-3 w-3 rounded-full bg-white"
                  animate={{ scale: [1, 1.5, 1] }}
                  transition={{ repeat: Infinity, duration: 0.8 }}
                />
              ) : (
                "Call"
              )}
            </Button>
          ) : (
            <Button
              variant="destructive"
              className="w-32"
              onClick={handleDisconnect}
            >
              End
            </Button>
          )}
        </div>
        <Toaster />
      </div>
    </>
  );
}

export default InterviewCard;
