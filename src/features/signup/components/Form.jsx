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
      className="flex flex-col bg-[#ffd500] rounded-lg gap-2 max-w-md mx-auto p-10"
    >
      <label htmlFor="email">Email:</label>
      <TextField type="text" id="email" placeholder="test" />

      <label htmlFor="password">Password:</label>
      <TextField type="password" name="" id="password" placeholder="Password" />

      <label htmlFor="confirmPassword">Confirm password</label>
      <TextField
        type="password"
        id="confirmPassword"
        placeholder="Confirm password"
      />

      <p>
        By clicking the "Sign Up" button or accessing and using the Company's
        services, you acknowledge that you have read, understood, and agree to
        be bound by this Agreement.
      </p>

      <button>Sign Up</button>
      <NavLink to="/login" className="text-white">
        Already have an account? Login
      </NavLink>
    </form>
  );
}

export default Form;
