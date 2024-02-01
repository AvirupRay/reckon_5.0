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
  supplierName,
}) {
  // console.log(supplierName);
  const box = useRef(null);
  const [des, setDes] = useState(false);

  const added = () => {
    // console.log("add called", name);
    const isFound = order.some((i) => {
      if (i.id === id) {
        return true;
      } else {
        return false;
      }
    });

    console.log(isFound);
    if (!isFound) {
      setOrder([...order, { id, name, quantity, date, location, details }]);
    }
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
            type="submit"
            className=" bg-[#A0BF6C] p-2 w-24 rounded-xl font-bold hover:bg-black hover:text-white transition-all duration-500  disabled:bg-slate-400"
            onClick={added}
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
          <div className=" font-medium absolute font-Arimo bg-[#445544] px-[.7vw] py-[.5vh] text-[#fffffd] rounded-lg top-[3.2vh] left-[3%]">
            Suuplier Name: {supplierName}
          </div>
          <div className=" bg-white px-[2.2vw] py-2 rounded-xl mt-[6vh] shadow-md text-[#303030] font-FiraSans">
            {details}
          </div>
        </div>
      </div>
    </>
  );
}

export default Cards;
