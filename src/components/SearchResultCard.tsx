import { Restaurant } from "@/types";
import { Link } from "react-router-dom";
import { AspectRatio } from "./ui/aspect-ratio";
import { Clock, Banknote } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const SearchResultCard = ({ restaurant }: Props) => {
  return (
    <Link
      to={`/detail/${restaurant._id}`}
      className="grid lg:grid-cols-[2fr_3fr] gap-5 group bg-white rounded-2xl border border-violet-50 overflow-hidden card-hover p-4 lg:p-0"
    >
      <AspectRatio ratio={16 / 6}>
        <div className="relative w-full h-full rounded-xl lg:rounded-none overflow-hidden">
          <img
            src={restaurant.imageUrl}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            alt={restaurant.restaurantName}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
      </AspectRatio>
      <div className="flex flex-col justify-center py-2 lg:py-4 lg:pr-6">
        <h3 className="text-xl font-bold tracking-tight text-gray-900 mb-2 group-hover:text-violet-600 transition-colors duration-200">
          {restaurant.restaurantName}
        </h3>
        <div id="card-content" className="flex flex-col gap-3">
          <div className="flex flex-row flex-wrap gap-1.5">
            {restaurant.cuisines.map((item) => (
              <span
                key={item}
                className="text-xs font-medium bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full"
              >
                {item}
              </span>
            ))}
          </div>
          <div className="flex items-center gap-4 text-sm">
            <div className="flex items-center gap-1.5 text-emerald-600 font-medium">
              <Clock className="h-4 w-4" />
              {restaurant.estimatedDeliveryTime} mins
            </div>
            <div className="flex items-center gap-1.5 text-gray-600 font-medium">
              <Banknote className="h-4 w-4 text-gray-400" />
              Delivery from £{(restaurant.deliveryPrice / 100).toFixed(2)}
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default SearchResultCard;
