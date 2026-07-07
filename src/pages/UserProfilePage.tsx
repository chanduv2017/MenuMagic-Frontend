import { useGetMyUser, useUpdateMyUser } from "@/api/MyUserApi";
import UserProfileForm from "@/forms/user-profile-form/UserProfileForm";
import { Loader2, UserX } from "lucide-react";

const UserProfilePage = () => {
  const { currentUser, isLoading: isGetLoading } = useGetMyUser();
  const { updateUser, isLoading: isUpdateLoading } = useUpdateMyUser();

  if (isGetLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
        <Loader2 className="h-10 w-10 text-violet-500 animate-spin" />
        <p className="text-gray-500 font-medium">Loading your profile...</p>
      </div>
    );
  }

  if (!currentUser) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
        <div className="w-20 h-20 rounded-full gradient-warm flex items-center justify-center">
          <UserX className="h-10 w-10 text-violet-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">Unable to Load Profile</h2>
        <p className="text-gray-500 text-center max-w-md">
          We couldn't load your profile. Please try refreshing the page.
        </p>
      </div>
    );
  }

  return (
    <div className="animate-fade-in">
      <UserProfileForm
        currentUser={currentUser}
        onSave={updateUser}
        isLoading={isUpdateLoading}
      />
    </div>
  );
};

export default UserProfilePage;