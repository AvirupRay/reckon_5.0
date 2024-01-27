import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="  h-[3vw] bg-transparent w-full fixed z-50 ">
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#35471650_40%,#405a1281_100%)] backdrop-blur-sm  h-[3vw] mx-2 my-2 rounded-2xl overflow-hidden flex justify-around py-[.1rem] shadow-inner">
        <NavLink
          to="/"
          className={({ isActive }) =>
            `  px-[2vw] py-1 font-semibold text-md  rounded-xl transition-all flex items-center justify-center ${
              isActive
                ? "bg-[#4155458e]  text-[#fffef4] hover:bg-[#283a2c8e] backdrop-blur-md"
                : " bg-transparent  text-[#292c23] hover:bg-[#18351879]  hover: hover:text-[#ffffea]  "
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/supplr"
          className={({ isActive }) =>
            `  px-[2vw] py-1 font-semibold text-md  rounded-xl transition-all flex items-center justify-center ${
              isActive
                ? "bg-[#4155458e]  text-[#fffef4] hover:bg-[#283a2c8e] backdrop-blur-md"
                : " bg-transparent  text-[#292c23] hover:bg-[#18351879]  hover: shadow-inner hover:text-[#ffffea]  "
            }`
          }
        >
          Supplier's Page
        </NavLink>
      </div>
    </div>
  );
};

export default Header;

// [background:radial-gradient(125%_125%_at_50%_10%,#e0ebbe_40%,#b9d1ae_100%)]
// bg-[#ff767685] z-50 h-[3vw] flex justify-around rounded-2xl overflow-hidden fixed w-full  mt-[.5vw] backdrop-blur-sm
//bg-[#35471650]
