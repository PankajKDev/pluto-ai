import { Link } from "lucide-react";
import { Button } from "./button";

function FeedbackButtons({ id }: { id: string }) {
  return (
    <div className="w-full flex gap-5 py-11 justify-center">
      <Link href="/courses">
        <Button variant="default">Courses</Button>
      </Link>
      <Link href={`/interview/${id}`}>
        <Button>Retake Interview</Button>
      </Link>
    </div>
  );
}

export default FeedbackButtons;
