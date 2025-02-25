import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
// Users
import UserLayout from "./components/Layout/UserLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";
import OrderDetailPage from "./pages/OrderDetailPage";
import MyOrdersPage from "./pages/MyOrdersPage";
// Admin
import AdminLayout from "./components/Admin/AdminLayout";
import AdminHomePage from "./pages/AdminHomePage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="top-right" />
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User layout */}
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/collections/:collection" element={<CollectionPage />} />
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route
            path="/order-confirmation"
            element={<OrderConfirmationPage />}
          />
          <Route path="/order/:id" element={<OrderDetailPage />} />
          <Route path="/my-orders" element={<MyOrdersPage />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin layout */}
          <Route index element={<AdminHomePage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
