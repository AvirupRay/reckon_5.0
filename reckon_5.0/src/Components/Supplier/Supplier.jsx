import React from "react";
import { useState } from "react";
import Foodform from "./Foodform";
import Bar from "./Bargraph";
import FoodItems from "./FoodItems";

const Supplier = () => {
  const [Foodlist, setFoodlist] = useState([]);
  console.log(Foodlist);
  return (
    <div className=" flex h-[90vh] m-2 ">
      <div className="flex-1">
        <Foodform Foodlist={Foodlist} setFoodlist={setFoodlist} />
      </div>

      <div className=" flex-[2] flex-col">
        <div className=" bg-[#6dd3ec] h-[42vh]">
          <Bar />
        </div>
        <div className=" h-[48vh]">
          <FoodItems Foodlist={Foodlist} />
        </div>
      </div>
    </div>
  );
};

export default Supplier;
