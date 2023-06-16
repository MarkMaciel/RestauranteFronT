import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";

const Pagina = (props) => {
  return (
    <div>
  
      <Cabecalho />

      <div className="bg-dark py-5 text-white text-center mb-3">
      <Container>
          <h1>{props.titulo}</h1>
        </Container>
      </div>

      <Container className="mb-6 mt-6">{props.children}</Container>
    </div>
  );
};

export default Pagina;
