import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import { Container } from "react-bootstrap";
import Cabecalho from "./Cabecalho";
import Rodape from "./Rodape";

const Pagina = (props) => {
  return (
    <div>
      <Cabecalho />

      <Container fluid className=" bg-dark py-5 text-white text-center mb-3">
        <img src={props.titulo} />
      </Container>

      <Container className="mb-6 mt-6">{props.children}</Container>
      <Rodape footer={"fixed"} />
    </div>
  );
};

export default Pagina;
