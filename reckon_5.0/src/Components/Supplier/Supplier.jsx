import React from "react";
import { useState } from "react";
import Foodform from "./Foodform";

const Supplier = () => {
  const [Foodlist, setFoodlist] = useState([]);
  return (
    <div>
      <Foodform Foodlist={Foodlist} setFoodlist={setFoodlist} />
    </div>
  );
};

export default Supplier;
