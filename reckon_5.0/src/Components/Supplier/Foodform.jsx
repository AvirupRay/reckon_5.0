import React from "react";
import { useState } from "react";
import "../../App.css";

const Foodform = ({ Foodlist, setFoodlist }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(0);
  const [date, setDate] = useState("");
  function submitted(e) {
    e.preventDefault();
    setFoodlist([
      { name: name, quantity: quantity, date: date, id: Date.now() },
      ...Foodlist,
    ]);
    setName("");
    setQuantity("");
    setDate("");
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
          <input
            onChange={(e) => setQuantity(e.target.value)}
            value={quantity}
            placeholder="Quantity"
            className="textarea"
            type="number"
            required
          />
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
