import { CartItem } from "@/pages/DetailPage";
import { Restaurant } from "@/types";
import { CardContent, CardHeader, CardTitle } from "./ui/card";
import { Badge } from "./ui/badge";
import { Separator } from "./ui/separator";
import { Trash2 } from "lucide-react";

type Props = {
  restaurant: Restaurant;
  cartItems: CartItem[];
  removeFromCart: (cartItem: CartItem) => void;
};

const OrderSummary = ({ restaurant, cartItems, removeFromCart }: Props) => {
  const getTotalCost = () => {
    const totalInPence = cartItems.reduce(
      (total, cartItem) => total + cartItem.price * cartItem.quantity,
      0
    );

    const totalWithDelivery = totalInPence + restaurant.deliveryPrice;

    return (totalWithDelivery / 100).toFixed(2);
  };

  return (
    <>
      <CardHeader className="pb-3">
        <CardTitle className="text-xl font-bold tracking-tight flex justify-between items-center text-gray-900">
          <span>Your Order</span>
          <span className="gradient-text text-2xl font-extrabold">£{getTotalCost()}</span>
        </CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4">
        {cartItems.length === 0 ? (
          <p className="text-gray-400 text-sm text-center py-4">
            Your cart is empty. Add items from the menu.
          </p>
        ) : (
          cartItems.map((item) => (
            <div key={item._id} className="flex justify-between items-center group">
              <span className="flex items-center gap-2">
                <Badge
                  variant="outline"
                  className="border-violet-200 bg-violet-50 text-violet-700 font-bold text-xs"
                >
                  {item.quantity}
                </Badge>
                <span className="text-sm font-medium text-gray-700">{item.name}</span>
              </span>
              <span className="flex items-center gap-2">
                <Trash2
                  className="cursor-pointer text-gray-300 hover:text-red-500 transition-colors duration-200"
                  size={16}
                  onClick={() => removeFromCart(item)}
                />
                <span className="text-sm font-semibold text-gray-700">
                  £{((item.price * item.quantity) / 100).toFixed(2)}
                </span>
              </span>
            </div>
          ))
        )}
        <Separator className="bg-violet-100" />
        <div className="flex justify-between items-center text-sm">
          <span className="text-gray-500 font-medium">Delivery</span>
          <span className="font-semibold text-gray-700">
            £{(restaurant.deliveryPrice / 100).toFixed(2)}
          </span>
        </div>
        <Separator className="bg-violet-100" />
      </CardContent>
    </>
  );
};

export default OrderSummary;
