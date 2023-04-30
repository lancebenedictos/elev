import React from "react";
import Container from "./Container";

function Section(props) {
  return (
    <Container>
      <section className={`${props.className} min-h-full w-full`}>
        {props.children}
      </section>
    </Container>
  );
}

export default Section;
