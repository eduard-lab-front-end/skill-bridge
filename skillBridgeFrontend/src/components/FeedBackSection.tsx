import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IconPaperclip } from "@tabler/icons-react";

type FeedbackType = {
  description: string;
  fullName: string;
  role: string;
}[];
export const FeedBackSection = () => {
  const mockData: FeedbackType = [
    {
      description:
        "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      fullName: "Roe Smith",
      role: "Designer",
    },
    {
      description:
        "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      fullName: "Roe Smith",
      role: "Designer",
    },
    {
      description:
        "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      fullName: "Roe Smith",
      role: "Designer",
    },
    {
      description:
        "I must explain to you how all this mistaken. Tdea of denouncing pleasure and praising pain was born and I will give you a complete account of the system and expound",
      fullName: "Roe Smith",
      role: "Designer",
    },
  ];
  return (
    <div className="my-16 max-w-screen-lg m-auto px-4F">
      <h3 className="text-3xl font-semibold text-center">Student Feedbacks</h3>
      <p className="text-md font-semibold text-center text-muted-foreground mb-7">What Students Say About Academy LMS</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {mockData.map((user) => (
          <Card className="p-7 min-h-48 flex flex-col items-left justify-center gap-4">
            <IconPaperclip stroke={2} className="text-primary"/>
            <CardHeader className="p-0 text-muted-foreground">{user.description}</CardHeader>
            <CardTitle>{user.fullName}</CardTitle>
            <CardDescription className="text-muted-foreground font-semibold">
              {user.role}
            </CardDescription>
          </Card>
        ))}
      </div>
    </div>
  );
};
