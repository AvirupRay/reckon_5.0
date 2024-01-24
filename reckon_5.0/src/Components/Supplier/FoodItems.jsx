import React, { useEffect } from "react";
import { useState } from "react";

const FoodItems = ({ Foodlist }) => {
  let len = Foodlist.length;
  const [foodLength, setFoodLength] = useState(true);
  useEffect(() => {
    if (len != 0) {
      setFoodLength(false);
    } else if (len == 0) {
      setFoodLength(true);
    }
  }, [foodLength, len]);
  console.log(foodLength);
  return (
    <>
      <div className=" px-10 py-10 h-full ">
        <div className=" [background:radial-gradient(125%_125%_at_50%_10%,#f3ffdf_40%,#beaeae_100%)] inset-0 px-9 pt-9 rounded-lg h-full relative backdrop-blur">
          <div className=" absolute top-[-10%] left-[3%] bg-[#6A7A50] text-white px-[2vw] py-[1vw] rounded-md text-l font-semibold  drop-shadow-md ">
            ALL ITEMS
          </div>
          <div className=" absolute top-[-10%] right-[3%] bg-[#8AA55C] text-white px-[2vw] py-[.5vw] rounded-md text-l font-semibold flex w-3/5 justify-evenly items-center  drop-shadow-md">
            <div className=" bg-[#e9e9e9] px-[.65vw] rounded-xl text-[#4C5A35] py-[.5vw] opacity-80">
              23
            </div>
            <div className=" bg-[#e9e9e9] px-[.65vw] rounded-xl text-[#4C5A35] py-[.5vw] opacity-85">
              22
            </div>
            <div className=" bg-[#e9e9e9] px-[.65vw] rounded-xl text-[#4C5A35] py-[.5vw] opacity-90">
              21
            </div>
            <div className=" bg-[#e9e9e9] px-[2.2vw] rounded-2xl text-[#4C5A35] py-[.5vw]">
              TODAY
            </div>
          </div>
          {foodLength ? (
            <span className=" bg-slate-100 px-4 py-3 absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)] rounded-md font-semibold shadow text-[#3a3838] transition-all">
              Add Some Items....
            </span>
          ) : (
            <span></span>
          )}
          <ul className="  h-full overflow-y-scroll scrollbar-hide  scroll-smooth">
            {Foodlist.map((dish) => (
              <li className=" bg-[#fdfdfd] rounded-xl my-5 px-5 flex py-[3%] justify-around border-2 border-[#adadad]">
                {/* <div class="absolute inset-0 -z-10 h-full w-full items-center px-5 py-24 [background:radial-gradient(125%_125%_at_50%_10%,#000_40%,#63e_100%)]"></div>
                <div class="absolute inset-0 -z-10 h-full w-full bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]"></div> */}
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
