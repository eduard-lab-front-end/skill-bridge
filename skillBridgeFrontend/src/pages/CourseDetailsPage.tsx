import { CoursesDialogFormUpdate } from "@/components/CoursesDialogFormUpdate";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { SessionContext } from "@/contexts/SessionContext";
import { useToast } from "@/hooks/use-toast";
import { CoursesType } from "@/types/sessionContextTypes";
import {
  IconChartAreaLineFilled,
  IconClockFilled,
  IconCurrencyDollar,
  IconFileFilled,
  IconHelpHexagonFilled,
  IconSchool,
} from "@tabler/icons-react";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import img from "../assets/images/course-1.png";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CommentsForm } from "@/components/CommentsForm";

export const CourseDetailsPage = () => {
  const [course, setCourse] = useState<CoursesType>();

  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { setNeedRefresh, currentUser } = useContext(SessionContext);
  const isCreator = currentUser?.id == course?.teacher?.id;

  const fetchCourseHandle = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses/${courseId}`
      );
      if (response.ok) {
        const data = await response.json();
        setCourse(data);
      }
    } catch (error) {
      console.error("Error getting courses", error);
    }
  };
  // const addToCart = async () => {
  //   try {
  //     const response = await fetchWithToken('/api/cart/carts', 'POST', course)
  // console.log(response.json())
  // console.log(response.json())
  //     } catch (error) {
  //       console.log(error)
  //   }
  // }
  const deleteCourseHandle = async () => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/courses/${courseId}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        toast({
          variant: "destructive",
          title: "Uh oh! Something went wrong.",
          description: "There was a problem with deleting.",
          action: <ToastAction altText="Try again">Try again</ToastAction>,
        });
      }
      setNeedRefresh(true);
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchCourseHandle();
  }, []);
  return (
    // max-w-screen-lg m-auto
    <div className="min-h-[90vh]">
      <div className="bg-accent-foreground py-4">
        {course && (
          <div className="flex flex-col justify-between md:flex-row flex-wrap max-w-screen-lg m-auto lg:flex-row">
            <Card className="p-0 bg-transparent text-muted border-none flex flex-col gap-7 justify-evenly py-4 w-full">
              <CardHeader className="p-0 text-lg flex flex-row items-center justify-between">
                <div>
                  by{" "}
                  {course.teacher?.userName
                    ? course.teacher.userName
                    : "Anonymous"}
                </div>
                {isCreator && (
                  <div className="flex gap-3">
                    {course && (
                      <CoursesDialogFormUpdate
                        courseData={course}
                        onSubmitSuccess={fetchCourseHandle}
                        trigger={
                          <Button
                            variant="outline"
                            className="rounded-full bg-transparent"
                          >
                            Edit
                          </Button>
                        }
                      />
                    )}
                    <Button
                      variant="outline"
                      className="rounded-full  bg-transparent"
                      onClick={deleteCourseHandle}
                    >
                      Delete
                    </Button>
                  </div>
                )}
              </CardHeader>
              <CardTitle className="text-3xl">{course.title}</CardTitle>
              <CardContent className="p-0">
                <div className="flex flex-wrap gap-7 font-semibold text-muted">
                  <p className="flex gap-1 mr-2">
                    <IconClockFilled stroke={1} className="text-primary" />{" "}
                    <span>{course.durationWeeks} Weeks</span>
                  </p>
                  <p className="flex gap-2">
                    <IconSchool stroke={1} className="text-primary" />{" "}
                    <span>{course.studentCount} Students</span>
                  </p>
                  <p className="flex gap-2 mr-2">
                    <IconChartAreaLineFilled
                      stroke={1}
                      className="text-primary"
                    />{" "}
                    <span>{course.level} Level</span>
                  </p>
                  <p className="flex gap-2">
                    <IconFileFilled stroke={1} className="text-primary" />{" "}
                    <span>{course.lessonCount} Lessons</span>
                  </p>
                  <p className="flex gap-2 mr-2">
                    <IconHelpHexagonFilled
                      stroke={1}
                      className="text-primary"
                    />{" "}
                    <span>{course.quizCount} Quizzes</span>
                  </p>
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-[400px] ">
              <CardHeader className="p-0 ">
                <img src={img} className="w-full h-full object-cover" />
              </CardHeader>
              <CardContent className="p-0 py-4 flex items-center gap-32 lg:gap-12 justify-center">
                <CardDescription className="text-md flex items-center">
                  <IconCurrencyDollar stroke={2} />
                  {course.price}
                </CardDescription>
                <Button className="rounded-full text-xs p-3">Buy Now</Button>
              </CardContent>
            </Card>
          </div>
        )}
      </div>
      {course && (
        <Tabs defaultValue="overview" className="max-w-screen-lg m-auto mt-12">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="program">Program</TabsTrigger>
            <TabsTrigger value="faqs">FAQs</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>
          <TabsContent value="overview">
            <Card className="bg-muted rounded-none rounded-b-lg">
              <CardContent className="py-2">{course.overview}</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="program">
            <Card className="bg-muted rounded-none rounded-b-lg">
              <CardContent className="py-2">{course.curriculum}</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="faqs">
            <Card className="bg-muted rounded-none rounded-b-lg">
              <CardContent className="py-2">FAQs</CardContent>
            </Card>
          </TabsContent>
          <TabsContent value="reviews">
            <Card className="bg-muted rounded-none rounded-b-lg">
              <CardContent className="py-2">Reviews</CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      )}
      <CommentsForm />
    </div>
  );
};
