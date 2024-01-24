import React from "react";
import { useState } from "react";
import "../../App.css";

const Foodform = ({ Foodlist, setFoodlist }) => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState();
  const [date, setDate] = useState("");
  function submitted(e) {
    e.preventDefault();
    setFoodlist([{ name: name, quantity: quantity, date: date }, ...Foodlist]);
    setName("");
    setQuantity("");
    setDate("");
  }
  return (
    <div>
      <form onSubmit={submitted} className="theform">
        <input
          onChange={(e) => setName(e.target.value)}
          value={name}
          placeholder="Name of the Food"
          className="textarea"
          type="type"
        />
        <br />
        <br />
        <input
          onChange={(e) => setQuantity(e.target.value)}
          value={quantity}
          placeholder="Quantity"
          className="textarea"
          type="number"
        />
        <br />
        <br />
        <input
          onChange={(e) => setDate(e.target.value)}
          value={date}
          placeholder="Expiry Date (DD/MM/YYYY)"
          className="textarea"
          type="text"
        />
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
