import { useGetMyOrders } from "@/api/OrderApi";
import OrderStatusDetail from "@/components/OrderStatusDetail";
import OrderStatusHeader from "@/components/OrderStatusHeader";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Loader2, Package } from "lucide-react";

const OrderStatusPage = () => {
  const { orders, isLoading } = useGetMyOrders();

  if (isLoading) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
        <Loader2 className="h-10 w-10 text-violet-500 animate-spin" />
        <p className="text-gray-500 font-medium">Loading your orders...</p>
      </div>
    );
  }

  if (!orders || orders.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 gap-4 animate-fade-in">
        <div className="w-20 h-20 rounded-full gradient-warm flex items-center justify-center">
          <Package className="h-10 w-10 text-violet-400" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900">No Orders Yet</h2>
        <p className="text-gray-500 text-center max-w-md">
          You haven't placed any orders yet. Start exploring restaurants and order your first meal!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-8 animate-fade-in">
      {orders.map((order) => (
        <div
          key={order._id}
          className="space-y-8 bg-white border border-violet-50 p-8 md:p-10 rounded-2xl shadow-sm card-hover"
        >
          <OrderStatusHeader order={order} />
          <div className="grid gap-8 md:grid-cols-2">
            <OrderStatusDetail order={order} />
            <AspectRatio ratio={16 / 5}>
              <img
                src={order.restaurant.imageUrl}
                className="rounded-xl object-cover h-full w-full shadow-md"
                alt={order.restaurant.restaurantName}
              />
            </AspectRatio>
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderStatusPage;
