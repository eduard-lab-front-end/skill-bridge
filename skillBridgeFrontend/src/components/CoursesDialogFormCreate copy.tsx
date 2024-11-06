import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";
import { useToast } from "@/hooks/use-toast";
import { ToastAction } from "./ui/toast";


interface MyComponentProps {
  trigger: React.ReactNode;
}

const formSchema = z.object({
  title: z.string().min(5, {
    message: "Title must be at least 5 characters",
  }),
  image: z.string().min(2, {
    message: "Image must be at least 5 characters",
  }),
  durationWeeks: z.number(),
  studentCount: z.number(),
  price: z.number(),
  discount: z.number(),
  category: z.string().min(2, {
    message: "Category must be at least 5 characters",
  }),
  overview: z.string().min(2, {
    message: "Category must be at least 5 characters",
  }),
  curriculum: z.string(),
  level: z.string(),
  lessonCount: z.number(),
  quizCount: z.number(),
  faqs: z.string(),
});
export function CoursesDialogFormCreate({ trigger }: MyComponentProps) {
  const { fetchWithToken } = useContext(SessionContext);
  const { toast } = useToast()

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      image: "",
      durationWeeks: 2,
      studentCount: 136,
      price: 59,
      discount: 0,
      category: "",
      overview: "",
      curriculum: "",
      level: "beginner",
      lessonCount: 10,
      quizCount: 10,
      faqs: "",
    },
  });
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log(values);
    try {
      const response = await fetchWithToken("/api/courses", "POST", values);
      if(response.status === 201) {
        toast({
          title: "Created",
          description: "Successfully created",
        })
      }
    } catch (error) {
      toast({
        variant: "destructive",
        title: "Uh oh! Something went wrong.",
        description: "There was a problem with your request.",
        action: <ToastAction altText="Try again">Try again</ToastAction>,
      })
      console.log(error);
    }
  };
  return (
    <Dialog>
      <DialogTrigger asChild>{trigger}</DialogTrigger>
      <DialogContent className="">
        <DialogHeader>
          <DialogTitle>Create a course</DialogTitle>
          <DialogDescription>
            Make changes to your profile here. Click save when you're done.
          </DialogDescription>
        </DialogHeader>
        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="space-y-8 min-w-56 grid grid-cols-2"
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem className="mt-8">
                  <FormLabel>Title</FormLabel>
                  <FormControl>
                    <Input placeholder="Title" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="image"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Image</FormLabel>
                  <FormControl>
                    <Input placeholder="Image" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="durationWeeks"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>DurationWeeks</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="DurationWeeks"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="studentCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>StudentCount</FormLabel>
                  <FormControl>
                    <Input
                      placeholder="StudentCount"
                      {...field}
                      type="number"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="price"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Price</FormLabel>
                  <FormControl>
                    <Input placeholder="Price" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="discount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Discount</FormLabel>
                  <FormControl>
                    <Input placeholder="Discount" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="category"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Category</FormLabel>
                  <FormControl>
                    <Input placeholder="Category" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="overview"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Overview</FormLabel>
                  <FormControl>
                    <Input placeholder="Overview" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="curriculum"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Program</FormLabel>
                  <FormControl>
                    <Input placeholder="Program" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="level"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Level</FormLabel>
                  <FormControl>
                    <Input placeholder="Level" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="lessonCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Lesson</FormLabel>
                  <FormControl>
                    <Input placeholder="Lesson" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="quizCount"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Quiz</FormLabel>
                  <FormControl>
                    <Input placeholder="Quiz" {...field} type="number" />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="faqs"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Faqs</FormLabel>
                  <FormControl>
                    <Input placeholder="Faqs" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <DialogFooter>
              <Button type="submit">Submit</Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
}
