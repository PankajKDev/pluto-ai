import MyFeedback from "@/components/shared/MyFeedback";
import PageHeading from "@/components/ui/PageHeading";

function page() {
  return (
    <>
      <div className="w-full flex justify-center flex-col  items-center">
        <div className="px-4 py-10 md:py-20">
          <PageHeading
            headingText="Your Previous Feedbacks"
            subHeadingText="Check your feedbacks for previous interviews"
          />
        </div>
        <MyFeedback />
      </div>
    </>
  );
}

export default page;
