import React, { useLayoutEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import gsap from "gsap";
import pic1 from "../../Pictures/1.jpg";
import pic2 from "../../Pictures/2.jpg";
import pic3 from "../../Pictures/3.jpg";
import pic4 from "../../Pictures/4.jpg";
import { GiCampCookingPot } from "react-icons/gi";
import { PiPackage } from "react-icons/pi";
import { TbTruckDelivery } from "react-icons/tb";
import { BiHappyBeaming } from "react-icons/bi";
import { GrNext } from "react-icons/gr";
import { useNavigate } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";

function Home() {
  const navigate = useNavigate();
  // new

  const comp = useRef(null);

  useLayoutEffect(() => {
    let ctx = gsap.context(() => {
      const t1 = gsap.timeline();
      t1.from("#page1", {
        xPercent: "-100",
        duration: 0.8,
        delay: 0.3,
      })
        .from("#ball1", {
          yPercent: "-100",
          duration: 0.8,
          delay: 0.3,
        })
        .from("#ball2", {
          yPercent: "100",
          duration: 0.8,
        })
        .from(["#textinball", "#btninball"], {
          scale: 0,
          duration: 0.5,
        })
        .from(["#pic1", "#pic2", "#pic3", "#pic4"], {
          scale: 0,
          stagger: 0.3,
        });
    }, comp);
    return () => ctx.revert();
  }, []);
  // new
  return (
    <>
      <div className="h-[100vh]  w-[100vw] flex  flex-col" ref={comp}>
        <div className="  overflow-y-scroll relative scrollbar-hide">
          <div
            className=" w-[100vw] h-[50vh]  flex justify-first items-center bg-[#a4d687]"
            id="page1"
          ></div>

          <div
            className=" w-[100vw] h-[50vh]  flex justify-first items-center"
            id="page1"
          ></div>
          {/* circles */}
          <div className=" absolute top-[0vh] flex mt-3">
            <div
              id="ball1"
              className=" w-[50vw] h-[100vh] rounded-full bg-[#a4d687] flex justify-center items-center flex-col"
            >
              <h1
                className=" text-3xl text-wrap text-center w-auto p-5 text-white"
                id="textinball"
              >
                <span className=" text-4xl font-extrabold">
                  Minimize Waste, Maximize Taste
                </span>
                <br /> our website provider food to the needy
              </h1>
              <button
                id="btninball"
                className="p-5 bg-white w-40 rounded-full font-bold text-xl mt-3"
                onClick={() => {
                  navigate("/login");
                }}
              >
                Get Started
              </button>
            </div>

            {/* images ball */}
            <div
              id="ball2"
              className=" w-[50vw] rounded-full bg-white flex justify-center items-center"
            >
              <div
                className=" flex p-10 flex-wrap justify-center items-center gap-4 w-[80%]"
                id="picinball"
              >
                <img
                  id="pic1"
                  src={pic1}
                  alt=""
                  className=" w-[60%] rounded-md"
                />
                <img
                  id="pic2"
                  src={pic2}
                  alt=""
                  className=" w-[40%] rounded-md mr-12"
                />
                <img
                  id="pic3"
                  src={pic3}
                  alt=""
                  className=" w-[40%] rounded-md"
                />
                <img
                  id="pic4"
                  src={pic4}
                  alt=""
                  className=" w-[60%] rounded-md"
                />
              </div>
            </div>
          </div>
          {/* page 2 */}
          <div
            id="page2"
            className="h-[100vh] w-[100vw] flex flex-col justify-center items-center"
          >
            <div className="flex flex-row items-start justify-center mt-80 z-40">
              <div className="w-40 flex flex-col items-center justify-center text-center">
                <GiCampCookingPot className=" text-3xl" id="icon1" />
                <br />
                <p className=" text-lg font-medium">
                  Freshly cooked food or raw food which are not used or about to
                  get expire
                </p>
              </div>
              <GrNext className=" text-3xl" id="icon2" />
              <div className="w-40 flex flex-col items-center justify-center text-center">
                <PiPackage className=" text-3xl" id="icon" />
                <br />
                <p className=" text-lg font-medium">
                  Packed carefully handled maintaning full hygine
                </p>
              </div>
              <GrNext className=" text-3xl" id="icon3" />
              <div className="w-40 flex flex-col items-center justify-center text-center">
                <TbTruckDelivery className=" text-3xl" id="icon4" />
                <br />
                <p className=" text-lg font-medium">
                  Delivery and pickup both available based on distance
                </p>
              </div>
              <GrNext className=" text-3xl" id="icon5" />
              <div className="w-40 flex flex-col items-center justify-center text-center">
                <BiHappyBeaming className=" text-3xl" id="icon6" />
                <br />
                <p className=" text-lg font-medium">
                  Happy Supplier & happy customer no food wasted
                </p>
              </div>
            </div>

            {/* choice */}
            <div className="flex flex-col justify-center items-center gap-5 mt-60">
              <div className=" w-[50vw] h-52 rounded-3xl flex">
                <div className="w-[70%] bg-transparent"></div>
                <div
                  id="red"
                  className="rounded-3xl bg-red-300 p-5 hover:scale-110 hover:duration-700 transition ease-in-out hover:bg-red-500 z-50"
                >
                  <h1 className=" text-4xl font-bold">Become a Supplier</h1>
                  <br /> supply food in a large or small scale which will help
                  needy without throwing them away
                </div>
              </div>
              <div className=" w-[50vw] h-52 rounded-3xl flex">
                <div className="rounded-3xl bg-blue-400 p-5 hover:scale-110 hover:duration-700 transition ease-in-out hover:bg-blue-500">
                  <h1 className=" text-4xl font-bold">Become a Collector</h1>
                  <br /> collect food for yourself or help poor people who can't
                  efford to buy food
                </div>
                <div className="w-[70%] bg-transparent"></div>
              </div>
            </div>
          </div>

          {/* third page */}

          <div className="h-[100vh] w-[100vw] flex flex-col justify-center items-center">
            <h1 className=" text-5xl m-5 font-bold mt-40">
              People's thought...
            </h1>
            <div className=" flex gap-20 flex-wrap justify-center items-center bg-[#a4d687] h-[60vh] p-10 rounded-3xl overflow-hidden">
              <div className=" w-[20vw] bg-white h-[40vh] rounded-3xl p-5 mt-10 text-center">
                <div className=" flex items-center justify-center flex-col gap-5">
                  <img
                    src="https://i1.sndcdn.com/avatars-9a6uo7vosAFKkz3f-3YjIWw-t500x500.jpg"
                    alt=""
                    className="w-[40%] rounded-full"
                  />
                  <h1 className=" font-bold text-2xl">HARPREET SINGH</h1>
                </div>
                <br />
                <br />
                <p className=" font-mono text-lg font-bold">
                  Love the idea of the food waste reduction Definitely worth the
                  investment. It will surely help many poors
                </p>
              </div>

              <div className=" w-[20vw] bg-white h-[40vh] rounded-3xl p-5 mt-10 text-center">
                <div className=" flex items-center justify-center flex-col gap-5">
                  <img
                    src="https://avirupray.github.io/dabbawala/images/reviewers/p4.jpg"
                    alt=""
                    className="w-[40%] rounded-full"
                  />
                  <h1 className=" font-bold text-2xl">SUBRATA ROY</h1>
                </div>
                <br />
                <br />
                <p className=" font-mono text-lg font-bold">
                  very easy to use website an user friendly, Well done creators
                </p>
              </div>

              <div className=" w-[20vw] bg-white h-[40vh] rounded-3xl p-5 mt-10 text-center">
                <div className=" flex items-center justify-center flex-col gap-5">
                  <img
                    src="https://avirupray.github.io/dabbawala/images/reviewers/p3.jpg"
                    alt=""
                    className="w-[40%] rounded-full"
                  />
                  <h1 className=" font-bold text-2xl">AKASH DAS</h1>
                </div>
                <br />
                <br />
                <p className=" font-mono text-lg font-bold">
                  This website will surely save a lot of food waste a great Idea
                  well executed
                </p>
              </div>

              <div className=" w-[20vw] bg-white h-[40vh] rounded-3xl p-5 mt-10 text-center">
                <div className=" flex items-center justify-center flex-col gap-5">
                  <img
                    src="https://avirupray.github.io/dabbawala/images/reviewers/p2.jpg"
                    alt=""
                    className="w-[40%] rounded-full"
                  />
                  <h1 className=" font-bold text-2xl">SHALINI GUHA</h1>
                </div>
                <br />
                <br />
                <p className=" font-mono text-lg font-bold">
                  Love the idea of the food waste reduction Definitely worth the
                  investment. It will surely help many poors
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Home;
