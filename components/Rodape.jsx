import Link from "next/link";
import React from "react";
import { Col, Container, Row } from "react-bootstrap";

const Rodape = ({ footer }) => {
  return (
    <div>
      <Container
        fluid
        style={{
          width: "100%",
          color: "white",
        }}
        className={`position-${footer} bottom-0 py-3 text-center bg-dark`}
      >
        Todos os direitos reservados® Marcos Mendes Maciel - 21114290020
        <a
          href="https://github.com/hugo-loiola"
          style={{ textDecoration: "none", color: "#000" }}
        ></a>
      </Container>
    </div>
  );
};

export default Rodape;
