import React from "react";
import Container from "../components/Container";
import { Form } from "../features/signup";
function Signup() {
  return (
    <div className="flex-grow p-2 flex justify-center items-center">
      <Container>
        <Form />
      </Container>
    </div>
  );
}

export default Signup;
