import CourseCard from "../ui/CourseCard";

function MyCourses() {
  return (
    <div className="w-full flex justify-center flex-col  items-center">
      <h1 className="mt-5 text-2xl text-foreground/25 text-center ">
        Your Courses
      </h1>
      <main className="grid w-full lg:w-[80%] gap-4 min-h-full py-5  grid-cols-1  place-items-center place-content-center   sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
        <CourseCard />
      </main>
    </div>
  );
}

export default MyCourses;
