import CardStyle from "@/components/CardStyle";
import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Card, Col, Row } from "react-bootstrap";
import { BsPlusCircle } from "react-icons/bs";

const prato = () => {
  const [pratos, setPratos] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/pratos").then((res) => {
      setPratos(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/pratos/${id}`);
      getAll();
    }
  }
  return (
    <div>
      <Pagina2 footer="fixed" titulo="Prato Principal">
        <Link
          href={"/pratoP/form"}
          className="btn mb-2"
          style={{ backgroundColor: "darkorange", color: "white" }}
        >
          Adicionar
          <BsPlusCircle className="ms-1" />
        </Link>
        <Row>
          {pratos.map((item) => (
            <Col key={item.id}>
              <Link
                href={`/pratoP/${item.id}`}
                style={{
                  textDecoration: "none",
                  color: "black",
                  textAlign: "center",
                }}
              >
                <CardStyle
                  style={{ width: "60%", height: "60%" }}
                  imagem={item.Imagem}
                  titulo={item.nome}
                  link={`pratoP/${item.id}`}
                />
              </Link>
            </Col>
          ))}
        </Row>
      </Pagina2>
    </div>
  );
};

export default prato;
