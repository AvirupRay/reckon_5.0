// ContactUs.js

import React, { useState } from "react";
import pic from '../../Pictures/contact_us.png';

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
    // You can send this data to your backend or handle it accordingly
    // Reset form after submission
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <div className="  flex  justify-center items-center h-[100vh] w-[100vw]">
        <div className=" bg-black flex flex-col justify-center items-center p-10 gap-3 w-3/5 h-auto text-white rounded-2xl">
          <h2 className=" text-5xl font-serif mb-10 text-green-600 font-bold">
            Contact Us
          </h2>
          
          <div className=" flex flex-row">
          <form
            onSubmit={handleSubmit}
            className="flex justify-center items-center flex-col gap-3 w-[100%] text-xl"
          >
            <div className="form-group w-[70%]">
              <label htmlFor="name">Name: </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className=" text-white w-[80%] rounded-2xl bg-transparent border-2 border-green-600 outline-none p-1"
              />
            </div>
            <div className="form-group w-[70%]">
              <label htmlFor="email">Email: </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className=" text-white w-[80%] rounded-xl bg-transparent border-2 border-green-600 outline-none p-1"
              />
            </div>
            <div className="form-group flex items-center gap-1 w-[70%]">
              <label htmlFor="message">Message: </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                className=" text-white w-[80%] rounded-xl bg-transparent border-2 border-green-600 outline-none p-1"
              />
            </div>
            <button
              type="submit"
              className=" bg-green-600 p-3 w-60 rounded-2xl mt-10 outline-none"
            >
              Submit
            </button>
          </form>
          <img src={pic} alt="" className=" w-[40%]" /></div>
        </div>
      </div>
    </>
  );
};

export default ContactUs;
