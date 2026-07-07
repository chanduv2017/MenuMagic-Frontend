import { AspectRatio } from "@/components/ui/aspect-ratio";
import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useFormContext } from "react-hook-form";
import { ImagePlus } from "lucide-react";

const ImageSection = () => {
  const { control, watch } = useFormContext();

  const existingImageUrl = watch("imageUrl");

  return (
    <div className="space-y-4">
      <div>
        <h2 className="text-2xl font-extrabold text-gray-900 flex items-center gap-2">
          <span className="w-1 h-7 rounded-full gradient-brand inline-block" />
          Image
        </h2>
        <FormDescription className="mt-1 text-gray-500">
          Add an image that will be displayed on your restaurant listing in the
          search results. Adding a new image will overwrite the existing one.
        </FormDescription>
      </div>

      <div className="flex flex-col gap-6 md:w-[50%]">
        {existingImageUrl && (
          <AspectRatio ratio={16 / 9}>
            <img
              src={existingImageUrl}
              className="rounded-xl object-cover h-full w-full shadow-md"
              alt="Restaurant"
            />
          </AspectRatio>
        )}
        <FormField
          control={control}
          name="imageFile"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <div className="relative">
                  <Input
                    className="bg-white border-2 border-dashed border-violet-200 rounded-xl py-8 text-center cursor-pointer hover:border-violet-400 hover:bg-violet-50/50 transition-all duration-200 file:mr-4 file:rounded-full file:border-0 file:bg-violet-50 file:text-violet-600 file:font-semibold file:px-4 file:py-2 file:cursor-pointer"
                    type="file"
                    accept=".jpg, .jpeg, .png"
                    onChange={(event) =>
                      field.onChange(
                        event.target.files ? event.target.files[0] : null
                      )
                    }
                  />
                  {!existingImageUrl && (
                    <div className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none">
                      <ImagePlus className="h-8 w-8 text-violet-300 mb-2" />
                      <span className="text-sm text-gray-400">Click to upload an image</span>
                    </div>
                  )}
                </div>
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />
      </div>
    </div>
  );
};

export default ImageSection;
