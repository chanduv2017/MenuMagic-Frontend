import { Button } from "@/components/ui/button";
import { FormDescription, FormField, FormItem } from "@/components/ui/form";
import { useFieldArray, useFormContext } from "react-hook-form";
import MenuItemInput from "./MenuItemInput";
import { Plus } from "lucide-react";

const MenuSection = () => {
  const { control } = useFormContext();

  const { fields, append, remove } = useFieldArray({
    control,
    name: "menuItems",
  });

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
          <span className="w-1 h-7 rounded-full gradient-brand inline-block" />
          Menu
        </h2>
        <FormDescription className="mt-1 text-gray-500">
          Create your menu and give each item a name and a price
        </FormDescription>
      </div>
      <FormField
        control={control}
        name="menuItems"
        render={() => (
          <FormItem className="flex flex-col gap-3">
            {fields.map((_, index) => (
              <MenuItemInput
                key={index}
                index={index}
                removeMenuItem={() => remove(index)}
              />
            ))}
          </FormItem>
        )}
      />
      <Button
        type="button"
        onClick={() => append({ name: "", price: "" })}
        variant="outline"
        className="rounded-full border-violet-200 text-violet-600 hover:bg-violet-50 hover:border-violet-300 font-semibold transition-all duration-200"
      >
        <Plus className="h-4 w-4 mr-1" />
        Add Menu Item
      </Button>
    </div>
  );
};

export default MenuSection;
