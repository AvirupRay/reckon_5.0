import React, { useState } from "react";

function Login() {
  const [uname, setUname] = useState("");
  const [pass, setPass] = useState("");

  function handleSubmit(e) {
    e.preventDefault();
  }

  return (
    <div className=" bg-zinc-600 h-44">
      <form onSubmit={handleSubmit}>
        <input
          type={"text"}
          onChange={(e) => setUname(e.target.value)}
          placeholder="enter username"
          className=" outline m-5 rounded-md p-1"
          value={uname}
          required
        />
        <br />
        <input
          type="password"
          onChange={(e) => setPass(e.target.value)}
          placeholder="enter password"
          className=" outline m-5 rounded-md p-1"
          value={pass}
          required
        />
        <button type="submit" uname>
          Login
        </button>
      </form>
    </div>
  );
}

export default Login;
