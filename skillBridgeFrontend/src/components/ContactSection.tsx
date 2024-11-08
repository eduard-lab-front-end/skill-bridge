import {
  Card,
  CardContent,
  CardDescription,
  CardTitle,
} from "@/components/ui/card";
import { IconMailFilled, IconPhoneFilled } from "@tabler/icons-react";

export const ContactSection = () => {
  return (
    <div className="max-w-screen-lg m-auto p-4 flex flex-col md:flex-row gap-4 lg:p-0 items-center my-16">
      <div className="h-full md:w-1/4">
        <Card className="p-4 h-full border-none shadow-none">
          <CardTitle className="mb-4">Need A Direct Line?</CardTitle>
          <CardDescription className="mb-4">
            Cras massa et odio donec faucibus in. Vitae pretium massa dolor
            ullamcorper lectus elit quam.
          </CardDescription>
          <CardContent className="p-0">
            <div className="flex items-center gap-2 mb-5">
              <p className="bg-muted p-3 rounded-md">
                <IconPhoneFilled
                  stroke={2}
                  size={30}
                  className="text-primary"
                />
              </p>
              <div>
                <p className="text-muted-foreground">Phone</p>
                <p className="font-semibold">(123) 456 78990</p>
              </div>
            </div>
            <div className="flex items-center gap-2 mb-5">
              <p className="bg-muted p-3">
                <IconMailFilled size={30} stroke={2} className="text-primary" />
              </p>
              <div>
                <p className="text-muted-foreground">Email</p>

                <p className="font-semibold">contact@us.com</p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
      <div>
        <img src="/public/images/map.png" alt="" />
      </div>
    </div>
  );
};
