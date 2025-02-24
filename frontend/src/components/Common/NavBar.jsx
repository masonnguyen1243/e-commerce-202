import { Link } from "react-router-dom";
import { useState } from "react";
import {
  HiOutlineUser,
  HiOutlineShoppingBag,
  HiBars3BottomRight,
} from "react-icons/hi2";
import SearchBar from "./SearchBar";
import CartDrawer from "../Layout/CartDrawer";
import { IoMdClose } from "react-icons/io";

const NavBar = () => {
  const [drawerOpen, setDrawerOpen] = useState(false);
  const [navDrawerOpen, setNavDrawerOpen] = useState(false);

  const toggleCartDrawer = () => {
    setDrawerOpen(!drawerOpen);
  };

  const toggleNavDrawer = () => {
    setNavDrawerOpen(!navDrawerOpen);
  };

  return (
    <>
      <nav className="container mx-auto flex items-center justify-between px-6 py-4">
        {/* Left logo */}
        <div>
          <Link to={"/"} className="text-2xl font-medium">
            Rabbit
          </Link>
        </div>
        {/* Center - Navigation link */}
        <div className="hidden space-x-6 md:flex">
          <Link
            to={"/collections/all"}
            className="text-sm font-medium uppercase text-gray-700 hover:text-black"
          >
            Men
          </Link>
          <Link
            to={"#"}
            className="text-sm font-medium uppercase text-gray-700 hover:text-black"
          >
            Woman
          </Link>
          <Link
            to={"#"}
            className="text-sm font-medium uppercase text-gray-700 hover:text-black"
          >
            Top Wear
          </Link>
          <Link
            to={"#"}
            className="text-sm font-medium uppercase text-gray-700 hover:text-black"
          >
            Bottom Wear
          </Link>
        </div>
        {/* Right - Icons */}
        <div className="flex items-center space-x-4">
          <Link to={"/profile"} className="hover:text-black">
            <HiOutlineUser className="h-6 w-6 text-gray-700" />
          </Link>
          <button
            onClick={toggleCartDrawer}
            className="relative hover:text-black"
          >
            <HiOutlineShoppingBag className="h-6 w-6 text-gray-700" />
            <span className="absolute -top-1 rounded-full bg-main px-2 py-0.5 text-xs text-white">
              4
            </span>
          </button>
          {/* Search */}
          <div className="overflow-hidden">
            <SearchBar />
          </div>

          <button onClick={toggleNavDrawer} className="md:hidden">
            <HiBars3BottomRight className="h-6 w-6 text-gray-700" />
          </button>
        </div>
      </nav>
      <CartDrawer drawerOpen={drawerOpen} toggleCartDrawer={toggleCartDrawer} />

      {/* Mobile Navigation */}
      <div
        className={`fixed left-0 top-0 z-50 h-full w-3/4 transform bg-white shadow-lg transition-transform duration-300 sm:w-1/2 md:w-1/3 ${navDrawerOpen ? "translate-x-0" : "-translate-x-full"}`}
      >
        <div className="flex justify-end p-4">
          <button onClick={toggleNavDrawer}>
            <IoMdClose className="h-6 w-6 text-gray-600" />
          </button>
        </div>
        <div className="p-4">
          <h2 className="mb-4 text-xl font-semibold">Menu</h2>
          <nav className="space-y-4">
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Men
            </Link>
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Women
            </Link>
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Top Wear
            </Link>
            <Link
              to={"#"}
              onClick={toggleNavDrawer}
              className="block text-gray-600 hover:text-black"
            >
              Bottom Wear
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
};

export default NavBar;
