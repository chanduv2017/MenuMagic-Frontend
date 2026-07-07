import { CircleUserRound, Menu } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "./ui/sheet";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import MobileNavLinks from "./MobileNavLinks";

const MobileNav = () => {
  const { isAuthenticated, loginWithRedirect, user } = useAuth0();

  return (
    <Sheet>
      <SheetTrigger>
        <Menu className="text-violet-500 h-6 w-6" />
      </SheetTrigger>
      <SheetContent className="space-y-4 bg-white/95 backdrop-blur-xl">
        <SheetTitle>
          {isAuthenticated ? (
            <span className="flex items-center font-bold gap-2 text-gray-800">
              <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center">
                <CircleUserRound className="text-white h-5 w-5" />
              </div>
              <span className="truncate text-sm">{user?.email}</span>
            </span>
          ) : (
            <span className="font-bold gradient-text text-lg">Welcome to MenuMagic!</span>
          )}
        </SheetTitle>
        <Separator className="bg-violet-100" />
        <SheetDescription className="flex flex-col gap-4">
          {isAuthenticated ? (
            <MobileNavLinks />
          ) : (
            <Button
              onClick={() => loginWithRedirect()}
              className="flex-1 font-bold gradient-brand text-white rounded-full shadow-md hover:opacity-90 transition-opacity duration-200"
            >
              Log In
            </Button>
          )}
        </SheetDescription>
      </SheetContent>
    </Sheet>
  );
};

export default MobileNav;