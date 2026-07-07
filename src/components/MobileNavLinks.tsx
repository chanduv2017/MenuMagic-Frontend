import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { useAuth0 } from "@auth0/auth0-react";
import { ClipboardList, Store, User, LogOut } from "lucide-react";

const MobileNavLinks = () => {
  const { logout } = useAuth0();
  return (
    <>
      <Link
        to="/order-status"
        className="flex items-center gap-3 font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-xl px-4 py-3 transition-all duration-200"
      >
        <ClipboardList className="h-5 w-5 text-violet-500" />
        Order Status
      </Link>
      <Link
        to="/manage-restaurant"
        className="flex items-center gap-3 font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-xl px-4 py-3 transition-all duration-200"
      >
        <Store className="h-5 w-5 text-violet-500" />
        My Restaurant
      </Link>
      <Link
        to="/user-profile"
        className="flex items-center gap-3 font-semibold text-gray-700 hover:text-violet-600 hover:bg-violet-50 rounded-xl px-4 py-3 transition-all duration-200"
      >
        <User className="h-5 w-5 text-violet-500" />
        User Profile
      </Link>
      <Button
        onClick={() => logout()}
        className="flex items-center gap-2 px-4 py-3 font-bold gradient-brand text-white rounded-full mt-2 shadow-md hover:opacity-90 transition-opacity duration-200"
      >
        <LogOut className="h-4 w-4" />
        Log Out
      </Button>
    </>
  );
};

export default MobileNavLinks;