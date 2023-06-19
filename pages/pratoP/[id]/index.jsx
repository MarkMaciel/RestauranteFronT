import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [pratos, setPratos] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/pratos/${query.id}`).then((res) => {
        setPratos(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina2 footer="fixed" titulo={pratos.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja Exlcuir o prato: {pratos.nome} ?</Modal.Title>
        </Modal.Header>
        <Modal.Body> Tem certeza que deseja excluir este prato ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/pratos/${pratos.id}`);
              push("/entrada");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <Card>
            <Card.Img src={pratos.Imagem} />
          </Card>
        </Col>
        <Col>
          <div className="p-3 text-white">
            <p>
              <strong>Nome: </strong> {pratos.nome}{" "}
            </p>
            <p>
              {" "}
              <strong>História do prato: </strong> {pratos.historia}
            </p>
            <p>
              <strong>Ingredientes: </strong> {pratos.ingredientes}
            </p>
            <Row>
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "darkorange", color: "white" }}
                  href={`${pratos.id}/form`}
                >
                  Editar
                </Link>
              </Col>
              <Col>
                <Button onClick={excluir} className="btn btn-danger">
                  Excluir
                </Button>
              </Col>
            </Row>
          </div>
        </Col>
      </Row>
    </Pagina2>
  );
};

export default index;
