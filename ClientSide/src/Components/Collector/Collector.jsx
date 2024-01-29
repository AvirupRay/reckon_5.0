import React from "react";

const Collector = () => {
  return (
    <>
      <div className=" flex h-[100vh]   pt-[5vw] ">
        <div className=" w-full flex flex-col">
          <div className="  h-[18vh] px-[2.5vw] py-[2.5vh]">
            <div className=" bg-[#b0cf7a] h-full rounded-lg shadow-inner relative">
              All the food added to pick up
              <button className=" absolute bottom-[-1.5vh] right-2 bg-[#6b8b32] px-[2vw] py-[.8vh] rounded-md text-white font-medium">
                Checkout
              </button>
            </div>
          </div>
          <div className=" h-[72vh] ">
            <div className=" h-[7vh]  px-[1vw] flex  items-center justify-center gap-[2vw]">
              <div className=" cursor-pointer bg-zinc-300 px-[1vw] py-[.3vh] rounded-2xl font-medium">
                ALL
              </div>
              <div className=" cursor-pointer bg-zinc-300 px-[1vw] py-[.3vh] rounded-2xl font-medium">
                RAW
              </div>
              <div className=" cursor-pointer bg-zinc-300 px-[1vw] py-[.3vh] rounded-2xl font-medium">
                CONSUMABLE
              </div>
            </div>
            <div className="  mx-[2vw] my-[2vh] h-[58vh] px-[1.8vw] py-[2vh] overflow-y-scroll scroll-smooth  scrollbar-hide flex flex-col">
              <div className=" bg-yellow-200 h-[10vh] my-2 py-4">Cards</div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collector;
