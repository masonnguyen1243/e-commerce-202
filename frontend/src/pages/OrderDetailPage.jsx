import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link, useNavigate } from "react-router-dom";
import { fetchOrderDetails } from "../redux/slice/orderSlice";

const OrderDetailPage = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const { orderDetails, loading, error } = useSelector((state) => state.orders);

  useEffect(() => {
    dispatch(fetchOrderDetails(id));
  }, [dispatch, id]);

  if (loading) return <p>Loading ...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div className="mx-auto max-w-7xl p-4 sm:p-6">
      <h2 className="mb-6 text-2xl font-bold md:text-3xl">Order Details</h2>
      {!orderDetails ? (
        <p>No order details found</p>
      ) : (
        <div className="rounded-lg border p-4 sm:p-6">
          {/* Order info */}
          <div className="mb-8 flex flex-col justify-between sm:flex-row">
            <div>
              <h3 className="text-lg font-semibold md:text-xs">
                Order ID: #{orderDetails._id}
              </h3>
              <p className="text-gray-600">
                {new Date(orderDetails.createdAt).toLocaleDateString()}
              </p>
            </div>
            <div className="mt-4 flex flex-col items-start sm:mt-0 sm:items-end">
              <span
                className={`mb-2 rounded-full px-3 py-1 text-sm font-medium ${orderDetails.isPaid ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}`}
              >
                {orderDetails.isPaid ? "Approved" : "Pending"}
              </span>
              <span
                className={`mb-2 rounded-full px-3 py-1 text-sm font-medium ${orderDetails.isDelivery ? "bg-green-100 text-green-700" : "bg-yellow-100 text-yellow-700"}`}
              >
                {orderDetails.isDelivery ? "Delivered" : "Pending Delivery"}
              </span>
            </div>
          </div>

          {/* Customer, Payment, Shipping Info */}
          <div className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-3">
            <div>
              <h3 className="mb-2 text-lg font-semibold">Payment Info</h3>
              <p>Payment method: {orderDetails.paymentMethod}</p>
              <p>Staus: {orderDetails.isPaid ? "Paid" : "Unpaid"}</p>
            </div>
            <div>
              <h3 className="mb-2 text-lg font-semibold">Shipping Info</h3>
              <p>Shipping method: {orderDetails.shippingMethod}</p>
              <p>
                Address:{" "}
                {`${orderDetails.shippingAddress.city}, ${orderDetails.shippingAddress.country}`}
              </p>
            </div>
          </div>

          {/* Product Lists */}
          <div className="overflow-x-auto">
            <h3 className="mb-4 text-lg font-semibold">Products</h3>
            <table className="mb-4 min-w-full text-gray-600">
              <thead className="bg-gray-100">
                <tr>
                  <th className="px-4 py-2">Name</th>
                  <th className="px-4 py-2">Unit Price</th>
                  <th className="px-4 py-2">Quantity</th>
                  <th className="px-4 py-2">Total</th>
                </tr>
              </thead>
              <tbody>
                {orderDetails.orderItems.map((item) => (
                  <tr key={item.productId} className="border-b text-center">
                    <td className="flex items-center px-4 py-2">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <Link
                        to={`/product/${item.productId}`}
                        className="pl-6 text-blue-500 hover:underline"
                      >
                        {item.name}
                      </Link>
                    </td>
                    <td className="px-4 py-2">${item.price}</td>
                    <td className="px-4 py-2">{item.quantity}</td>
                    <td className="px-4 py-2">${item.price * item.quantity}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Back to Orders Link */}
          <Link to={"/my-orders"} className="text-blue-500 hover:underline">
            Back to my orders
          </Link>
        </div>
      )}
    </div>
  );
};
export default OrderDetailPage;
