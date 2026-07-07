import { Restaurant } from "@/types";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "./ui/card";
import { MapPin } from "lucide-react";

type Props = {
  restaurant: Restaurant;
};

const RestaurantInfo = ({ restaurant }: Props) => {
  return (
    <Card className="border border-violet-100 shadow-sm rounded-2xl overflow-hidden">
      <CardHeader className="pb-3">
        <CardTitle className="text-3xl font-extrabold tracking-tight text-gray-900">
          {restaurant.restaurantName}
        </CardTitle>
        <CardDescription className="flex items-center gap-1.5 text-gray-500">
          <MapPin className="h-4 w-4 text-violet-400" />
          {restaurant.city}, {restaurant.country}
        </CardDescription>
      </CardHeader>
      <CardContent className="flex flex-wrap gap-1.5">
        {restaurant.cuisines.map((item) => (
          <span
            key={item}
            className="text-xs font-medium bg-violet-50 text-violet-700 px-2.5 py-1 rounded-full"
          >
            {item}
          </span>
        ))}
      </CardContent>
    </Card>
  );
};

export default RestaurantInfo;
