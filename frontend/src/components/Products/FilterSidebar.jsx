import { useEffect, useState } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const FilterSidebar = () => {
  //x.com/?a=1&b=2
  const [searchParams, setSearchParams] = useSearchParams();
  const navigate = useNavigate();
  const [filters, setFilters] = useState({
    category: "",
    gender: "",
    color: "",
    size: [],
    material: [],
    brand: [],
    minPrice: 0,
    maxPrice: 100,
  });
  const [priceRange, setPriceRange] = useState([0, 100]);
  const categories = ["Top Wear", "Bottom Wear"];
  const colors = [
    "Red",
    "Blue",
    "Black",
    "Green",
    "Yellow",
    "Gray",
    "White",
    "Pink",
    "Beige",
    "Navy",
  ];
  const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
  const materials = [
    "Cotton",
    "Wool",
    "Denim",
    "Polyester",
    "Silk",
    "Linen",
    "Viscose",
    "Fleece",
  ];
  const brands = [
    "Urban Threads",
    "Modern Fit",
    "Street Style",
    "Beach Breeze",
    "Fashionista",
    "ChicStyle",
  ];
  const genders = ["Men", "Women"];

  useEffect(() => {
    const params = Object.fromEntries([...searchParams]);
    // {category: "Top Wear", maxPrice: 100} => params.category
    setFilters({
      category: params.category || "",
      gender: params.gender || "",
      color: params.color || "",
      size: params.size ? params.size.split(",") : [],
      material: params.material ? params.material.split(",") : [],
      brand: params.brand ? params.brand.split(",") : [],
      minPrice: params.minPrice || 0,
      maxPrice: params.maxPrice || 100,
    });
    setPriceRange([0, params.maxPrice || 100]);
  }, [searchParams]);

  const handleFilterChange = (e) => {
    const { name, value, checked, type } = e.target;
    let newFilters = { ...filters };

    if (type === "checkbox") {
      if (checked) {
        newFilters[name] = [...(newFilters[name] || []), value]; // ["XS", "S"]
      } else {
        newFilters[name] = newFilters[name].filter((item) => item !== value);
      }
    } else {
      newFilters[name] = value;
    }

    setFilters(newFilters);
    updateURLParams(newFilters);
  };

  const updateURLParams = (newFilters) => {
    const params = new URLSearchParams();
    // {category: "Top Wear", Size: ["XS", "S"]}
    Object.keys(newFilters).forEach((key) => {
      if (Array.isArray(newFilters[key]) && newFilters[key].length > 0) {
        params.append(key, newFilters[key].join(",")); //"XS,S"
      } else if (newFilters[key]) {
        params.append(key, newFilters[key]);
      }
    });

    setSearchParams(params);
    navigate(`?${params.toString()}`); //?category=Bottom+Wear&size=XS%2CS
  };

  const handlePriceChange = (e) => {
    const newPrice = e.target.value;
    setPriceRange([0, newPrice]);
    const newFilters = { ...filters, minPrice: 0, maxPrice: newPrice };
    setFilters(filters);
    updateURLParams(newFilters);
  };

  return (
    <div className="p-4">
      <h3 className="mb-4 text-xl font-medium text-gray-800">Filter</h3>

      {/* Category filter */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-600">Category</label>
        {categories.map((category) => (
          <div key={category} className="mb-1 flex items-center">
            <input
              type="radio"
              value={category}
              onChange={handleFilterChange}
              name="category"
              checked={filters.category === category}
              className="mr-2 h-4 w-4 cursor-pointer border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700">{category}</span>
          </div>
        ))}
      </div>

      {/* Gender filter */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-600">Gender</label>
        {genders.map((gender) => (
          <div key={gender} className="mb-1 flex items-center">
            <input
              type="radio"
              name="gender"
              value={gender}
              onChange={handleFilterChange}
              checked={filters.gender === gender}
              className="mr-2 h-4 w-4 cursor-pointer border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700">{gender}</span>
          </div>
        ))}
      </div>

      {/* Color filter */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-600">Color</label>
        <div className="flex flex-wrap gap-2">
          {colors.map((color) => (
            <button
              key={color}
              name="color"
              value={color}
              onClick={handleFilterChange}
              className={`h-8 w-8 cursor-pointer rounded-full border border-gray-300 transition hover:scale-105 ${filters.color === color ? "ring-2" : "ring-blue-500"}`}
              style={{ backgroundColor: color.toLocaleLowerCase() }}
            ></button>
          ))}
        </div>
      </div>

      {/* Size filter */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-600">Size</label>
        {sizes.map((size) => (
          <div key={size} className="mb-1 flex items-center">
            <input
              type="checkbox"
              name="size"
              value={size}
              onChange={handleFilterChange}
              checked={filters.size.includes(size)}
              className="mr-2 h-4 w-4 cursor-pointer border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700">{size}</span>
          </div>
        ))}
      </div>

      {/* Material filter */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-600">Material</label>
        {materials.map((material) => (
          <div key={material} className="mb-1 flex items-center">
            <input
              type="checkbox"
              name="material"
              value={material}
              onChange={handleFilterChange}
              checked={filters.material.includes(material)}
              className="mr-2 h-4 w-4 cursor-pointer border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700">{material}</span>
          </div>
        ))}
      </div>

      {/* Brand filter */}
      <div className="mb-6">
        <label className="mb-2 block font-medium text-gray-600">Brand</label>
        {brands.map((brand) => (
          <div key={brand} className="mb-1 flex items-center">
            <input
              type="checkbox"
              name="brand"
              value={brand}
              onChange={handleFilterChange}
              checked={filters.brand.includes(brand)}
              className="mr-2 h-4 w-4 cursor-pointer border-gray-300 text-blue-500 focus:ring-blue-400"
            />
            <span className="text-gray-700">{brand}</span>
          </div>
        ))}
      </div>

      {/* Price filter */}
      <div className="mb-8">
        <label className="mb-2 block font-medium text-gray-600">
          Price Range
        </label>
        <input
          type="range"
          name="priceRange"
          min={0}
          max={100}
          value={priceRange[1]}
          onChange={handlePriceChange}
          className="h-2 w-full cursor-pointer appearance-none rounded-lg bg-gray-300"
        />
        <div className="mt-2 flex justify-between text-gray-600">
          <span>$0</span>
          <span>${priceRange[1]}</span>
        </div>
      </div>
    </div>
  );
};
export default FilterSidebar;
