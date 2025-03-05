import { useEffect, useLayoutEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { clearCart } from "../redux/slice/cartSlice";

const OrderConfirmationPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { checkout } = useSelector((state) => state.checkout);

  useLayoutEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  //Clear the cart when order is confirmed
  useEffect(() => {
    if (checkout && checkout._id) {
      dispatch(clearCart());
      localStorage.removeItem("cart");
    } else {
      navigate("/my-orders");
    }
  }, [checkout, dispatch, navigate]);

  const calculateEstimatedDelivery = (createdAt) => {
    const orderDate = new Date(createdAt);
    orderDate.setDate(orderDate.getDate() + 10); //add 10 days to order date
    return orderDate.toLocaleDateString();
  };

  return (
    <div className="mx-auto max-w-4xl bg-white p-6">
      <h1 className="mb-8 text-center text-4xl font-bold text-emerald-700">
        Thank you for your order!
      </h1>

      {checkout && (
        <div className="rounded-lg border p-6">
          <div className="mb-20 flex justify-between">
            {/* Order Id and Date */}
            <div>
              <h2 className="text-xl font-semibold">
                Order Id: {checkout._id}
              </h2>
              <p className="text-gray-500">
                Order Date: {new Date(checkout.createdAt).toLocaleDateString()}
              </p>
            </div>
            {/* Estimated Delivery */}
            <div>
              <p className="text-sm text-emerald-700">
                Estimated Delivery:{" "}
                {calculateEstimatedDelivery(checkout.createdAt)}
              </p>
            </div>
          </div>

          {/* Ordered Items */}
          <div className="mb-20">
            {checkout.checkoutItems.map((item) => (
              <div key={item.productId} className="mb-4 flex items-center">
                <img
                  src={item.image}
                  alt={item.name}
                  className="mr-4 h-16 w-16 rounded-md object-cover"
                />
                <div>
                  <h4 className="text-lg font-semibold">{item.name}</h4>
                  <p className="text-sm text-gray-500">
                    {item.color} | {item.size}
                  </p>
                </div>
                <div className="ml-auto text-right">
                  <p className="text-lg">${item.price}</p>
                  <p className="text-sm text-gray-500">
                    Quantity: {item.quantity}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Payment and Delivery Info */}
          <div className="grid grid-cols-2 gap-8">
            {/* Payment info */}
            <div>
              <h4 className="mb-2 text-lg font-semibold">Payment</h4>
              <p className="text-gray-600">PayPal</p>
            </div>

            {/* Delivery info */}
            <div>
              <h4 className="mb-2 text-lg font-semibold">Delivery</h4>
              <p className="text-gray-600">
                {checkout.shippingAddress.address}
              </p>
              <p className="text-gray-600">
                {checkout.shippingAddress.city},{" "}
                {checkout.shippingAddress.country}
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default OrderConfirmationPage;
