// ContactUs.js

import React, { useState } from "react";
import pic from "../../Pictures/contact_us.png";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here
    console.log(formData);
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      {/* We've been waiting for you. */}
      <div className="  flex flex-col justify-center items-center h-[100vh] w-[100vw] bg-gradient-to-r bg-[#fffde8] pt-[10vh]">
        <div className=" h-[15vh] w-full flex flex-col justify-center items-center">
          <span className=" text-[2.5vw] text-center font-medium">
            We've been waiting <br />
            for your feedback.
          </span>
          <span className=" text-[.9vw] text-[#2c2c2c]">
            Let us what can we improve
          </span>
        </div>
        <div className="  h-[70vh] w-full px-[2vw] py-[2vh] flex items-center relative">
          <div
            className=" h-[29vw] w-[30.5vw] [border-radius:50%] 
           [background:radial-gradient(125%_125%_at_50%_10%,#4e695652_40%,#4e695605_90%)] 
           top-[50%] left-[50%] [transform:translate(-50%,-50%)] absolute"
          ></div>
          <form
            onSubmit={handleSubmit}
            className="  w-[23vw] h-[20vw] px-[1vw] py-[4vh] mx-auto flex flex-col relative  justify-evenly z-10"
          >
            <div className=" absolute top-0 left-[50%] [transform:translate(-50%,-50%)] text-[1.2vw]  font-medium"></div>
            <div>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" focus:outline-none  w-full px-[1vw] py-[1.3vh] rounded-lg border-[.125rem] border-[#4e7054] border-b-4 border-b-[#4e7054]"
                placeholder="Enter Your Name"
              />
            </div>

            <div>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=" focus:outline-none w-full px-[1vw] py-[1.3vh] rounded-lg border-[.125rem] border-[#4e7054] border-b-4 border-b-[#4e7054]"
                placeholder="Enter Your Email"
              />
            </div>

            <div>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className=" focus:outline-none w-full px-[1vw] py-[1.3vh] rounded-lg border-[.125rem] border-[#4e7054] border-b-4 border-b-[#4e7054]"
                placeholder="Leave a message"
              />
            </div>

            <button
              type="submit"
              className="w-full px-[1vw] py-[1vh] rounded-lg border-[.125rem] border-[#2e4132] border-b-4 border-b-[#2e4132] font-semibold bg-[#b5ddbe] hover:bg-[#d2ffdc] transition-colors"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
