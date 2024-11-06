import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type TempObj = {
  title: string;
  icon: string;
}[];

export const TopCategories = () => {
  const categories: TempObj = [
    {
      title:  "Art & Design",
      icon: '/src/assets/icons/categoty-Icon-1.png'
    },
    {
      title:  "Development",
      icon: '/src/assets/icons/categoty-Icon-2.png'
    },
    {
      title:  "Communication",
      icon: '/src/assets/icons/categoty-Icon-3.png'
    },
    {
      title:  "Videography",
      icon: '/src/assets/icons/categoty-Icon-4.png'
    },
    {
      title:  "Photography",
      icon: '/src/assets/icons/categoty-Icon-5.png'
    },
    {
      title:  "Marketing",
      icon: '/src/assets/icons/categoty-Icon-6.png'
    },
    {
      title:  "Content Writing",
      icon: '/src/assets/icons/categoty-Icon-7.png'
    },
    {
      title:  "Finance",
      icon: '/src/assets/icons/categoty-Icon-8.png'
    },
    {
      title:  "Science",
      icon: '/src/assets/icons/categoty-Icon-9.png'
    },
    {
      title:  "Network",
      icon: '/src/assets/icons/categoty-Icon-1.png'
    },
  ];
  return (
    <div className="mb-10 max-w-screen-lg m-auto px-4">
      <div>
        <div className="flex justify-between items-center mb-10">
          <div>
            <CardHeader className="text-left p-0 mb-3 text-xl font-semibold">
              Top Categories
            </CardHeader>
            <CardDescription>Explore our Popular Categories</CardDescription>
          </div>
          <div>
            <Button variant="outline" className="rounded-full">
              All Categories
            </Button>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
          {categories.map((category) => (
            <Card className="p-4 min-h-48 flex flex-col items-center justify-center gap-4">
              <CardHeader className="p-0">
                <img src={category.icon} alt="" />
              </CardHeader>
              <CardTitle>{category.title}</CardTitle>
              <CardDescription className="text-muted-foreground font-semibold">
                38 Courses
              </CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
};


