import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem } from "./ui/form";
import { Search, X } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useEffect } from "react";

const formSchema = z.object({
  searchQuery: z.string({
    required_error: "Restaurant name is required",
  }),
});

export type SearchForm = z.infer<typeof formSchema>;

type Props = {
  onSubmit: (formData: SearchForm) => void;
  placeHolder: string;
  onReset?: () => void;
  searchQuery?: string;
};

const SearchBar = ({ onSubmit, onReset, placeHolder, searchQuery }: Props) => {
  const form = useForm<SearchForm>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      searchQuery,
    },
  });

  useEffect(() => {
    form.reset({ searchQuery });
  }, [form, searchQuery]);

  const handleReset = () => {
    form.reset({
      searchQuery: "",
    });

    if (onReset) {
      onReset();
    }
  };

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className={`flex items-center gap-3 justify-between flex-row border-2 rounded-full p-2 md:p-3 bg-white shadow-sm transition-all duration-300 focus-within:shadow-md focus-within:border-violet-300 ${
          form.formState.errors.searchQuery ? "border-red-400" : "border-violet-100"
        }`}
      >
        <Search
          strokeWidth={2.5}
          size={24}
          className="ml-2 text-violet-400 hidden md:block flex-shrink-0"
        />
        <FormField
          control={form.control}
          name="searchQuery"
          render={({ field }) => (
            <FormItem className="flex-1">
              <FormControl>
                <Input
                  {...field}
                  className="border-none shadow-none text-base md:text-lg focus-visible:ring-0 placeholder:text-gray-400"
                  placeholder={placeHolder}
                />
              </FormControl>
            </FormItem>
          )}
        />

        {onReset && (
          <Button
            onClick={handleReset}
            type="button"
            variant="ghost"
            size="sm"
            className="rounded-full text-gray-400 hover:text-gray-600 hover:bg-gray-100 px-3"
          >
            <X className="h-4 w-4 mr-1" />
            Reset
          </Button>
        )}
        <Button
          type="submit"
          className="rounded-full gradient-brand text-white font-semibold px-5 md:px-6 shadow-md hover:opacity-90 transition-opacity duration-200"
        >
          Search
        </Button>
      </form>
    </Form>
  );
};

export default SearchBar;
