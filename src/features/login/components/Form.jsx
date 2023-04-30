import React from "react";
import { NavLink } from "react-router-dom";
import TextField from "../../../components/TextField";
function Form() {
  function onSubmit(e) {
    e.preventDefault();
  }
  return (
    <form
      onSubmit={onSubmit}
      className="flex flex-col bg-[#ffd500] rounded-lg gap-2 max-w-md mx-auto p-10 h-2/3"
    >
      <h1>Welcome to Elevate!</h1>

      <label htmlFor="email">Email:</label>
      <TextField type="text" id="email" placeholder="test" />

      <label htmlFor="password">Password:</label>
      <TextField type="password" name="" id="password" placeholder="Password" />

      <button>Login</button>

      <NavLink className="text-white" to="/signup">
        Don't have an account? Signup
      </NavLink>
    </form>
  );
}

export default Form;
