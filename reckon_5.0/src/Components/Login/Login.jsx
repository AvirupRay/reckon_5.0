import React, { useState } from "react";
import gsap from "gsap";
import "../../App.css";

function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");
  const [action, setAction] = useState(false);

  function handleSubmit(e) {
    e.preventDefault();
  }

  function changer() {
    if (action == false) {
      setAction(true);
    } else setAction(false);
  }

  return (
    <div
      id="bgbody"
      className=" flex justify-center items-center h-[100vh] w-[100vw] bg-gradient-to-r from-green-950 to-green-800 text-white"
    >
      {/* box */}
      <div
        id="outerBox"
        className=" bg-[rgba(0,0,0)] h-[65vh] w-[55vw] flex justify-evenly items-center mt-0.5 gap-5 shadow-xl shadow-green-950 rounded-3xl "
      >
        <form
          onSubmit={handleSubmit}
          className={`flex justify-center items-center flex-col h-[100%] w-[100%] gap-2 ${action?"":"order-last"}`}
        >
          {/* heading */}
          <h1 className="  font-serif text-left text-5xl">
            {action ? "Sign up" : "Login"}
          </h1>

          {/* username */}
          <input
            type={"text"}
            onChange={(e) => setUname(e.target.value)}
            placeholder="username"
            className=" bg-transparent w-[60%] rounded-md p-3 border-0 border-b-2 border-green-800 shadow hover:shadow-green-500/50 focus:outline-none"
            value={uname}
            required
          />
          {/* email */}
          <input
            type={"text"}
            onChange={(e) => setUname(e.target.value)}
            placeholder="email"
            className={`bg-transparent w-[60%] rounded-md p-3 border-0 border-b-2 border-green-800 shadow hover:shadow-green-500/50 focus:outline-none ${action ? "" : "hidden"}`}
            value={uname}
            required
          />
          {/* password */}
          <input
            type="password"
            onChange={(e) => setPass(e.target.value)}
            placeholder="password"
            className="bg-transparent w-[60%] rounded-md p-3 border-0 border-b-2 border-green-800 shadow hover:shadow-green-500/50 focus:outline-none"
            value={pass}
            required
          />

          {/* Radio */}
          <div className=" flex items-start justify-start gap-3 text-green-600">
            <div className="flex gap-2">
              <input type="radio" name="fav_language" value="supplier" />
              <label>Supplier</label>
              <br />
            </div>
            <div className="flex gap-2">
              <input
                type="radio"
                name="fav_language"
                value="collector"
                className="checked:active:bg-emerald-400 checked:focus:bg-emerald-400"
              />
              <label>Collector</label>
              <br />
            </div>
          </div>

          {/* login button */}
          <button
            type="submit"
            className=" bg-lime-700 p-3 mt-10 rounded-full w-52"
          >
            {action ? "Signup" : "Login"}
          </button>
        </form>

        {/* side bar */}
        <div className={` bg-[url('https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?w=400&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Nnx8Zm9vZHxlbnwwfHwwfHx8MA%3D%3D')] bg-no-repeat h-[100%] w-[100%]  flex justify-evenly items-center flex-col ${action?"rounded-r-3xl rounded-l-[20%]":"rounded-l-3xl rounded-r-[20%]"}  bg-cover p-2`}>
          <h1 className=" font-bold text-3xl font-serif m-5  text-white">
            {action ? "Hello, User" : "Welcome back"}
          </h1>
          {/* <p className=" text-center w-80 text-xl  text-black">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Illum,
            dolore.
          </p> */}
          <button
            onClick={changer}
            className=" text-white bg-lime-700 p-3 rounded-full m-5 w-52"
          >
            {action ? "Login" : "Signup"}
          </button>
        </div>
      </div>
    </div>
  );
}

export default Login;
