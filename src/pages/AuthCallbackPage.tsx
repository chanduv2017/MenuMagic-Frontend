import { useCreateMyUser } from "@/api/MyUserApi";
import { useAuth0 } from "@auth0/auth0-react";
import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Loader2 } from "lucide-react";

const AuthCallbackPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth0();
  const { createUser } = useCreateMyUser();

  const hasCreatedUser = useRef(false);

  useEffect(() => {
    if (user?.sub && user?.email && !hasCreatedUser.current) {
      createUser({ auth0Id: user.sub, email: user.email });
      hasCreatedUser.current = true;
    }
    navigate("/");
  }, [createUser, navigate, user]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen gap-4 bg-background">
      <div className="w-12 h-12 rounded-2xl gradient-brand flex items-center justify-center shadow-lg animate-pulse">
        <span className="text-white font-black text-xl">M</span>
      </div>
      <Loader2 className="h-8 w-8 text-violet-500 animate-spin" />
      <p className="text-gray-500 font-medium">Signing you in...</p>
    </div>
  );
};

export default AuthCallbackPage;