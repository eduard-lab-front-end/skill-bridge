import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "./ui/input";
import { Link, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";

const formSchema = z.object({
  email: z
    .string()
    .min(5, {
      message: "Email must be at least 5 characters",
    })
    .email(),
  username: z.string().min(2, {
    message: "Username must be at least 5 characters",
  }),
  password: z.string().min(2, {
    message: "Password must be at least 5 characters",
  }),
});

export const LoginForm = () => {
  const navigate = useNavigate();
  const session = useContext(SessionContext);

  if (!session) {
    throw new Error(
      "SomeComponent must be used within a SessionContextProvider"
    );
  }

  const { setToken, verifyToken } = session;

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      username: "",
      password: "",
    },
  });

  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    try {
      const response = await fetch(
        `${import.meta.env.VITE_API_URL}/api/auth/login`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(values),
        }
      );
      if (response.status === 200) {
        const { token } = await response.json();
        setToken(token);
        await verifyToken(token);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-screen flex flex-col items-center justify-center ">
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-8 min-w-56 w-96 border-2 border-muted rounded-md p-6 shadow-2xl"
        >
          <h3 className="text-3xl font-semibold">Login</h3>
          <FormField
            control={form.control}
            name="username"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Username</FormLabel>
                <FormControl>
                  <Input placeholder="Username" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input placeholder="Email" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Password</FormLabel>
                <FormControl>
                  <Input placeholder="Password" {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormDescription>
            Do you already have an account go to{" "}
            <Link to="/register" className="text-primary text-sm underline">
              Register
            </Link>
          </FormDescription>
          <Button type="submit">Submit</Button>
        </form>
      </Form>
    </div>
  );
};
