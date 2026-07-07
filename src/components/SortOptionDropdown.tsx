import { Button } from "./ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { ArrowUpDown, Check } from "lucide-react";

type Props = {
  onChange: (value: string) => void;
  sortOption: string;
};

const SORT_OPTIONS = [
  {
    label: "Best match",
    value: "bestMatch",
  },
  {
    label: "Delivery price",
    value: "deliveryPrice",
  },
  {
    label: "Estimated delivery time",
    value: "estimatedDeliveryTime",
  },
];

const SortOptionDropdown = ({ onChange, sortOption }: Props) => {
  const selectedSortLabel =
    SORT_OPTIONS.find((option) => option.value === sortOption)?.label ||
    SORT_OPTIONS[0].label;

  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="cursor-pointer outline-none">
        <Button
          variant="outline"
          className="w-full rounded-xl border-violet-100 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200 font-semibold text-gray-700"
        >
          <ArrowUpDown className="h-4 w-4 mr-2 text-violet-500" />
          Sort by: {selectedSortLabel}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white/95 backdrop-blur-xl border border-violet-100 rounded-xl shadow-xl p-1 animate-slide-down">
        {SORT_OPTIONS.map((option) => (
          <DropdownMenuItem
            key={option.value}
            className="cursor-pointer rounded-lg hover:bg-violet-50 transition-colors duration-200 font-medium"
            onClick={() => onChange(option.value)}
          >
            <span className="flex items-center gap-2 w-full">
              {option.label}
              {sortOption === option.value && (
                <Check className="h-4 w-4 text-violet-500 ml-auto" />
              )}
            </span>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default SortOptionDropdown;
