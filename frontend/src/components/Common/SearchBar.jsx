import { useState } from "react";
import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchProductsByFilter,
  setFilters,
} from "../../redux/slice/productsSlice";

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleSearch = (e) => {
    e.preventDefault();
    dispatch(setFilters({ search: searchTerm }));
    dispatch(fetchProductsByFilter({ search: searchTerm }));
    navigate(`collections/all?search=${searchTerm}`);
    setIsOpen(false);
  };

  return (
    <div
      className={`flex w-full items-center justify-center transition-all duration-300 ${isOpen ? "absolute left-0 top-0 z-50 h-24 w-full bg-white" : "w-auto"}`}
    >
      {isOpen ? (
        <form
          onSubmit={handleSearch}
          className="relative flex w-full items-center justify-center"
        >
          <div className="relative w-1/2">
            <input
              type="text"
              onChange={(e) => setSearchTerm(e.target.value)}
              placeholder="Search"
              value={searchTerm}
              className="w-full rounded-lg bg-gray-100 px-4 py-2 pr-12 placeholder:text-gray-700 focus:outline-none"
            />
            {/* Search icon */}
            <button
              type="submit"
              className="absolute right-2 top-1/2 -translate-y-1/2 transform text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="h-6 w-6" />
            </button>
          </div>
          {/* Close icon */}
          <button
            type="button"
            onClick={handleSearchToggle}
            className="absolute right-4 top-1/2 -translate-y-1/2 transform text-gray-600 hover:text-gray-800"
          >
            <HiMiniXMark className="h-6 w-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="h-6 w-6" />
        </button>
      )}
    </div>
  );
};

export default SearchBar;
