import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import register from "../assets/register.webp";
import { registerUser } from "../redux/slice/authSlice";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";

const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
  const { user, guestId } = useSelector((state) => state.auth);
  const { cart } = useSelector((state) => state.cart);

  //Get redirect parameter and check if it's checkout or something
  const redirect = new URLSearchParams(location.search).get("redirect") || "/";
  const isCheckoutRedirect = redirect.includes("checkout");

  useEffect(() => {
    if (user) {
      if (cart?.products.length > 0 && guestId) {
        dispatch(mergeCart(guestId, user)).then(() => {
          navigate(isCheckoutRedirect ? "/checkout" : "/");
        });
      } else {
        navigate(isCheckoutRedirect ? "/checkout" : "/");
      }
    }
  }, [user, guestId, cart, navigate, isCheckoutRedirect, dispatch]);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(registerUser({ name, email, password }));

    setEmail("");
    setPassword("");
    setName("");
  };

  return (
    <div className="flex">
      {/* Left  */}
      <div className="flex w-full flex-col items-center justify-center p-8 md:w-1/2 md:p-12">
        <form
          onSubmit={handleSubmit}
          className="w-full max-w-md rounded-lg border bg-white p-8 shadow-sm"
        >
          <div className="mb-6 flex justify-center">
            <h2 className="text-xl font-medium">Rabbit</h2>
          </div>
          <h2 className="mb-6 text-center text-2xl font-bold">Hey there! 👋</h2>
          <p className="mb-6 text-center">
            Enter your username and password to login
          </p>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">Email</label>
            <input
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="Enter your email address"
            />
          </div>
          <div className="mb-4">
            <label className="mb-2 block text-sm font-semibold">Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded border p-2"
              placeholder="Enter your password"
            />
          </div>
          <button
            type=""
            className="w-full rounded-lg bg-black p-2 font-semibold text-white transition hover:bg-gray-800"
          >
            Sign up
          </button>
          <p className="mt-6 text-center text-sm">
            Already have an account?
            <Link
              to={`/login?redirect=${encodeURIComponent(redirect)}`}
              className="pl-1 text-blue-500 underline"
            >
              Login
            </Link>
          </p>
        </form>
      </div>

      {/* Right */}
      <div className="hidden w-1/2 bg-gray-800 md:block">
        <div className="flex h-full flex-col items-center justify-center">
          <img
            src={register}
            alt="register"
            className="h-[750px] w-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};
export default Register;
