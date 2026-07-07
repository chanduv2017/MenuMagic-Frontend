import { Order, OrderStatus } from "@/types";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Separator } from "./ui/separator";
import { Badge } from "./ui/badge";
import { Label } from "./ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";
import { ORDER_STATUS } from "@/config/order-status-config";
import { useUpdateMyRestaurantOrder } from "@/api/MyRestaurantApi";
import { useEffect, useState } from "react";
import { Clock, MapPin, User, Banknote } from "lucide-react";

type Props = {
  order: Order;
};

const OrderItemCard = ({ order }: Props) => {
  const { updateRestaurantStatus, isLoading } = useUpdateMyRestaurantOrder();
  const [status, setStatus] = useState<OrderStatus>(order.status);

  useEffect(() => {
    setStatus(order.status);
  }, [order.status]);

  const handleStatusChange = async (newStatus: OrderStatus) => {
    await updateRestaurantStatus({
      orderId: order._id as string,
      status: newStatus,
    });
    setStatus(newStatus);
  };

  const getTime = () => {
    const orderDateTime = new Date(order.createdAt);

    const hours = orderDateTime.getHours();
    const minutes = orderDateTime.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  return (
    <Card className="border border-violet-50 rounded-2xl overflow-hidden hover:shadow-md transition-shadow duration-300">
      <CardHeader className="pb-3">
        <CardTitle className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm">
          <div className="flex items-start gap-2">
            <User className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-gray-900 block">Customer</span>
              <span className="font-normal text-gray-600">
                {order.deliveryDetails.name}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <MapPin className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-gray-900 block">Address</span>
              <span className="font-normal text-gray-600">
                {order.deliveryDetails.addressLine1}, {order.deliveryDetails.city}
              </span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Clock className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-gray-900 block">Time</span>
              <span className="font-normal text-gray-600">{getTime()}</span>
            </div>
          </div>
          <div className="flex items-start gap-2">
            <Banknote className="h-4 w-4 text-violet-400 mt-0.5 flex-shrink-0" />
            <div>
              <span className="font-bold text-gray-900 block">Total</span>
              <span className="font-normal gradient-text font-bold">
                £{(order.totalAmount / 100).toFixed(2)}
              </span>
            </div>
          </div>
        </CardTitle>
        <Separator className="bg-violet-100 mt-2" />
      </CardHeader>
      <CardContent className="flex flex-col gap-5">
        <div className="flex flex-wrap gap-2">
          {order.cartItems.map((cartItem) => (
            <span key={cartItem.menuItemId} className="flex items-center gap-1.5">
              <Badge
                variant="outline"
                className="border-violet-200 bg-violet-50 text-violet-700 font-bold text-xs"
              >
                {cartItem.quantity}
              </Badge>
              <span className="text-sm font-medium text-gray-700">{cartItem.name}</span>
            </span>
          ))}
        </div>
        <div className="flex flex-col space-y-2 max-w-xs">
          <Label htmlFor="status" className="font-semibold text-sm text-gray-700">
            Order Status
          </Label>
          <Select
            value={status}
            disabled={isLoading}
            onValueChange={(value) => handleStatusChange(value as OrderStatus)}
          >
            <SelectTrigger
              id="status"
              className="rounded-xl border-violet-100 focus:ring-violet-500 bg-white"
            >
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent
              position="popper"
              className="bg-white/95 backdrop-blur-xl border border-violet-100 rounded-xl shadow-xl"
            >
              {ORDER_STATUS.map((status) => (
                <SelectItem
                  key={status.value}
                  value={status.value}
                  className="rounded-lg"
                >
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>
      </CardContent>
    </Card>
  );
};

export default OrderItemCard;
