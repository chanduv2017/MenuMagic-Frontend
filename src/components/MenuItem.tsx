import { MenuItem } from "../types";
import { Card, CardTitle } from "./ui/card";
import { Plus } from "lucide-react";

type Props = {
  menuItem: MenuItem;
  addToCart: () => void;
};

const MenuItemComponent = ({ menuItem, addToCart }: Props) => {
  return (
    <Card
      className="cursor-pointer group border border-violet-50 hover:border-violet-200 rounded-xl transition-all duration-300 hover:shadow-md"
      onClick={addToCart}
    >
      <div className="flex items-center justify-between p-4">
        <div className="flex flex-col gap-1">
          <CardTitle className="text-base font-semibold text-gray-900 group-hover:text-violet-600 transition-colors duration-200">
            {menuItem.name}
          </CardTitle>
          <span className="text-sm font-bold gradient-text">
            £{(menuItem.price / 100).toFixed(2)}
          </span>
        </div>
        <div className="w-9 h-9 rounded-full bg-violet-50 group-hover:gradient-brand flex items-center justify-center transition-all duration-300 flex-shrink-0">
          <Plus className="h-5 w-5 text-violet-500 group-hover:text-white transition-colors duration-300" />
        </div>
      </div>
    </Card>
  );
};

export default MenuItemComponent;
