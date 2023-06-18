import CardStyle from "@/components/CardStyle";
import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const sobremesa = () => {
  const [sobremesas, setSobremesas] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/sobremesas").then((res) => {
      setSobremesas(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/sobremesas/${id}`);
      getAll();
    }
  }
  return (
    <div>
      <Pagina2 titulo="Sobremesas">
        <Link
          href={"/sobremesa/form"}
          className="btn mb-2"
          style={{ backgroundColor: "darkorange" }}
        >
          Adicionar
          <BsPlusCircle className="ms-1" />
        </Link>
        <Row>
          {sobremesas.map((item) => (
            <Col key={item.id}>
              <Link
                href={`/sobremesa/${item.id}`}
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

export default sobremesa;
