import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconClockFilled, IconCurrencyDollar, IconSchool } from "@tabler/icons-react";
import { Separator } from "./ui/separator";

type TempObj = {
  title: string;
  img: string;
  createdBy: string;
  duration: string;
  students: string;
  price: number;
}[];

export const FeaturedCourses = () => {
  const categories: TempObj = [
    {
      title: "Art & Design",
      img: "/src/assets/images/course-1.png",
      createdBy: "Eric NewOne",
      duration: "2",
      students: "156",
      price: 49,
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/course-2.png",
      createdBy: "Eric NewOne",
      duration: "2",
      students: "156",
      price: 49,
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/course-3.png",
      createdBy: "Eric NewOne",
      duration: "2",
      students: "156",
      price: 49,
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/course-2.png",
      createdBy: "Eric NewOne",
      duration: "2",
      students: "156",
      price: 49,
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/course-3.png",
      createdBy: "Eric NewOne",
      duration: "2",
      students: "156",
      price: 49,
    },
    {
      title: "Art & Design",
      img: "/src/assets/images/course-2.png",
      createdBy: "Eric NewOne",
      duration: "2",
      students: "156",
      price: 49,
    },
  ];
  return (
    <div className="max-w-screen-lg m-auto px-4">
      <div className="flex justify-between items-center mb-10">
        <div>
          <CardHeader className="text-left p-0 mb-3 text-2xl font-semibold">
            Featured Courses
          </CardHeader>
          <CardDescription>Explore our Popular Courses</CardDescription>
        </div>
        <div>
          <Button variant="outline" className="rounded-full">
            All Courses
          </Button>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {categories.map((category) => (
          <Card className="p-0 pb-5 min-h-48 flex flex-col justify-center gap-4">
            <CardHeader className="p-0 w-full ">
              <img
                src={category.img}
                alt=""
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <div className="px-5 flex flex-col gap-4">
              <CardDescription className="text-muted-foreground font-semibold">
                by{" "}
                <span className="text-secondary-foreground">
                  {category.createdBy}
                </span>
              </CardDescription>
              <CardTitle>{category.title}</CardTitle>
              <CardContent className="p-0">
                <div className="flex gap-2">
                  <p className="flex gap-2 mr-2">
                    <IconClockFilled stroke={1} className="text-primary" />{" "}
                    <span>{category.duration} Weeks</span>
                  </p>
                  <p className="flex gap-2">
                    <IconSchool stroke={1} className="text-primary" />{" "}
                    <span>{category.students} Students</span>
                  </p>
                </div>
              </CardContent>
              <Separator />
              <CardFooter className="p-0 flex justify-between">
                <p className="flex">
                  <IconCurrencyDollar stroke={1} />
                  {category.price}
                </p>
                <Button variant='ghost'>View More</Button>
              </CardFooter>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
};
