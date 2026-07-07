import { CircleUserRound, LogOut, Store, User } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuth0 } from "@auth0/auth0-react";
import { Link } from "react-router-dom";
import { Separator } from "./ui/separator";
import { Button } from "./ui/button";

const UsernameMenu = () => {
  const { user, logout } = useAuth0();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="flex items-center gap-2 px-3 py-2 font-semibold text-gray-700 hover:text-violet-600 rounded-xl hover:bg-violet-50 transition-all duration-200 outline-none">
        <div className="w-8 h-8 rounded-full gradient-brand flex items-center justify-center shadow-sm">
          <CircleUserRound className="text-white h-5 w-5" />
        </div>
        <span className="hidden lg:inline text-sm truncate max-w-[150px]">
          {user?.email}
        </span>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56 p-2 bg-white/95 backdrop-blur-xl border border-violet-100/50 shadow-xl rounded-xl animate-slide-down">
        <DropdownMenuItem className="rounded-lg">
          <Link
            to="/manage-restaurant"
            className="flex items-center gap-2 font-semibold text-gray-700 hover:text-violet-600 w-full py-1"
          >
            <Store className="h-4 w-4 text-violet-500" />
            Manage Restaurant
          </Link>
        </DropdownMenuItem>
        <DropdownMenuItem className="rounded-lg">
          <Link
            to="/user-profile"
            className="flex items-center gap-2 font-semibold text-gray-700 hover:text-violet-600 w-full py-1"
          >
            <User className="h-4 w-4 text-violet-500" />
            User Profile
          </Link>
        </DropdownMenuItem>
        <Separator className="my-2 bg-violet-100" />
        <DropdownMenuItem className="p-0 rounded-lg">
          <Button
            onClick={() => logout()}
            className="flex items-center gap-2 w-full font-bold gradient-brand text-white rounded-lg hover:opacity-90 transition-opacity duration-200"
          >
            <LogOut className="h-4 w-4" />
            Log Out
          </Button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UsernameMenu;
