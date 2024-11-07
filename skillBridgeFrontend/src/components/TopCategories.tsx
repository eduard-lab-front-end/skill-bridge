import { Button } from "@/components/ui/button";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import category_1 from "../assets/icons/category-Icon-1.png";
import category_2 from "../assets/icons/category-Icon-2.png";
import category_3 from "../assets/icons/category-Icon-3.png";
import category_4 from "../assets/icons/category-Icon-4.png";
import category_5 from "../assets/icons/category-Icon-5.png";
import category_6 from "../assets/icons/category-Icon-6.png";
import category_7 from "../assets/icons/category-Icon-7.png";
import category_8 from "../assets/icons/category-Icon-8.png";
import category_9 from "../assets/icons/category-Icon-9.png";

type CategoriesType = {
  title: string;
  icon: string;
}[];

export const TopCategories = () => {
  const categories: CategoriesType = [
    {
      title: "Art & Design",
      icon: category_1,
    },
    {
      title: "Development",
      icon: category_2,
    },
    {
      title: "Communication",
      icon: category_3,
    },
    {
      title: "Videography",
      icon: category_4,
    },
    {
      title: "Photography",
      icon: category_5,
    },
    {
      title: "Marketing",
      icon: category_6,
    },
    {
      title: "Content Writing",
      icon: category_7,
    },
    {
      title: "Finance",
      icon: category_8,
    },
    {
      title: "Science",
      icon: category_9,
    },
    {
      title: "Network",
      icon: category_1,
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
