import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Toaster } from "sonner";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import CollectionPage from "./pages/CollectionPage";
import ProductDetails from "./components/Products/ProductDetails";
import Checkout from "./components/Cart/Checkout";
import OrderConfirmationPage from "./pages/OrderConfirmationPage";

const App = () => {
  return (
    <BrowserRouter>
      <Toaster position="bottom-left" />
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
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
