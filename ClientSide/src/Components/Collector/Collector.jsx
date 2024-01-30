import React from "react";
import Cards from "./Cards";

const Collector = () => {
  return (
    <>
      <div className=" flex h-[100vh]   pt-[5vw] ">
        <div className=" w-full flex flex-col">
          <div className="  h-[18vh] px-[2.5vw] py-[2.5vh] relative ">
            <div className=" bg-[#b0cf7a] h-full rounded-lg shadow-inner overflow-x-scroll scrollbar-hide px-[1.2vw] py-[1.5vh] flex gap-[.5vw] justify-start">
              <div className=" bg-[#f9fce5] w-[18vw] h-full rounded-lg">
                Cards
              </div>
              <div className=" bg-[#f9fce5] w-[18vw] h-full rounded-lg">
                Cards
              </div>
              <div className=" bg-[#f9fce5] w-[18vw] h-full rounded-lg">
                Cards
              </div>
            </div>
            <button className=" absolute bottom-[1.5vh] right-[3.5vw] bg-[#6b8b32] px-[2vw] py-[.8vh] rounded-md text-white font-medium">
              Checkout
            </button>
          </div>
          <div className=" h-[72vh] ">
            <div className=" h-[7vh]  px-[1vw] flex  items-center justify-center gap-[2vw]">
              <div className=" cursor-pointer bg-zinc-300 px-[1.2vw] py-[.5vh] rounded-2xl font-medium text-sm">
                ALL
              </div>
              <div className=" cursor-pointer bg-zinc-300 px-[1.2vw] py-[.5vh] rounded-2xl font-medium text-sm">
                RAW
              </div>
              <div className=" cursor-pointer bg-zinc-300 px-[1.2vw] py-[.5vh] rounded-2xl font-medium text-sm">
                CONSUMABLE
              </div>
            </div>
            <div className="  mx-[2vw] my-[2vh] h-[58vh] px-[1.8vw] py-[2vh] overflow-y-scroll scroll-smooth  scrollbar-hide flex flex-col items-center gap-4">
              {/* cards */}
              <Cards />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collector;
