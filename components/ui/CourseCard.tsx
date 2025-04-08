import Link from "next/link";
import { Button } from "./button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Chip from "./Chip";

function CourseCard({
  role,
  level,
  techstack,
  url,
}: {
  role: string;
  level: string;
  techstack: string[];
  url: string;
}) {
  return (
    <>
      <h1 className="mt-5 text-2xl text-foreground/25 text-center ">
        Your Courses
      </h1>
      <Card className="w-[80%] md:w-[400px] relative self-center  h-[300px] hover:border-purple-600 border transition-all ease-in-out duration-150">
        <CardHeader>
          <CardTitle className="text-2xl">{role}</CardTitle>
          <CardDescription>Level : {level}</CardDescription>
        </CardHeader>
        <CardContent>
          <h2 className="text-md font-bold">Mixed</h2>
          <div className="mt-3 w-full flex gap-2">
            {techstack.map((item, index) => (
              <Chip key={index} technology={item} />
            ))}
          </div>
        </CardContent>
        <CardFooter>
          <Link href={`/interview/${url}`}>
            <Button variant="default">View Interview</Button>
          </Link>
        </CardFooter>
        <div className="w-full h-16 flex justify-center items-center absolute bottom-0"></div>
      </Card>
    </>
  );
}

export default CourseCard;
