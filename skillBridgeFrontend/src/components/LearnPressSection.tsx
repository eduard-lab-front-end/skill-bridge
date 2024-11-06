import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
type TempType = {
  title: string;
  description: string;
}[];
export const LearnPressSection = () => {
  const cards: TempType = [
    {
      title: "25K+",
      description: "Active Students",
    },
    {
      title: "899",
      description: "Total Courses",
    },
    {
      title: "158",
      description: "Instructors",
    },
    {
      title: "100%",
      description: "Satisfaction Rate",
    },
  ];
  return (
    <div className="max-w-screen-lg m-auto px-4">
      <div className="bg-home-learn-section bg-auto bg-left xl:bg-center bg-no-repeat h-[300px] flex items-center my-16 px-10 rounded-lg ">
        <Card className="w-96 border-0 shadow-none bg-transparent">
          <p className="uppercase text-muted-foreground font-semibold mb-2">
            Get more power from
          </p>
          <CardHeader className="p-0 text-4xl mb-5 font-semibold">
            LearnPress Add-Ons
          </CardHeader>
          <CardDescription className="mb-3 font-semibold">
            The next level of LearnPress - LMS WordPress Plugin. More Powerful,
            Flexible and Magical Inside.
          </CardDescription>
          <CardFooter className="p-0">
            <Button className="rounded-full p-5">Explore Courses</Button>
          </CardFooter>
        </Card>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {cards.map((card) => (
          <Card className="p-4 min-h-48 flex flex-col items-center justify-center gap-4 bg-muted">
            <CardHeader className="p-0 text-primary text-xl font-bold">
              {card.title}
            </CardHeader>
            <CardTitle className="text-sm">{card.description}</CardTitle>
          </Card>
        ))}
      </div>
    </div>
  );
};
