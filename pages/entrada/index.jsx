import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const entrada = () => {
  const [entradas, setEntradas] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/entradas").then((res) => {
      setEntradas(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/entradas/${id}`);
      getAll();
    }
  }
  return (
    <div>
      <Pagina2 footer="fixed" titulo="Entradas">
        <Link
          href={"/entrada/form"}
          className="btn ms-2 mb-3"
          style={{ backgroundColor: "darkorange", color: "white" }}
        >
          Adicionar
          <BsPlusCircle className="ms-1" />
        </Link>
        <Row>
          {entradas.map((item) => (
            <Col key={item.id}>
              <Link
                href={`/entrada/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <Card>
                  <Card.Img src={item.Imagem} />
                  <Card.Body>
                    <Card.Title>{item.nome}</Card.Title>
                  </Card.Body>
                </Card>
              </Link>
            </Col>
          ))}
        </Row>
      </Pagina2>
    </div>
  );
};

export default entrada;
