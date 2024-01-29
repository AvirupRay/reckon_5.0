import React from "react";
import { useState } from "react";
import Foodform from "./Foodform";
import Bar from "./Bargraph";
import FoodItems from "./FoodItems";

const Supplier = () => {
  return (
    <div className=" flex h-[90vh] mx-2  pt-[3.6vw] ">
      <div className="flex-1 ">
        <Foodform />
      </div>

      <div className=" flex-[2] flex-col">
        <div className=" h-[42vh] px-[3vw] py-[3vh]">
          <Bar />
        </div>
        <div className=" h-[48vh]">
          <FoodItems />
        </div>
      </div>
    </div>
  );
};

export default Supplier;