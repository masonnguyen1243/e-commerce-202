import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

const TopBar = () => {
  return (
    <div className="bg-main text-white">
      <div className="container mx-auto flex items-center justify-between px-4 py-3">
        <div className="hidden items-center space-x-4 md:flex">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="h-5 w-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="h-5 w-5" />
          </a>
        </div>
        <div className="flex-grow text-center text-sm">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className="hidden text-sm md:block">
          <a href="tel:+123456789" className="hover:text-gray-300">
            +1 (234) 567-890
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
