import Pagina from "@/components/Pagina";
import Rodape from "@/components/Rodape";
import Link from "next/link";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsJustify } from "react-icons/bs";

const index = () => {
  return (
    <Pagina titulo="Restaurante">
      <Row>
        <Col md={3}>
          <Card>
            <Card.Header>Entradas</Card.Header>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Link href={"/entrada"} className="btn btn-primary">
                Ver mais
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Header>Prato Principal</Card.Header>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Link href={"#"} className="btn btn-primary">
                Ver mais
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Header>Sobremesas</Card.Header>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Link href={"#"} className="btn btn-primary">
                Ver mais
              </Link>
            </Card.Body>
          </Card>
        </Col>

        <Col md={3}>
          <Card>
            <Card.Header>Bebidas</Card.Header>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Link href={"#"} className="btn btn-primary">
                Ver mais
              </Link>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
