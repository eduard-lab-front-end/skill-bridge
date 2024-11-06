import { FeaturedCourses } from "@/components/FeaturedCourses";
import { FeedBackSection } from "@/components/FeedBackSection";
import { HomeHeader } from "@/components/HomeHeader";
import { LearnPressSection } from "@/components/LearnPressSection";
import { TopCategories } from "@/components/TopCategories";

export const HomePage = () => {
  return (
    <>
      <HomeHeader />
      <TopCategories />
      <FeaturedCourses />
      <LearnPressSection />
      <FeedBackSection />
    </>
  );
};
