import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
// import background from '../assets/images/home-background.png'

export const HomeHeader = () => {
  return (
    <div className={`bg-home-header bg-cover bg-no-repeat h-[700px] mb-10`}>
      <div className="px-4 flex items-center h-full max-w-screen-lg m-auto">
        <Card className="w-96 text-left py-6 border-0 shadow-none mt-10 bg-transparent w-lg">
          <CardHeader className="p-0 text-4xl mb-5 font-semibold">
            Build Skills With Online Course
          </CardHeader>
          <CardDescription className="mb-3">
            We denounce with righteous indignation and dislike men who are
            beguiled and demoralized that cannot trouble.
          </CardDescription>
          <CardFooter className="p-0">
            <Button className="rounded-full p-5">Post Comment</Button>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};
