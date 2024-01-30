import React, { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axios from "axios";
import { RefreshCw } from "lucide-react";

const FoodItems = () => {
  //const Foodlist = useSelector((state) => state.food.Foodlist);

  const [foodlist, setFoodlist] = useState([]);
  const [refresh, setRefresh] = useState(0);
  let len = 0;

  useEffect(() => {
    axios
      .get("http://localhost:3000/foods")
      .then((response) => setFoodlist(response.data))
      .catch((error) => console.error(error));
  }, [refresh]);
  console.log(foodlist.length);

  function refreshfunc() {
    refresh == 0 ? setRefresh(1) : setRefresh(0);
  }

  //let len = foodlist.length;

  // useEffect(() => {
  //   if (len != 0) {
  //     setFoodLength(false);
  //   } else if (len == 0) {
  //     setFoodLength(true);
  //   }
  // }, [foodLength, len]);
  // console.log(Foodlist);

  return (
    <>
      <div className=" px-10 py-10 h-full ">
        <div className=" [background:radial-gradient(125%_125%_at_50%_10%,#e0ebbe_40%,#b9d1ae_100%)]   inset-0 px-9 pt-9 rounded-lg h-full relative  shadow-inner backdrop-blur">
          <div className=" absolute top-[-10%] left-[3%] bg-[#6A7A50] text-white px-[2vw] py-[1vw] rounded-md text-l font-semibold  drop-shadow-md ">
            ALL ITEMS
          </div>
          <button
            className="absolute top-[-5%] left-[22%] bg-[#6A7A50] text-white p-2 rounded-2xl text-l font-black drop-shadow-md h-fit w-fit active:rotate-180 active:transition-transform active:duration-200 active:scale-90"
            onClick={refreshfunc}
          >
            <RefreshCw size={15} />
          </button>
          <div className=" absolute top-[-10%] right-[3%] bg-[#8AA55C] text-white px-[2vw] py-[.5vw] rounded-md text-l font-semibold flex w-3/5 justify-evenly items-center  drop-shadow-md">
            <div className=" bg-[#e9e9e9] px-[.65vw] rounded-xl text-[#4C5A35] py-[.5vw] opacity-80 cursor-pointer">
              23
            </div>
            <div className=" bg-[#e9e9e9] px-[.65vw] rounded-xl text-[#4C5A35] py-[.5vw] opacity-85 cursor-pointer">
              22
            </div>
            <div className=" bg-[#e9e9e9] px-[.65vw] rounded-xl text-[#4C5A35] py-[.5vw] opacity-90 cursor-pointer">
              21
            </div>
            <div className=" bg-[#e9e9e9] px-[2.2vw] rounded-2xl text-[#4C5A35] py-[.5vw] cursor-pointer">
              TODAY
            </div>
          </div>

          <span
            className={` px-4 py-3 absolute bg-slate-50 left-[50%] [transform:translate(-50%,-50%)] rounded-md font-semibold shadow text-[#3a3838] transition-all ${
              foodlist.length == 0
                ? " top-[50%]"
                : "top-[55%] scale-70 opacity-0 "
            }`}
          >
            Add Some Items....
          </span>

          <ul className="  h-full overflow-y-scroll scrollbar-hide  scroll-smooth">
            {foodlist.map((dish) => (
              <li
                className=" bg-[#fdfdfd] rounded-xl my-5 px-5 flex py-[3%] justify-around drop-shadow"
                key={dish._id}
              >
                <span className=" flex-1">{dish.name}</span>
                <span className=" flex-1">Quantity: {dish.quantity}</span>
                <span className=" flex-1">Best Before: {dish.date}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
};

export default FoodItems;
