import React from "react";
import avirup from "../../Pictures/AllProfilePic/avirup_image.jpg";
import roushan from "../../Pictures/AllProfilePic/roushan_image.jpg";
import sahil from "../../Pictures/AllProfilePic/sahil_image.png";
import sambit from "../../Pictures/AllProfilePic/sambit_image.jpg";

const About = () => {
  return (
    <div
      className="  h-[100vh] pt-[10vh] overflow-y-scroll scrollbar-hide [background:radial-gradient(125%_125%_at_50%_10%,#fffde8_40%,#fffde810_90%)]
    "
    >
      <div
        className=" h-[90vh]  font-Rubik text-3xl relative [background:radial-gradient(125%_125%_at_50%_10%,#fffde8_40%,#fffde810_90%)]
"
      >
        <div className=" w-1/3 px-[1vw] py-[3vh] flex flex-col absolute left-[22%] top-[50%] [transform:translate(-50%,-50%)]">
          <span>About US</span>
          <span
            className=" text-base text-[#313131bd]
          "
          >
            At Robin Food, we are on a mission to revolutionize the way we
            handle food waste. Committed to sustainability and environmental
            responsibility, we strive to minimize the impact of food waste on
            our planet.
          </span>
        </div>
        <div className=" absolute right-[0%] top-[50%] [transform:translate(-50%,-50%)] flex bg-[#4f63443f] w-[30vw] h-[15vh] px-[2vw] py-[2vh] text-[3.5vw] overflow-hidden">
          <div className=" absolute top-[50%] left-[50%] [transform:translate(-50%,-500%)] whitespace-nowrap">
            Robin Food
          </div>
          <div className=" text-[1.8vw] absolute top-[50%] left-[50%] [transform:translate(-50%,-50%)] whitespace-nowrap">
            Minimize Waste, Maximize Taste
          </div>
        </div>
      </div>
      <div className=" h-[100vh] [background:radial-gradient(125%_125%_at_50%_10%,#fffde8_40%,#fffde810_90%)] pt-[10vh] relative">
        <h1 className=" font-Arimo font-medium text-3xl text-center">
          Meet Our Team
        </h1>
        <div className=" w-[10vw] rounded-lg overflow-hidden absolute left-[15%] top-[20%]">
          <div className=" w-[10vw] bg-[#1a1a1aa8] absolute bottom-0 py-[.2vh] px-[1vw] text-white font-Arimo text-center z-10">
            Avirup Ray
          </div>
          <img
            src={avirup}
            alt=""
            className=" w-[10vw] hover:scale-100 scale-110 transition-transform object-cover"
          />
        </div>
        <div className=" w-[10vw] rounded-lg overflow-hidden absolute right-[15%] top-[30%]">
          <div className=" w-[10vw] bg-[#1a1a1aa8] absolute bottom-0 py-[.2vh] px-[1vw] text-white font-Arimo text-center z-10">
            Roushan Poddar
          </div>
          <img
            src={roushan}
            alt=""
            className=" w-[10vw] hover:scale-100 scale-110 transition-transform object-cover"
          />
        </div>
        <div className=" w-[10vw] rounded-lg overflow-hidden absolute left-[15%] bottom-[20%]">
          <div className=" w-[10vw] bg-[#1a1a1aa8] absolute bottom-0 py-[.2vh] px-[1vw] text-white font-Arimo text-center z-10">
            Sambit Sarkar
          </div>
          <img
            src={sambit}
            alt=""
            className=" w-[10vw] hover:scale-100 scale-110 transition-transform object-cover"
          />
        </div>
        <div className=" w-[10vw] rounded-lg overflow-hidden absolute right-[15%] bottom-[10%]">
          <div className=" w-[10vw] bg-[#1a1a1aa8] absolute bottom-0 py-[.2vh] px-[1vw] text-white font-Arimo text-center z-10">
            Sahil Raja
          </div>
          <img
            src={sahil}
            alt=""
            className=" w-[10vw] hover:scale-100 scale-110 transition-transform object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
