import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../Apps/modeSlice";

const Header = () => {
  const Dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);
  const toggleMode = () => {
    Dispatch(changeMode(darkMode));
  };
  useEffect(() => {
    if (darkMode) {
      document.querySelector("html").classList.remove("light");
      document.querySelector("html").classList.add("dark");
    } else {
      document.querySelector("html").classList.remove("dark");
      document.querySelector("html").classList.add("light");
    }
  }, [darkMode]);

  return (
    <div className="  h-[3vw] bg-transparent w-full fixed z-50 ">
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#8fa88d7c_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#5672566b_40%,#8fa88d7c_100%)] backdrop-blur-sm  h-[6.5vh] mx-2 my-2 rounded-2xl  flex gap-[1vw] shadow-inner justify-normal items-center">
        <NavLink
          className={() => `
          h-[6.5vh] px-[2.5vw] py-1 mx-3 text-md rounded-md transition-all flex items-center justify-center border-b-[.3rem] border-transparent font-semibold bg-[#5d7e5d6b] self-center`}
        >
          Logo
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            ` h-[6.8vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
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
            ` h-[6.8vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
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
            ` h-[6.8vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
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
            ` h-[6.8vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
              isActive
                ? "  [background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#2766338e_100%)] text-[#1c4423] hover:[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#183a1e8e_100%)] shadow-lg"
                : " text-[#656663] border-transparent hover:backdrop-blur-sm"
            }`
          }
        >
          Supplier's Page
        </NavLink>
        <div className="h-[6.2vh] self-center  w-[20vw] ml-auto px-[1vw] mx-[2vw] flex items-center justify-evenly  ">
          <div
            className=" bg-[#869e86ad] backdrop-blur-sm p-[.4vw] rounded-md cursor-pointer drop-shadow-md"
            onClick={toggleMode}
          >
            <Sun
              className={`scale-0 absolute transition-transform ${
                darkMode
                  ? " scale-0 rotate-90 opacity-50"
                  : " scale-100 rotate-0 opacity-100"
              }`}
            />
            <Moon
              className={`scale-0 transition-transform ${
                darkMode
                  ? " scale-100 rotate-0 opacity-100"
                  : " scale-0 rotate-90 opacity-50"
              }`}
            />
          </div>
          <div className=" flex items-center justify-evenly bg-transparent rounded w-[13vw]  shadow-inner backdrop-blur-md h-[5.6vh] ml-auto border-[.13rem]">
            <img
              className="w-[2.2vw] rounded-lg object-cover select-none "
              src="https://i1.sndcdn.com/avatars-rPurHyYvyLmOUXBc-KLy74A-t240x240.jpg"
              alt="profile"
            />
            <div className="  h-[5.3vh] flex items-center select-none ">
              <div className=" h-[4vh] flex flex-col justify-center">
                <p className=" text-[.75vw] absolute top-[.3vh]">Name</p>
                <span className=" opacity-70 text-[.79vw] pt-[1.2vh]">
                  random@gamil.com
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;

// [background:radial-gradient(125%_125%_at_50%_10%,#e0ebbe_40%,#b9d1ae_100%)]
// bg-[#ff767685] z-50 h-[3vw] flex justify-around rounded-2xl overflow-hidden fixed w-full  mt-[.5vw] backdrop-blur-sm
//bg-[#35471650]
