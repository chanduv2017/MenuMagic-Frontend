import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import LoadingButton from "@/components/LoadingButton";
import { Button } from "@/components/ui/button";
import { User } from "@/types";
import { useEffect } from "react";
import { Save } from "lucide-react";

const formSchema = z.object({
  email: z.string().optional(),
  name: z.string().min(1, "name is required"),
  addressLine1: z.string().min(1, "Address Line 1 is required"),
  city: z.string().min(1, "City is required"),
  country: z.string().min(1, "Country is required"),
});

export type UserFormData = z.infer<typeof formSchema>;

type Props = {
  currentUser: User;
  onSave: (userProfileData: UserFormData) => void;
  isLoading: boolean;
  title?: string;
  buttonText?: string;
};

const UserProfileForm = ({
  onSave,
  isLoading,
  currentUser,
  title = "User Profile",
  buttonText = "Submit",
}: Props) => {
  const form = useForm<UserFormData>({
    resolver: zodResolver(formSchema),
    defaultValues: currentUser,
  });

  useEffect(() => {
    form.reset(currentUser);
  }, [currentUser, form]);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSave)}
        className="space-y-6 bg-white border border-violet-50 rounded-2xl p-6 md:p-10 shadow-sm"
      >
        <div>
          <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
            <span className="w-1 h-7 rounded-full gradient-brand inline-block" />
            {title}
          </h2>
          <FormDescription className="mt-1 text-gray-500">
            View and change your profile information here
          </FormDescription>
        </div>
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-gray-700">Email</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  disabled
                  className="bg-gray-50 border-violet-100 rounded-xl"
                />
              </FormControl>
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel className="font-semibold text-gray-700">Name</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <div className="flex flex-col md:flex-row gap-4">
          <FormField
            control={form.control}
            name="addressLine1"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold text-gray-700">Address Line 1</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="city"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold text-gray-700">City</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="country"
            render={({ field }) => (
              <FormItem className="flex-1">
                <FormLabel className="font-semibold text-gray-700">Country</FormLabel>
                <FormControl>
                  <Input
                    {...field}
                    className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
        </div>
        {isLoading ? (
          <LoadingButton />
        ) : (
          <Button
            type="submit"
            className="gradient-brand text-white font-bold rounded-full px-8 shadow-md hover:opacity-90 transition-opacity duration-200"
          >
            <Save className="h-4 w-4 mr-2" />
            {buttonText}
          </Button>
        )}
      </form>
    </Form>
  );
};

export default UserProfileForm;