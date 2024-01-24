import React from "react";
import { useState } from "react";

const Foodform = ({ Foodlist, setFoodlist }) => {
  const [Food, setFood] = useState({ name: "", quantity: 0, date: "" });
  return <div>This is Input form</div>;
};

export default Foodform;
