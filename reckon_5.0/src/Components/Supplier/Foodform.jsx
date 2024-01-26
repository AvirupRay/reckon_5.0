import React from "react";
import { useState } from "react";
import "../../App.css";

const Foodform = ({ Foodlist, setFoodlist }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");
  function submitted(e) {
    e.preventDefault();
    setFoodlist([
      { name: name, quantity: quantity, date: date, id: Date.now() },
      ...Foodlist,
    ]);
    setName("");
    setQuantity(1);
    setDate("");
  }
  function minus(e) {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }
  function plus(e) {
    e.preventDefault();
    if (quantity < 32) {
      setQuantity(quantity + 1);
    }
  }
  return (
    <div>
      <form onSubmit={submitted} className="theform">
        <div className="textdiv">
          <input
            onChange={(e) => setName(e.target.value)}
            value={name}
            placeholder="Name of the Food"
            className="textarea"
            type="type"
            required
          />
          <div className="textarea">
            Quantity
            <button onClick={minus} className="lilbtn">
              -
            </button>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              placeholder="Quantity"
              type="number"
              min={0}
              max={64}
              className="bg-transparent text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
            <button onClick={plus} className="lilbtn">
              +
            </button>
          </div>
          <input
            onChange={(e) => setDate(e.target.value)}
            value={date}
            placeholder="Expiry Date (DD/MM/YYYY)"
            className="textarea"
            type="text"
            required
          />
        </div>
        <br />
        <br />
        <button type="submit" className="btn">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Foodform;
