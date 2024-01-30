import React, { useRef, useState } from "react";
import gsap from "gsap";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";
function Cards() {
  const box = useRef(null);
  const [des, setDes] = useState(false);
  function handleClick() {}

  function more() {
    if (des == true) {
      setDes(false);
      gsap.to(box.current, {height:'0vh', duration: 0.3 });
    } else {
      setDes(true);
      gsap.to(box.current, {height:'15vh', duration: 0.3 });  
    }
  }
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div
          id="main"
          className=" bg-[#D9D9D9] h-[10vh] w-[90vw] py-4 px-[2vw] flex justify-evenly items-center rounded-md shadow-lg"
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
          className="bg-[#CCE4A2] h-[0vh] w-[88vw] py-2 px-[2vw] rounded-b-xl relative transition-transform overflow-y-scroll scrollbar-hide scroll-smooth" ref={box}
        >
          {/* todo */}
          <div className=" font-bold font-mono text-xl">company name</div>
          <div className=" bg-white p-2 rounded-xl">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptas
            rerum necessitatibus natus, beatae incidunt tenetur libero unde quae
            est facilis.
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
