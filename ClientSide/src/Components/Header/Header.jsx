import React, { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { Sun, Moon } from "lucide-react";
import { useDispatch, useSelector } from "react-redux";
import { changeMode } from "../../Apps/modeSlice";
import RobinFoodLogo from "../../Pictures/RobinFoodLogo.png";
import { logOutUser } from "../../Apps/userInfoSlice";

const Header = () => {
  const [logOutCheck, setlogOutCheck] = useState(false);
  const navigate = useNavigate();
  const userInformation = useSelector((state) => state.userinfo.userInfos);
  const Dispatch = useDispatch();
  const darkMode = useSelector((state) => state.mode.darkMode);
  console.log(userInformation);

  const logoutcall = () => {
    setlogOutCheck(true);
    setTimeout(() => {
      setlogOutCheck(false);
    }, 1200);
    setTimeout(() => {
      Dispatch(logOutUser());
      navigate("/");
    }, 1250);
  };

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
      <div
        className={` z-20 transition-all absolute  left-[50%] [transform:translate(-50%,-50%)] bg-[#d12929] border-2 border-b-4 border-[#a33434] px-[1vw] py-[1vh] rounded-lg font-Arimo text-white drop-shadow-md ${
          logOutCheck ? "top-[250%] opacity-100" : "top-[50%] opacity-0"
        } `}
      >
        Successfully Looged Out!!
      </div>
      <div className="[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#8fa88d7c_100%)] dark:[background:radial-gradient(125%_125%_at_50%_10%,#5672566b_40%,#8fa88d7c_100%)] backdrop-blur-sm  h-[6.5vh] mx-2 my-2 rounded-2xl  flex gap-[1vw] shadow-inner justify-normal items-center">
        <NavLink
          className={() => `
          h-[6.5vh] px-[2vw] py-1 mx-3 text-md rounded-md transition-all flex items-center justify-center  border-transparent font-semibold self-center`}
        >
          <img src={RobinFoodLogo} className=" w-[4vw]" alt="Logo" />
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
        {userInformation.usertype == "supplier" &&
        userInformation.usertype != "" ? (
          <NavLink
            to="/supplier"
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
        ) : (
          <></>
        )}
        {userInformation.usertype == "collector" &&
        userInformation.usertype != "" ? (
          <NavLink
            to="/collector"
            className={({ isActive }) =>
              ` h-[6.8vh] px-[2vw] py-1 text-md rounded-sm transition-all flex items-center justify-center border-b-[.3rem] border-[#5d795d] font-semibold  ${
                isActive
                  ? "  [background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#2766338e_100%)] text-[#1c4423] hover:[background:radial-gradient(125%_125%_at_50%_10%,#e2e2e270_40%,#183a1e8e_100%)] shadow-lg"
                  : " text-[#656663] border-transparent hover:backdrop-blur-sm"
              }`
            }
          >
            Collector's Page
          </NavLink>
        ) : (
          <></>
        )}
        <div className="h-[6.2vh] self-center  w-[28vw] ml-auto px-[1vw] mx-[2vw] flex items-center justify-evenly gap-[2vw]">
          {userInformation.username != "" ? (
            <>
              <button
                className="  bg-[#ca5151f6] px-[1vw] py-[.8vh] rounded-lg font-Arimo font-medium text-white shadow-inner"
                onClick={logoutcall}
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                className="  bg-[#478a47f6] px-[1vw] py-[.8vh] rounded-lg font-Arimo font-medium text-white shadow-inner"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Login
              </button>
            </>
          )}
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
            {userInformation.username != "" ? (
              <>
                <div className=" flex-1">
                  <img
                    className="w-[2.2vw] rounded-lg object-cover select-none mx-auto"
                    src="https://i1.sndcdn.com/avatars-rPurHyYvyLmOUXBc-KLy74A-t240x240.jpg"
                    alt="profile"
                  />
                </div>
                <div className="  h-[5.3vh] flex items-center select-none flex-[2] pl-3">
                  <div className=" h-[4vh] flex flex-col justify-center">
                    <p className=" text-[.95vw] font-Rubik font-medium absolute top-[.2vh]">
                      {userInformation.username}
                    </p>
                    <span className=" opacity-70 text-[.79vw] font-Arimo pt-[1.3vh] text-[#000000a9]">
                      {userInformation.email}
                    </span>
                  </div>
                </div>
              </>
            ) : (
              <>
                <button>Login Now</button>
              </>
            )}
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
