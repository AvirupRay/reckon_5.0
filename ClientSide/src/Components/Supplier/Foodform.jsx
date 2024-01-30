import React from "react";
import { useState, useEffect } from "react";
import "../../App.css";
import { addFoodItems } from "../../Apps/foodSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";

const Foodform = () => {
  const [name, setName] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [date, setDate] = useState("");
  const [checkplus, setCheckPlus] = useState(false);
  const [checkminus, setCheckMinus] = useState(false);
  const [status, setStatus] = useState(false);
  const Dispatch = useDispatch();

  //to submit the form
  function submitted(e) {
    e.preventDefault();
    Dispatch(addFoodItems({ name, quantity, date, status }));

    const foods = {
      name,
      quantity,
      date,
    };

    axios
      .post("http://localhost:3000/foods", foods)
      .then(() => {
        console.log("Added");
        setName("");
        setQuantity(1);
        setDate("");
      })
      .catch((e) => {
        console.log(e);
      });
  }

  //to minus the quantity
  function minus(e) {
    e.preventDefault();
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  }

  //to add the quantity
  function plus(e) {
    e.preventDefault();
    if (quantity < 32) {
      setQuantity(quantity + 1);
    }
  }

  //to check if mouse is pressed or not on add button
  function checkplustrue(e) {
    e.preventDefault();
    setCheckPlus(true);
  }
  function checkplusfalse(e) {
    e.preventDefault();
    setCheckPlus(false);
  }

  //to check if mouse is pressed or not on minus button
  function checkminustrue(e) {
    e.preventDefault();
    setCheckMinus(true);
  }
  function checkminusfalse(e) {
    e.preventDefault();
    setCheckMinus(false);
  }

  // checking if plus is true
  useEffect(() => {
    if (checkplus) {
      // console.log(quantity);
      let n = quantity;
      var interval = setInterval(() => {
        if (n < 32) {
          setQuantity((prev) => prev + 1);
          n++;
        }
      }, 200);
    }
    return () => {
      clearInterval(interval);
    };
  }, [checkplus]);

  //checking if minus is true
  useEffect(() => {
    if (checkminus) {
      console.log(quantity);
      let n = quantity;
      var interval = setInterval(() => {
        if (n > 1) {
          setQuantity((prev) => prev - 1);
          n--;
        }
      }, 200);
    }
    return () => {
      clearInterval(interval);
    };
  }, [checkminus]);

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
            <button
              onClick={minus}
              className="lilbtn"
              onMouseDown={checkminustrue}
              onMouseUp={checkminusfalse}
            >
              {"\u2212"}
            </button>
            <input
              onChange={(e) => setQuantity(e.target.value)}
              value={quantity}
              type="number"
              min={0}
              max={64}
              className="bg-transparent text-center [appearance:textfield] [&::-webkit-outer-spin-button]:appearance-none [&::-webkit-inner-spin-button]:appearance-none"
              required
            />
            <button
              onClick={plus}
              className="lilbtn"
              onMouseDown={checkplustrue}
              onMouseUp={checkplusfalse}
            >
              {"\u002b"}
            </button>
          </div>
          <div className="textarea">
            Date
            <input
              onChange={(e) => setDate(e.target.value)}
              value={date}
              className="datetext"
              type="date"
              required
            />
          </div>
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
