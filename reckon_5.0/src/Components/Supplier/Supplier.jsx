import React from "react";
import { useState } from "react";
import Foodform from "./Foodform";
import Bar from "./Bar";
import FoodItems from "./FoodItems";

const Supplier = () => {
  const [Foodlist, setFoodlist] = useState([]);
  return (
    <div className=" flex h-[90vh] m-2 ">
      <div className=" bg-green-500 flex-1">
        <Foodform Foodlist={Foodlist} setFoodlist={setFoodlist} />
      </div>

      <div className=" bg-orange-200 flex-[2] flex-col">
        <div className=" bg-[#6dd3ec] h-[42vh]">
          <Bar />
        </div>
        <div className=" bg-green-100 h-[48vh]">
          <FoodItems />
        </div>
      </div>
    </div>
  );
};

export default Supplier;
