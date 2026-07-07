import { cuisineList } from "@/config/restaurant-options-config";
import { Label } from "./ui/label";
import { Check, ChevronDown, ChevronUp } from "lucide-react";
import { ChangeEvent } from "react";
import { Button } from "./ui/button";

type Props = {
  onChange: (cuisines: string[]) => void;
  selectedCuisines: string[];
  isExpanded: boolean;
  onExpandedClick: () => void;
};

const CuisineFilter = ({
  onChange,
  selectedCuisines,
  isExpanded,
  onExpandedClick,
}: Props) => {
  const handleCuisinesChange = (event: ChangeEvent<HTMLInputElement>) => {
    const clickedCuisine = event.target.value;
    const isChecked = event.target.checked;

    const newCuisinesList = isChecked
      ? [...selectedCuisines, clickedCuisine]
      : selectedCuisines.filter((cuisine) => cuisine !== clickedCuisine);

    onChange(newCuisinesList);
  };

  const handleCuisinesReset = () => onChange([]);

  return (
    <>
      <div className="flex justify-between items-center px-1 mb-3">
        <div className="text-sm font-bold text-gray-900 uppercase tracking-wider">
          Filter By Cuisine
        </div>
        <div
          onClick={handleCuisinesReset}
          className="text-xs font-semibold underline underline-offset-2 cursor-pointer text-violet-500 hover:text-violet-600 transition-colors duration-200"
        >
          Reset Filters
        </div>
      </div>

      <div className="space-y-2 flex flex-col">
        {cuisineList
          .slice(0, isExpanded ? cuisineList.length : 7)
          .map((cuisine) => {
            const isSelected = selectedCuisines.includes(cuisine);
            return (
              <div className="flex" key={cuisine}>
                <input
                  id={`cuisine_${cuisine}`}
                  type="checkbox"
                  className="hidden"
                  value={cuisine}
                  checked={isSelected}
                  onChange={handleCuisinesChange}
                />
                <Label
                  htmlFor={`cuisine_${cuisine}`}
                  className={`flex flex-1 items-center cursor-pointer text-sm rounded-xl px-4 py-2.5 font-medium transition-all duration-200 ${
                    isSelected
                      ? "gradient-brand text-white shadow-sm"
                      : "border border-violet-100 bg-white text-gray-700 hover:border-violet-300 hover:bg-violet-50"
                  }`}
                >
                  {isSelected && <Check size={16} strokeWidth={3} className="mr-1.5 flex-shrink-0" />}
                  {cuisine}
                </Label>
              </div>
            );
          })}

        <Button
          onClick={onExpandedClick}
          variant="ghost"
          className="mt-2 flex-1 text-violet-500 hover:text-violet-600 hover:bg-violet-50 rounded-xl font-semibold"
        >
          {isExpanded ? (
            <span className="flex flex-row items-center gap-1">
              View Less <ChevronUp className="h-4 w-4" />
            </span>
          ) : (
            <span className="flex flex-row items-center gap-1">
              View More <ChevronDown className="h-4 w-4" />
            </span>
          )}
        </Button>
      </div>
    </>
  );
};

export default CuisineFilter;
