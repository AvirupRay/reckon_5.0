import React from "react";
import { useState } from "react";

const Foodform = ({ Foodlist, setFoodlist }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState("");
  function submitted(e) {
    e.preventDefault();
    setFoodlist([...Foodlist, { name: name, quantity: quantity, date: date }]);
  }
  return (
    <div>
      <form onSubmit={submitted}>
        <input onChange={(e) => setName({ name: e.target.value })} />
        <br />
        <br />
        <input onChange={(e) => setQuantity({ quantity: e.target.value })} />
        <br />
        <br />
        <input onChange={(e) => setDate({ date: e.target.value })} />
        <br />
        <br />
        <button type="submit" className="btn">
          Add
        </button>
      </form>
    </div>
  );
};

export default Foodform;
