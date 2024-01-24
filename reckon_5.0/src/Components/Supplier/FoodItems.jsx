import React from "react";

const FoodItems = ({ Foodlist }) => {
  return (
    <>
      <div className=" px-10 py-14 h-full ">
        <div className=" bg-[#D9D9D9] px-9 pt-9 rounded-lg h-full relative ">
          <div className=" absolute top-[-8%] left-[3%] bg-[#6A7A50] text-white px-[2vw] py-[1vw] rounded-md text-l font-semibold ">
            ALL ITEMS
          </div>
          <div className=" absolute top-[-8%] right-[3%] bg-[#8AA55C] text-white px-[2vw] py-[1vw] rounded-md text-l font-semibold">
            <div>Today</div>
          </div>
          <ul className="  h-full overflow-y-scroll scrollbar-hide  scroll-smooth">
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
