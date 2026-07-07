import { Button } from "@/components/ui/button";
import {
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { Trash2 } from "lucide-react";

type Props = {
  index: number;
  removeMenuItem: () => void;
};

const MenuItemInput = ({ index, removeMenuItem }: Props) => {
  const { control } = useFormContext();

  return (
    <div className="flex flex-row items-end gap-3 p-4 bg-gray-50/50 border border-violet-50 rounded-xl">
      <FormField
        control={control}
        name={`menuItems.${index}.name`}
        render={({ field }) => (
          <FormItem className="flex-1">
            <FormLabel className="flex items-center gap-1 font-semibold text-gray-700 text-sm">
              Name <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="Cheese Pizza"
                className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <FormField
        control={control}
        name={`menuItems.${index}.price`}
        render={({ field }) => (
          <FormItem className="w-32">
            <FormLabel className="flex items-center gap-1 font-semibold text-gray-700 text-sm">
              Price (£) <FormMessage />
            </FormLabel>
            <FormControl>
              <Input
                {...field}
                placeholder="8.00"
                className="bg-white border-violet-100 rounded-xl focus:border-violet-300 focus:ring-violet-500"
              />
            </FormControl>
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={removeMenuItem}
        variant="ghost"
        size="icon"
        className="text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all duration-200 flex-shrink-0 h-10 w-10"
      >
        <Trash2 className="h-4 w-4" />
      </Button>
    </div>
  );
};

export default MenuItemInput;
