import MyCourses from "@/components/shared/MyCourses";
import PageHeading from "@/components/ui/PageHeading";

const page = () => {
  return (
    <>
      <div className="px-4 py-10 md:py-20">
        <PageHeading
          headingText="Explore Our Courses"
          subHeadingText="Unlock skills for every goal and passion."
        />
        <MyCourses />
      </div>
    </>
  );
};

export default page;
