import {
  useCreateMyRestaurant,
  useGetMyRestaurant,
  useGetMyRestaurantOrders,
  useUpdateMyRestaurant,
} from "@/api/MyRestaurantApi";
import OrderItemCard from "@/components/OrderItemCard";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import ManageRestaurantForm from "@/forms/manage-restaurant-form/ManageRestaurantForm";

const ManageRestaurantPage = () => {
  const { createRestaurant, isLoading: isCreateLoading } =
    useCreateMyRestaurant();
  const { restaurant } = useGetMyRestaurant();
  const { updateRestaurant, isLoading: isUpdateLoading } =
    useUpdateMyRestaurant();

  const { orders } = useGetMyRestaurantOrders();

  const isEditing = !!restaurant;

  return (
    <div className="animate-fade-in">
      <Tabs defaultValue="orders">
        <TabsList className="bg-violet-50 border border-violet-100 rounded-xl p-1 mb-6">
          <TabsTrigger
            value="orders"
            className="rounded-lg font-semibold data-[state=active]:bg-white data-[state=active]:text-violet-600 data-[state=active]:shadow-sm px-6 py-2 transition-all duration-200"
          >
            Orders
            {orders && orders.length > 0 && (
              <span className="ml-2 gradient-brand text-white text-xs font-bold px-2 py-0.5 rounded-full">
                {orders.length}
              </span>
            )}
          </TabsTrigger>
          <TabsTrigger
            value="manage-restaurant"
            className="rounded-lg font-semibold data-[state=active]:bg-white data-[state=active]:text-violet-600 data-[state=active]:shadow-sm px-6 py-2 transition-all duration-200"
          >
            Manage Restaurant
          </TabsTrigger>
        </TabsList>
        <TabsContent
          value="orders"
          className="space-y-5 bg-white border border-violet-50 p-8 md:p-10 rounded-2xl shadow-sm"
        >
          <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
            <span className="w-1 h-7 rounded-full gradient-brand inline-block" />
            {orders?.length ?? 0} Active Orders
          </h2>
          <div className="space-y-4">
            {orders?.map((order) => (
              <OrderItemCard key={order._id} order={order} />
            ))}
          </div>
        </TabsContent>
        <TabsContent value="manage-restaurant">
          <ManageRestaurantForm
            restaurant={restaurant}
            onSave={isEditing ? updateRestaurant : createRestaurant}
            isLoading={isCreateLoading || isUpdateLoading}
          />
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ManageRestaurantPage;
