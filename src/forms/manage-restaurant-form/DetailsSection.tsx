import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";

const DetailsSection = () => {
  const { control } = useFormContext();
  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
          <span className="w-1 h-7 rounded-full gradient-brand inline-block" />
          Details
        </h2>
        <FormDescription className="mt-1 text-gray-500">
          Enter the details about your restaurant
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="restaurantName"
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
      <div className="flex gap-4">
        <FormField
          control={control}
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
          control={control}
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

      <div className="flex gap-4">
        <FormField
          control={control}
          name="deliveryPrice"
          render={({ field }) => (
            <FormItem className="flex-1 max-w-[50%]">
              <FormLabel className="font-semibold text-gray-700">Delivery price (£)</FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
                  placeholder="1.50"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={control}
          name="estimatedDeliveryTime"
          render={({ field }) => (
            <FormItem className="flex-1 max-w-[50%]">
              <FormLabel className="font-semibold text-gray-700">
                Estimated Delivery Time (minutes)
              </FormLabel>
              <FormControl>
                <Input
                  {...field}
                  className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
                  placeholder="30"
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default DetailsSection;
