import heroImg from "../../assets/rabbit-hero.webp";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className="relative">
      <img
        src={heroImg}
        alt="hero"
        className="h-[400px] w-full object-cover md:h-[600px] lg:h-[700px]"
      />
      <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-5">
        <div className="p-6 text-center text-white">
          <h1 className="mb-4 text-4xl font-bold uppercase tracking-tighter md:text-9xl">
            Vacation
            <br />
            Ready
          </h1>
          <p className="mb-6 text-sm tracking-tighter md:text-lg">
            Explore our vacation-ready outfits with fast worldwide shipping.
          </p>
          <Link
            to={"#"}
            className="rounded-sm bg-white px-6 py-2 text-lg text-gray-950"
          >
            Shop now
          </Link>
        </div>
      </div>
    </section>
  );
};
export default Hero;
