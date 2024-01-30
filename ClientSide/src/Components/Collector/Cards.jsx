import React, { useState } from "react";
import { IoIosArrowDropdownCircle,IoIosArrowDropup } from "react-icons/io";

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
          className=" bg-[#D9D9D9] h-[10vh] w-[90vw] py-4 px-[2vw] flex justify-evenly items-center rounded-md"
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
            {des?<IoIosArrowDropup/>:<IoIosArrowDropdownCircle/>}
          </button>
        </div>
        {/* description */}
        <div
          className={`bg-[#CCE4A2] h-[10vh] w-[88vw] py-4 px-[2vw] rounded-b-xl relative ${
            des ? "" : "hidden"
          } `}
        >
            <div>
                <div></div>
            </div>
          
        </div>
      </div>
    </>
  );
}

export default Cards;
