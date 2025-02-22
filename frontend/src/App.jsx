import { BrowserRouter, Routes, Route } from "react-router-dom";
import UserLayout from "./components/Layout/UserLayout";
import AdminLayout from "./components/Layout/AdminLayout";
import Home from "./pages/Home";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          {/* User layout */}
          <Route path="/" element={<Home />} />
        </Route>
        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin layout */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
