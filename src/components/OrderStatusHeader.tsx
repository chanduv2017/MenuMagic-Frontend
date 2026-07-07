import { Order } from "@/types";
import { Progress } from "./ui/progress";
import { ORDER_STATUS } from "@/config/order-status-config";

type Props = {
  order: Order;
};

const OrderStatusHeader = ({ order }: Props) => {
  const getExpectedDelivery = () => {
    const created = new Date(order.createdAt);

    created.setMinutes(
      created.getMinutes() + order.restaurant.estimatedDeliveryTime
    );

    const hours = created.getHours();
    const minutes = created.getMinutes();

    const paddedMinutes = minutes < 10 ? `0${minutes}` : minutes;

    return `${hours}:${paddedMinutes}`;
  };

  const getOrderStatusInfo = () => {
    return (
      ORDER_STATUS.find((o) => o.value === order.status) || ORDER_STATUS[0]
    );
  };

  return (
    <>
      <div className="flex flex-col gap-4 md:flex-row md:justify-between md:items-center">
        <div className="flex flex-col gap-1">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Order Status
          </span>
          <h1 className="text-2xl md:text-3xl font-extrabold tracking-tight text-gray-900">
            {getOrderStatusInfo().label}
          </h1>
        </div>
        <div className="flex flex-col gap-1 md:text-right">
          <span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">
            Expected by
          </span>
          <span className="text-2xl md:text-3xl font-extrabold gradient-text">
            {getExpectedDelivery()}
          </span>
        </div>
      </div>
      <Progress
        className="h-3 rounded-full bg-violet-100"
        value={getOrderStatusInfo().progressValue}
      />
    </>
  );
};

export default OrderStatusHeader;
