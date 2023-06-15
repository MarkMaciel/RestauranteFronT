import React from "react";
import { Container, Nav, Navbar, NavDropdown } from "react-bootstrap";

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="white" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link href="/alunos">Login Cliente</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
