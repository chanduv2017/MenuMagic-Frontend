import { Order } from "@/types";
import { Separator } from "./ui/separator";
import { MapPin, ShoppingBag } from "lucide-react";

type Props = {
  order: Order;
};

const OrderStatusDetail = ({ order }: Props) => {
  return (
    <div className="space-y-5">
      <div className="flex flex-col gap-1">
        <span className="font-bold text-gray-900 flex items-center gap-2">
          <MapPin className="h-4 w-4 text-violet-500" />
          Delivering to
        </span>
        <span className="text-gray-700 ml-6">{order.deliveryDetails.name}</span>
        <span className="text-gray-500 text-sm ml-6">
          {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
        </span>
      </div>
      <div className="flex flex-col gap-1">
        <span className="font-bold text-gray-900 flex items-center gap-2">
          <ShoppingBag className="h-4 w-4 text-violet-500" />
          Your Order
        </span>
        <ul className="ml-6 space-y-1">
          {order.cartItems.map((item) => (
            <li key={item.menuItemId} className="text-gray-700 text-sm">
              {item.name} × {item.quantity}
            </li>
          ))}
        </ul>
      </div>
      <Separator className="bg-violet-100" />
      <div className="flex justify-between items-center">
        <span className="font-bold text-gray-900">Total</span>
        <span className="text-xl font-extrabold gradient-text">
          £{(order.totalAmount / 100).toFixed(2)}
        </span>
      </div>
    </div>
  );
};

export default OrderStatusDetail;
