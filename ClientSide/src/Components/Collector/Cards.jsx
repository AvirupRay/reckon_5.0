import React, { useRef, useState } from "react";
import gsap from "gsap";
import { IoIosArrowDropdownCircle, IoIosArrowDropup } from "react-icons/io";
function Cards({
  id,
  name,
  quantity,
  date,
  location,
  details,
  order,
  setOrder,
}) {
  const box = useRef(null);
  const [des, setDes] = useState(false);
  const [addActive, setAddActive] = useState(false);

  const added = () => {
    setOrder([...order, { id, name, quantity, date, location, details }]);
    setAddActive(!addActive);
  };

  function more() {
    if (des == true) {
      setDes(false);
      gsap.to(box.current, { height: "0vh", duration: 0.3 });
    } else {
      setDes(true);
      gsap.to(box.current, { height: "15vh", duration: 0.3 });
    }
  }
  return (
    <>
      <div className=" flex flex-col items-center justify-center">
        <div
          id="main"
          className=" bg-[#D9D9D9] h-[10vh] w-[90vw] py-4 px-[2vw] flex justify-evenly items-center rounded-md shadow-lg"
        >
          <div className="w-[10vw]">{name}</div>
          <div className="w-[10vw]">Quantity : {quantity}</div>
          <div className="w-[10vw]">Best Before : {date}</div>
          <div className="w-[10vw]">Location : {location}</div>
          <button
            className=" bg-[#A0BF6C] p-2 w-24 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-500 "
            onClick={added}
            disabled={addActive}
          >
            Add
          </button>
          <button onClick={more} className="text-3xl">
            {des ? <IoIosArrowDropup /> : <IoIosArrowDropdownCircle />}
          </button>
        </div>
        {/* description */}
        <div
          className="bg-[#CCE4A2] h-[0vh] w-[88vw] py-[0.75vh] px-[2vw] rounded-b-xl relative transition-transform overflow-hidden"
          ref={box}
        >
          {/* todo */}
          <div className=" font-bold font-mono text-xl">Supplier Name</div>
          <div className=" bg-white p-2 rounded-xl">{details}</div>
        </div>
      </div>
    </>
  );
}

export default Cards;
