import React, { useState } from "react";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";

function Cards() {
  const [des, setDes] = useState(false);
  function handleClick() {}

  function more() {
    des ? setDes(false) : setDes(true);
  }
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div
          id="main"
          className=" bg-[#D9D9D9] h-[10vh] w-[90vw] py-4 px-[2vw] flex justify-evenly items-center rounded-md shadow-2xl"
        >
          <div>FoodName</div>
          <div>Quantity</div>
          <div>Best Before</div>
          <div>Location</div>
          <button
            className=" bg-[#A0BF6C] p-2 w-24 rounded-xl font-bold"
            onClick={handleClick}
          >
            Add
          </button>
          <button onClick={more} className="text-3xl">
            {des ? <IoIosArrowDropup /> : <IoIosArrowDropdownCircle />}
          </button>
        </div>
        {/* description */}
        <div
          className={`bg-[#CCE4A2] h-[14vh] w-[88vw] py-2 px-[2vw] rounded-b-xl relative ${
            des ? "" : "hidden"
          } overflow-y-scroll scrollbar-hide  scroll-smooth`}
        >
          {/* todo */}
          <div className=" font-bold font-mono text-xl">
            company name
          </div>
          <div className=" bg-white p-2 rounded-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas rerum necessitatibus natus, beatae incidunt tenetur libero unde quae est facilis.
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
