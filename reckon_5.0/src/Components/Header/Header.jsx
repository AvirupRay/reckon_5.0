import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className="  h-[3vw] bg-transparent w-full fixed z-50 ">
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#8fa88d7c_100%)] backdrop-blur-sm  h-[3vw] mx-2 my-2 rounded-2xl  flex justify-around  shadow-inner">
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` h-[6.5vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
              isActive
                ? "  [background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#2766338e_100%)] text-[#1c4423] hover:[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#183a1e8e_100%)] shadow-lg"
                : " text-[#656663] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className={({ isActive }) =>
            ` h-[6.5vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
              isActive
                ? "  [background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#2766338e_100%)] text-[#1c4423] hover:[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#183a1e8e_100%)] shadow-lg"
                : " text-[#656663] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          About
        </NavLink>
        <NavLink
          to="/contactUs"
          className={({ isActive }) =>
            ` h-[6.5vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
              isActive
                ? "  [background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#2766338e_100%)] text-[#1c4423] hover:[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#183a1e8e_100%)] shadow-lg"
                : " text-[#656663] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Contact Us
        </NavLink>
        <NavLink
          to="/supplr"
          className={({ isActive }) =>
            ` h-[6.5vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
              isActive
                ? "  [background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#2766338e_100%)] text-[#1c4423] hover:[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#183a1e8e_100%)] shadow-lg"
                : " text-[#656663] border-transparent hover:backdrop-blur-sm"
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
