import React from "react";

const FoodItems = ({ Foodlist }) => {
  return (
    <>
      <div className=" px-10 py-10 h-full ">
        <div className=" bg-[#D9D9D9] px-9 pt-9 rounded-lg h-full relative border-b-4 border-[#858383]">
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
          <ul className="  h-full overflow-y-scroll scrollbar-hide  scroll-smooth drop-shadow">
            {Foodlist.map((dish) => (
              <li className=" bg-[#FFFCFC] rounded-xl my-5 px-5 flex py-[3%] justify-around">
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
