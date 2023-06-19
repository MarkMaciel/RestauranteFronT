import { Container, Nav, Navbar } from "react-bootstrap";
import { BsFillPersonPlusFill } from "react-icons/bs";

const Cabecalho = () => {
  return (
    <>
      <Navbar bg="secondary" variant="light">
        <Container>
          <Nav className="me-auto">
            <Nav.Link className="text-white" href="/clientes">
              Faça seu cadastro <BsFillPersonPlusFill />
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
};

export default Cabecalho;
