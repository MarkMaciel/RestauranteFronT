import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Card, Col, Modal, Row } from "react-bootstrap";

const index = () => {
  const { push, query } = useRouter();
  const [sobremesas, setSobremesas] = useState([]);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/sobremesas/${query.id}`).then((res) => {
        setSobremesas(res.data);
      });
    }
  }, [query.id]);

  function excluir() {
    setShow(true);
  }

  return (
    <Pagina2 footer="fixed" titulo={sobremesas.nome}>
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>
            Deseja exlcuir a sobremesa "{sobremesas.nome}"
          </Modal.Title>
        </Modal.Header>
        <Modal.Body> Tem certeza que deseja excluir este item ?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Cancelar
          </Button>
          <Button
            variant="danger"
            onClick={() => {
              axios.delete(`/api/sobremesas/${sobremesas.id}`);
              push("/sobremesa");
            }}
          >
            Excluir
          </Button>
        </Modal.Footer>
      </Modal>
      <Row>
        <Col>
          <Card>
            <Card.Img src={sobremesas.Imagem} />
          </Card>
        </Col>
        <Col>
          <div className="p-3 text-white">
            <p>
              <strong>Nome: </strong> {sobremesas.nome}{" "}
            </p>
            <p>
              <strong>Ingredientes: </strong> {sobremesas.ingredientes}
            </p>
            <Row className="">
              <Col>
                <Link
                  className="btn"
                  style={{ backgroundColor: "darkorange", color: "white" }}
                  href={`${sobremesas.id}/form`}
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
