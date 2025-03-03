import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturesSection from "../components/Products/FeaturesSection";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { fetchProductsByFilter } from "../redux/slice/productsSlice";
import axios from "axios";

const Home = () => {
  const dispatch = useDispatch();
  const { products, loading, error } = useSelector((state) => state.products);
  const [bestSellerProducts, setBestSellerProducts] = useState(null);

  useEffect(() => {
    //Fetch products for a specific collection
    dispatch(
      fetchProductsByFilter({
        gender: "Women",
        category: "Bottom Wear",
        limit: 8,
      }),
    );

    //Fetch best seller products
    const fetchBestSeller = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`,
        );

        setBestSellerProducts(response.data);
      } catch (error) {
        console.error(error);
      }
    };

    fetchBestSeller();
  }, [dispatch]);

  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* Best seller */}
      <h2 className="mb-4 text-center text-3xl font-bold">Best Seller</h2>
      {bestSellerProducts ? (
        <ProductDetails productId={bestSellerProducts._id} />
      ) : (
        <p className="text-center">Loading best seller products ...</p>
      )}

      {/* Top Wears For Women */}
      <div className="container mx-auto">
        <h2 className="mb-4 text-center text-3xl font-bold">
          Top Wears For Women
        </h2>
        <ProductGrid products={products} loading={loading} error={error} />
      </div>

      <FeaturedCollection />

      <FeaturesSection />
    </div>
  );
};
export default Home;
