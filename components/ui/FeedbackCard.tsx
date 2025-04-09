import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import { Button } from "./button";
import Link from "next/link";
import { ThumbsDown, ThumbsUp } from "lucide-react";

function FeedbackCard({
  totalScore,
  url,
  name,
  summary,
}: {
  totalScore: number;
  url: string;
  name: string;
  summary: string;
}) {
  return (
    <Card className="w-[80%] md:w-[400px] relative self-center  min-h-[300px] h-full hover:border-purple-600 border transition-all ease-in-out duration-150">
      <CardHeader>
        <CardTitle className="text-2xl">{name}</CardTitle>
        <CardDescription className="pt-2 flex  items-center">
          {totalScore < 50 ? (
            <ThumbsDown size={24} color="red" />
          ) : (
            <ThumbsUp size={24} color="green" />
          )}
          <span className="text-foreground text-md ml-5 font-bold">
            {totalScore}
          </span>
          /100
        </CardDescription>
      </CardHeader>
      <CardContent>
        <span className="font-bold">Summary :</span>
        {summary}
      </CardContent>
      <CardFooter>
        <Link href={`/feedbacks/${url}`}>
          <Button>View Interview</Button>
        </Link>
      </CardFooter>
    </Card>
  );
}

export default FeedbackCard;
