import { CoursesDialogFormUpdate } from "@/components/CoursesDialogFormUpdate";
import { Button } from "@/components/ui/button";
import { CardDescription, CardHeader } from "@/components/ui/card";
import { ToastAction } from "@/components/ui/toast";
import { SessionContext } from "@/contexts/SessionContext";
import { useToast } from "@/hooks/use-toast";

import { error } from "console";
import { useContext, useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const CourseDetailsPage = () => {
  const [course, setCourse] = useState();
  const { courseId } = useParams();
  const navigate = useNavigate();
  const { toast } = useToast();
  const { isAuthenticated } = useContext(SessionContext);
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
      navigate("/courses");
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    fetchCourseHandle();
  }, []);
  return (
    <div className="max-w-screen-lg m-auto gap-6 min-h-[90vh]">
      <div className="flex justify-between items-center">
        <div>
          <CardHeader className="text-left p-0 mb-3 text-2xl font-semibold">
            Details
          </CardHeader>
          <CardDescription>Explore our Courses</CardDescription>
        </div>
        {isAuthenticated && (
          <div className="flex gap-3">
            {course && (
              <CoursesDialogFormUpdate
                courseData={course}
                trigger={
                  <Button variant="outline" className="rounded-full">
                    Edit
                  </Button>
                }
              />
            )}
            <Button
              variant="outline"
              className="rounded-full"
              onClick={deleteCourseHandle}
            >
              Delete
            </Button>
          </div>
        )}
      </div>
      <div></div>
    </div>
  );
};
