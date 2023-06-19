import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [bebidas, setBebidas] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/bebidas/${query.id}`).then((res) => {
        setBebidas(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina2 footer="fixed" titulo={bebidas.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Deseja exlcuir a bebida "{bebidas.nome}"</Modal.Title>
        </Modal.Header>
        <Modal.Body> Tem certeza que deseja excluir este item ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/bebidas/${bebidas.id}`);
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
            <Card.Img src={bebidas.Imagem} />
          </Card>
        </Col>
        <Col>
          <div className="p-3">
            <p>
              <strong>Nome: </strong> {bebidas.nome}{" "}
            </p>
            <p>
              {" "}
              <strong>História da bebida: </strong> {bebidas.historia}
            </p>
            <p>
              <strong>Ingredientes: </strong> {bebidas.ingredientes}
            </p>
            <p>
              <strong>Tipo: </strong> {bebidas.tipo}
            </p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "darkorange" }}
                  href={`${bebidas.id}/form`}
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
