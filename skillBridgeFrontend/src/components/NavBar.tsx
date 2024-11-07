
import { Button } from "@/components/ui/button";
import { Toggle } from "@/components/ui/toggle";
import { Sheet, SheetTrigger, SheetContent } from "@/components/ui/sheet";
import { Link, useNavigate } from "react-router-dom";
import { IconBook, IconMenu2, IconMoon, IconShoppingCart } from "@tabler/icons-react";
import { useContext } from "react";
import { SessionContext } from "@/contexts/SessionContext";

export default function Component() {
  const navigate = useNavigate()
  const session = useContext(SessionContext);
  if (!session) {
    throw new Error(
      "SomeComponent must be used within a SessionContextProvider"
    );
  }
  const { isAuthenticated, logout } = session;
  const logoutHandler = ():void => {
    if(isAuthenticated) {
      logout();
      navigate('/');
    } else {
      navigate('/login')
    }
  }

  return (
    <header className="px-4 sm:px-0 max-w-screen-lg m-auto sticky top-0 z-50 border-b bg-white dark:border-gray-800 dark:bg-gray-950">
      <div className="w-full flex h-16  items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <IconBook stroke={2} className="text-primary" />
          <span className="font-semibold">SkillBridge</span>
        </Link>
        <nav className="hidden items-center gap-6 text-sm font-medium md:flex">
          <Link to="/" className="text-muted-foreground hover:text-primary">
            Home
          </Link>
          <Link
            to="/courses"
            className="text-muted-foreground hover:text-primary"
          >
            Courses
          </Link>
          <Link
            to="/blogs"
            className="text-muted-foreground hover:text-primary"
          >
            Blogs
          </Link>
          <Link
            to="/contact"
            className="text-muted-foreground hover:text-primary"
          >
            Contact
          </Link>
        </nav>
        <div className="flex items-center gap-4">
          <Button
            variant='link'
            className="text-sm font-semibold text-muted-foreground hidden items-center gap-2 md:flex"
            onClick={logoutHandler}
          >
            {isAuthenticated ? "Logout" : 'Login / Register'}
          </Button>
          <Button onClick={() => navigate('/cart')} variant='link' className="text-sm font-semibold text-muted-foreground hidden items-center gap-2 md:flex">
          <IconShoppingCart stroke={2} />
          </Button>
          {/* <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" className="rounded-full">
                <IconSearch
                  size={35}
                  stroke={1}
                  className="text-secondary-foreground"
                />
                <span className="sr-only">Search</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-[300px] p-4">
            
              <div className="relative">
                <IconSearch
                  stroke={1}
                  className="absolute left-2.5 top-2.5 h-4 w-4"
                />
                <Input
                  type="search"
                  placeholder="Search..."
                  className="pl-8 w-full"
                />
              </div>
            </DropdownMenuContent>
          </DropdownMenu> */}
          <Toggle aria-label="Toggle dark mode" className="rounded-full">
            <IconMoon stroke={1} size={20} className="text-muted-foreground" />
          </Toggle>
          <Sheet>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="rounded-full md:hidden"
              >
                <IconMenu2 stroke={1} className="h-10 w-10" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left" className="md:hidden">
              <div className="grid gap-4 p-4">
                <Link
                  to="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Home
                </Link>
                <Link
                  to="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  About
                </Link>
                <Link
                  to="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Services
                </Link>
                <Link
                  to="#"
                  className="text-sm font-medium text-gray-500 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-50"
                >
                  Contact
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  );
}
