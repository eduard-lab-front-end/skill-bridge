import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconCalendar } from "@tabler/icons-react";
import { Separator } from "./ui/separator";

// type TempObj = {
//   title: string;
//   img: string;
//   createdBy: string;
//   published: string;
//   description: string;
// }[];

export const BlogsSection = () => {
  const mockCourses = [
    {
      title: "Art & Design",
      img: "/src/assets/images/blog-img-1.png",
      createdBy: "Eric NewOne",
      published: "Jan 24, 2024",
      description:
        "Looking for an amazing & well-functional LearnPress WordPressTheme? Online education...",
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/blog-img-2.png",
      createdBy: "Eric NewOne",
      published: "Jan 24, 2024",
      description:
        "Looking for an amazing & well-functional LearnPress WordPressTheme? Online education...",
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/blog-img-1.png",
      createdBy: "Eric NewOne",
      published: "Jan 24, 2024",
      description:
        "Looking for an amazing & well-functional LearnPress WordPressTheme? Online education...",
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/blog-img-2.png",
      createdBy: "Eric NewOne",
      published: "Jan 24, 2024",
      description:
        "Looking for an amazing & well-functional LearnPress WordPressTheme? Online education...",
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/blog-img-1.png",
      createdBy: "Eric NewOne",
      published: "Jan 24, 2024",
      description:
        "Looking for an amazing & well-functional LearnPress WordPressTheme? Online education...",
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/blog-img-2.png",
      createdBy: "Eric NewOne",
      published: "Jan 24, 2024",
      description:
        "Looking for an amazing & well-functional LearnPress WordPressTheme? Online education...",
    },
  ];
  return (
    <div className="max-w-screen-lg m-auto grid grid-cols-1 gap-6 my-16 p-4">
      {mockCourses.map((course) => (
        <Card className="p-0 pb-5 min-h-48 flex flex-col justify-center gap-4 md:flex-row md:gap-0 md:pb-0 md:justify-normal">
          <CardHeader className="p-0 w-full md:w-1/2">
            <img
              src={course.img}
              alt=""
              className="w-full h-full object-cover"
            />
          </CardHeader>
          <div className="px-5 flex flex-col gap-4 md:w-1/2 md:justify-between md:p-4 lg:justify-center">
            <div className="flex flex-col gap-4">
              <CardDescription className="text-muted-foreground font-semibold lg:text-lg">
                by{" "}
                <span className="text-secondary-foreground">
                  {course.createdBy}
                </span>
              </CardDescription>
              <CardTitle className="lg:text-xl">{course.title}</CardTitle>
              <CardContent className="p-0">
                <div className="">
                  <p className="flex gap-2 mr-2">
                    <IconCalendar stroke={1} className="text-primary" />{" "}
                    <span>{course.published}</span>
                  </p>
                </div>
              </CardContent>
            </div>
            <div>
              <Separator />
              <CardFooter className="p-0 py-3 text-muted-foreground">
                <p className="lg:text-lg">{course.description}</p>
              </CardFooter>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
};
