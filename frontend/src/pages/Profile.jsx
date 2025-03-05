import MyOrdersPage from "./MyOrdersPage";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout } from "../redux/slice/authSlice";
import { clearCart } from "../redux/slice/cartSlice";

const Profile = () => {
  const { user } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  const handleLogout = () => {
    dispatch(logout());
    dispatch(clearCart());
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen flex-col">
      <div className="container mx-auto flex-grow p-4 md:p-6">
        <div className="flex flex-col space-y-6 md:flex-row md:space-x-6 md:space-y-0">
          {/* Left section */}
          <div className="w-full rounded-lg p-6 shadow-md md:w-1/3 lg:w-1/4">
            <h1 className="mb-4 text-2xl font-bold md:text-3xl">
              {user?.name}
            </h1>
            <p className="mb-4 text-lg text-gray-600">{user?.email}</p>
            <button
              onClick={handleLogout}
              className="w-full rounded bg-red-500 px-4 py-2 text-white hover:bg-red-600"
            >
              Logout
            </button>
          </div>

          {/* Right section: order table */}
          <div className="w-full md:w-2/3 lg:w-3/4">
            <MyOrdersPage />
          </div>
        </div>
      </div>
    </div>
  );
};
export default Profile;
