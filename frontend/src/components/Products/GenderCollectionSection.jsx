import menCollectionImage from "../../assets/mens-collection.webp";
import womenCollectionImage from "../../assets/womens-collection.webp";
import { Link } from "react-router-dom";

const GenderCollectionSection = () => {
  return (
    <section className="px-4 py-16 lg:px-0">
      <div className="container mx-auto flex flex-col gap-8 md:flex-row">
        {/* Women Collection */}
        <div className="relative flex-1">
          <img
            src={womenCollectionImage}
            alt="Women's Collection"
            className="h-[700px] w-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Women's Collection
            </h2>
            <Link
              to={"/colections/all?gender=Women"}
              className="text-gray-900 underline"
            >
              Shop now
            </Link>
          </div>
        </div>

        {/* Men Collection */}
        <div className="relative flex-1">
          <img
            src={menCollectionImage}
            alt="Men's Collection"
            className="h-[700px] w-full object-cover"
          />
          <div className="absolute bottom-8 left-8 bg-white bg-opacity-90 p-4">
            <h2 className="mb-3 text-2xl font-bold text-gray-900">
              Men's Collection
            </h2>
            <Link
              to={"/colections/all?gender=Men"}
              className="text-gray-900 underline"
            >
              Shop now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};
export default GenderCollectionSection;
