import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <div className=" bg-[#dbd7b4] px-5 py-2 flex justify-around">
      <NavLink
        to="/supplr"
        className={() =>
          ` bg-[#ebebeb] px-2 py-1 rounded-md shadow-md font-semibold hover:bg-[#fff5ca] transition-colors`
        }
      >
        Supplier's Page
      </NavLink>
    </div>
  );
};

export default Header;
