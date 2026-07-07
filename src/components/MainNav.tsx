import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "./ui/button";
import UsernameMenu from "./UsernameMenu";
import { Link } from "react-router-dom";

const MainNav = () => {
  const { loginWithRedirect, isAuthenticated } = useAuth0();

  return (
    <span className="flex space-x-1 items-center">
      {isAuthenticated ? (
        <>
          <Link
            to="/order-status"
            className="relative px-4 py-2 font-semibold text-gray-700 hover:text-violet-600 transition-colors duration-200 rounded-lg hover:bg-violet-50"
          >
            Order Status
          </Link>
          <UsernameMenu />
        </>
      ) : (
        <Button
          className="gradient-brand hover:opacity-90 text-white font-semibold px-6 py-2 rounded-full shadow-md hover:shadow-lg transition-all duration-300"
          onClick={async () => await loginWithRedirect()}
        >
          Log In
        </Button>
      )}
    </span>
  );
};

export default MainNav;
