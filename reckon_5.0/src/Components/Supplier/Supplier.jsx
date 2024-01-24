import React from "react";
import { useState } from "react";
import Foodform from "./Foodform";
import Bar from "./Bar";

const Supplier = () => {
  const [Foodlist, setFoodlist] = useState([]);
  return (
    <div>
      <Foodform Foodlist={Foodlist} setFoodlist={setFoodlist} />;
      <Bar />;
    </div>
  );
};

export default Supplier;
