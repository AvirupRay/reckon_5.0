import React from "react";

const About = () => {
  return (
    <div className="  h-[100vh] pt-[10vh] overflow-y-scroll scrollbar-hide ">
      <div className=" h-[90vh] bg-red-300 font-Rubik text-3xl relative">
        <div className=" bg-yellow-200 w-1/3 px-[1vw] py-[3vh]">
          <span>About US</span>
          <span
            className=" text-base
          "
          >
            At Robin Food, we are on a mission to revolutionize the way we
            handle food waste. Committed to sustainability and environmental
            responsibility, we strive to minimize the impact of food waste on
            our planet.
          </span>
        </div>
        <div>
          Robin <br /> Food
        </div>
      </div>
      <div className=" h-[100vh] bg-slate-200"></div>
    </div>
  );
};

export default About;
