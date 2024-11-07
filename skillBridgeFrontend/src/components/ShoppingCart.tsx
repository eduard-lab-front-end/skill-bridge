import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  SessionContext,
} from "@/contexts/SessionContext";
import { IconHeart, IconRefresh, IconTrash } from "@tabler/icons-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import Spinner from "./ui/Spinner";

export default function ShoppingCart() {
  const { courses } = useContext(SessionContext);

  return (
    <div className="grid max-w-screen-lg gap-4 px-4 mx-auto min-h-[90vh] mb-16">
      <div className="flex items-center gap-4">
        <h1 className="text-2xl font-semibold">Shopping Cart</h1>
        <Button size="icon" variant="outline" className="rounded-full">
          <IconRefresh stroke={2} />
          <span className="sr-only">Refresh</span>
        </Button>
      </div>
      <div className="grid gap-4">
        {!courses ? (
          <Spinner />
        ) : (
          courses.map((course) => (
            <>
              <Card className="grid gap-4 p-4 md:grid-cols-3 md:gap-4">
                <div className="flex items-center gap-4 md:col-span-2">
                  <img
                    src="/placeholder.svg"
                    alt="Product image"
                    width={200}
                    height={200}
                    className="aspect-square object-cover border border-gray-200 rounded-lg w-full md:max-h-[200px] overflow-hidden dark:border-gray-800"
                  />
                  <div className="grid gap-1.5">
                    <Link
                      to="#"
                      className="line-clamp-2 font-medium hover:underline"
                    >
                      {course.title}
                    </Link>
                    <div className="text-sm font-medium">{course.level}</div>
                    <Button size="icon" variant="outline">
                      <IconHeart stroke={2} />
                      <span className="sr-only">Add to wishlist</span>
                    </Button>
                  </div>
                </div>
                <div className="flex flex-col items-start gap-1.5">
                  <div className="text-2xl font-semibold">${course.price}</div>
                  <div className="flex items-center gap-1">
                    <div>{course.category}</div>
                  </div>
                  <div className="flex items-center gap-1">
                    <div className="w-20 md:w-24" />
                    <Button size="sm">Update</Button>
                    <Button variant="ghost" size="icon">
                      <IconTrash stroke={2} />
                      <span className="sr-only">Delete</span>
                    </Button>
                  </div>
                </div>
              </Card>
            </>
          ))
        )}
        <Card className="p-4">
          <div className="grid gap-2 md:grid-cols-2">
            <div className="flex items-center justify-between">
              <div>Subtotal</div>
              <div>$99.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Shipping</div>
              <div>$10.00</div>
            </div>
            <div className="flex items-center justify-between">
              <div>Tax</div>
              <div>$10.90</div>
            </div>
            <Separator className="w-full" />
            <div className="flex items-center justify-between font-medium">
              <div>Total</div>
              <div>$119.90</div>
            </div>
          </div>
        </Card>

        <div className="grid md:grid-cols-2 gap-2">
          <Button size="lg">Apply coupon</Button>
          <Button size="lg" className="w-full">
            Proceed to checkout
          </Button>
        </div>
      </div>
    </div>
  );
}
