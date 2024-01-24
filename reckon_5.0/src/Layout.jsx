import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Components/HomePage/Home";

const Layout = () => {
  console.log("layout");
  return (
    <div>
      <Home />
      <Outlet />
    </div>
  );
};

export default Layout;
