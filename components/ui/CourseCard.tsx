import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./card";
import Chip from "./Chip";

function CourseCard() {
  return (
    <Card className="w-[80%] md:w-[400px] relative self-center  h-[300px] hover:border-purple-600 border transition-all ease-in-out duration-150">
      <CardHeader>
        <CardTitle className="text-2xl">Frontend Developer</CardTitle>
        <CardDescription>frontend end Developer course</CardDescription>
      </CardHeader>
      <CardContent>
        <h2 className="text-md font-bold">Mixed</h2>
        <div className="mt-3 w-full flex gap-2">
          <Chip technology="React.js" />
          <Chip technology="AWS" />
          <Chip technology="React.js" />
        </div>
      </CardContent>
      <CardFooter></CardFooter>
      <div className="w-full h-16 flex justify-center items-center absolute bottom-0"></div>
    </Card>
  );
}

export default CourseCard;
