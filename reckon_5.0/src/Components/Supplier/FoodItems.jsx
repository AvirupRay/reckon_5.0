import React from "react";

const FoodItems = ({ Foodlist }) => {
  return (
    <>
      <ul>
        {Foodlist.map((e) => (
          <li>{e.name}</li>
        ))}
      </ul>
    </>
  );
};

export default FoodItems;
