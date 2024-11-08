import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  IconClockFilled,
  IconCurrencyDollar,
  IconSchool,
} from "@tabler/icons-react";
import { Separator } from "./ui/separator";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";
import { useNavigate } from "react-router-dom";
import { CoursesDialogFormCreate } from "./CoursesDialogFormCreate copy";

// type TempObj = {
//   title: string;
//   img: string;
//   createdBy: string;
//   duration: string;
//   students: string;
//   price: number;
// }[];

export const CoursesSection = () => {
  // const mockCourses: TempObj = [
  //   {
  //     title: "Art & Design",
  //     img: "/src/assets/images/course-1.png",
  //     createdBy: "Eric NewOne",
  //     duration: "2",
  //     students: "156",
  //     price: 49,
  //   },
  //   {
  //     title: "Art & Design",
  //     img: "/src/assets/images/course-2.png",
  //     createdBy: "Eric NewOne",
  //     duration: "2",
  //     students: "156",
  //     price: 49,
  //   },
  //   {
  //     title: "Art & Design",
  //     img: "/src/assets/images/course-3.png",
  //     createdBy: "Eric NewOne",
  //     duration: "2",
  //     students: "156",
  //     price: 49,
  //   },
  //   {
  //     title: "Art & Design",
  //     img: "/src/assets/images/course-2.png",
  //     createdBy: "Eric NewOne",
  //     duration: "2",
  //     students: "156",
  //     price: 49,
  //   },
  //   {
  //     title: "Art & Design",
  //     img: "/src/assets/images/course-3.png",
  //     createdBy: "Eric NewOne",
  //     duration: "2",
  //     students: "156",
  //     price: 49,
  //   },
  //   {
  //     title: "Art & Design",
  //     img: "/src/assets/images/course-2.png",
  //     createdBy: "Eric NewOne",
  //     duration: "2",
  //     students: "156",
  //     price: 49,
  //   },
  // ];
  const navigate = useNavigate();
  const navigateHandler = (courseId: string) => {
    navigate(`/courses/${courseId}`);
  };
  const { courses, isAuthenticated } = useContext(SessionContext);
  console.log(courses)
  return (
    <div className="max-w-screen-lg m-auto grid grid-cols-1 gap-6 min-h-[80vh] mb-24 px-6">
      <div className="flex justify-between items-center">
        <div>
          <CardHeader className="text-left p-0 mb-3 text-2xl font-semibold">
            All Courses
          </CardHeader>
          <CardDescription>Explore our Courses</CardDescription>
        </div>
        <div>
          {isAuthenticated && (
            <CoursesDialogFormCreate
              trigger={
                <Button variant="outline" className="rounded-full">
                  Create +
                </Button>
              }
            />
          )}
        </div>
      </div>
      {!courses ? (
        <h2>Loading</h2>
      ) : (
        courses.map((course) => (
          <Card
            className="p-0 pb-5 min-h-48 flex flex-col justify-center gap-4 md:flex-row md:gap-0 md:pb-0 md:justify-normal"
            key={course.id}
          >
            <CardHeader className="p-0 w-full md:w-1/2">
              <img
                src={course.image}
                alt=""
                className="w-full h-full object-cover"
              />
            </CardHeader>
            <div className="px-5 flex flex-col gap-4 md:w-1/2 md:justify-between md:p-4 lg:justify-around">
              <div className="flex flex-col gap-4">
                <CardDescription className="text-muted-foreground font-semibold lg:text-lg">
                  by{" "}
                  <span className="text-secondary-foreground">
                    {course.teacher?.userName}
                  </span>
                </CardDescription>
                <CardTitle className="lg:text-xl">{course.title}</CardTitle>
                <CardContent className="p-0">
                  <div className="flex gap-2">
                    <p className="flex gap-2 mr-2">
                      <IconClockFilled stroke={1} className="text-primary" />{" "}
                      <span>{course.durationWeeks} Weeks</span>
                    </p>
                    <p className="flex gap-2">
                      <IconSchool stroke={1} className="text-primary" />{" "}
                      <span>{course.studentCount} Students</span>
                    </p>
                  </div>
                </CardContent>
              </div>
              <div>
                <Separator />
                <CardFooter className="p-0 flex justify-between ">
                  <p className="flex items-center lg:text-lg">
                    <IconCurrencyDollar stroke={1} />
                    {course.price}
                  </p>
                  <Button
                    variant="ghost"
                    className="lg:text-lg"
                    onClick={() => navigateHandler(course.id)}
                  >
                    View More
                  </Button>
                </CardFooter>
              </div>
            </div>
          </Card>
        ))
      )}
    </div>
  );
};
