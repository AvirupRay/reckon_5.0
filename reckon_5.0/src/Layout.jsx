import React from "react";
import { Link, Outlet } from "react-router-dom";
import Home from "./Components/HomePage/Home";
import Header from "./Components/Header/Header";

const Layout = () => {
  console.log("layout");
  return (
    <div>
      <Header />
      <Outlet />
    </div>
  );
};

export default Layout;
