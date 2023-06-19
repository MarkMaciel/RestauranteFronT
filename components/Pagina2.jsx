import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <div>
      <div className="bg-dark py-5 text-white text-center mb-3">
        <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      <Container className="mb-6 mt-6">{props.children}</Container>
      <Rodape footer={props.footer} />
    </div>
  );
};

export default Pagina;
