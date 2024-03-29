import React from "react";
import Cards from "./Cards";
import { RefreshCw } from "lucide-react";
import axios from "axios";
import { useState, useEffect } from "react";
import { Trash2 } from "lucide-react";

const Collector = () => {
  const [style, setStyle] = useState(
    " bg-[#6A7A50] text-white p-2 rounded-2xl text-l font-black h-fit w-fit scale-100 hover:bg-[#373f29] transition-colors"
  );
  const [refresh, setRefresh] = useState(0);
  const [foodlist, setFoodlist] = useState([]);
  const [order, setOrder] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/foodList")
      .then((response) => setFoodlist(response.data))
      .catch((error) => console.error(error));
  }, [refresh]);

  function refreshfunc() {
    setStyle(
      "bg-[#6A7A50] text-white p-2 rounded-2xl text-l font-black h-fit w-fit rotate-[360deg] transition-transform duration-500 scale-90"
    );
    setTimeout(() => {
      setStyle(
        "bg-[#6A7A50] text-white p-2 rounded-2xl text-l font-black h-fit w-fit scale-100 hover:bg-[#373f29] transition-colors"
      );
    }, 500);

    refresh == 0 ? setRefresh(1) : setRefresh(0);
  }

  function trashed() {
    setOrder([]);
  }

  return (
    <>
      <div className=" flex h-[100vh]   pt-[5vw] ">
        <div className=" w-full flex flex-col">
          <div className="  h-[18vh] px-[2.5vw] py-[2.5vh] relative ">
            <div className=" bg-[#b0cf7a] h-full rounded-lg shadow-inner overflow-x-scroll scrollbar-hide px-[1.2vw] py-[1.5vh] flex gap-[.5vw] justify-start">
              {order.map((i) => (
                <div
                  className=" bg-[#f9fce5] drop-shadow-md w-[18vw] h-[full] rounded-lg px-[1.1vw] py-[1vh] flex flex-col justify-center items-start flex-wrap"
                  key={i.name}
                >
                  <span className=" font-Arimo font-[450] text-[1.3vw]">
                    {i.name}
                  </span>
                  <div className=" flex justify-evenly w-full text-[#353535] font-Arimo">
                    <span className="flex-1 w-[10%] ">
                      Quantity: {i.quantity}
                    </span>
                    <span className="  flex-[1.5] text-center">
                      {i.location}
                    </span>
                  </div>
                </div>
              ))}
            </div>
            <button
              className="absolute bottom-[1vh] font-semibold right-[14vw] bg-[#ff4141] p-1 rounded-3xl text-[#ffffff] border-2 border-[#b13232] hover:text-[#ffeeee] hover:bg-[#b13237]  active:scale-90 transition-all"
              onClick={trashed}
            >
              <Trash2 className=" w-[1.75vw]" />
            </button>
            <button className=" absolute bottom-[1vh] font-semibold right-[3.5vw] bg-[#b0cf7a] px-[2vw] py-[.8vh] rounded-3xl text-black border-2 border-black hover:text-white hover:bg-black transition-colors">
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
              {/* refresh button here */}
              <button className={style} onClick={refreshfunc} id="refr">
                <RefreshCw size={15} />
              </button>
            </div>
            <div className="  mx-[2vw] my-[2vh] h-[58vh] px-[1.8vw] py-[2vh] overflow-y-scroll scroll-smooth  scrollbar-hide flex flex-col items-center gap-4 bg-[#f7f7f7] rounded-xl">
              {/* cards */}
              {foodlist.map((i) => (
                <Cards
                  key={i._id}
                  id={i._id}
                  name={i.name}
                  quantity={i.quantity}
                  date={i.date}
                  location={i.location}
                  details={i.details}
                  order={order}
                  setOrder={setOrder}
                  supplierName={i.username}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Collector;
