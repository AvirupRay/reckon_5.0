import React from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import pic1 from "../../Pictures/1.jpg"
import pic2 from "../../Pictures/2.jpg"
import pic3 from "../../Pictures/3.jpg"
import pic4 from "../../Pictures/4.jpg"

function Home() {
  return (
    <>
      <div className=" h-[100vh] w-[100vw] flex  flex-col overflow-y-scroll">


        <div
          className=" w-[100vw] h-[50vh]  bg-green-400 flex justify-first items-center"
          id="page1"
        ></div>

        <div
          className=" w-[100vw] h-[50vh] bg-red-400 flex justify-first items-center"
          id="page1"
        ></div>
        {/* circles */}
        {/* <div className=" absolute top-[0vh] flex hidden">
          <div className=" w-[50vw] h-[100vh] rounded-full bg-green-400 flex justify-center items-center">
            <h1 className=" text-3xl text-wrap text-center w-auto p-5 text-white" >
              <span className=" text-4xl font-extrabold">Minimize Waste, Maximize Taste</span><br /> our website provider food to the needy
            </h1>
          </div> */}

          {/* images ball */}
          {/* <div className=" w-[50vw] rounded-full bg-white flex justify-center items-center">
            <div className=" flex p-10 flex-wrap justify-center items-center gap-4 w-[80%]">
              <img src={pic1} alt="" className=" w-[60%] rounded-md"/>
              <img src={pic2} alt="" className=" w-[40%] rounded-md mr-12"/>
              <img src={pic3} alt="" className=" w-[40%] rounded-md"/>
              <img src={pic4} alt="" className=" w-[60%] rounded-md"/>
            </div>
          </div>
        </div> */}
        <div className="h-[150vh]">addddddddddddd</div>
      </div>
    </>

  );
}

export default Home;
