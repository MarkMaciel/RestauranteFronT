import Pagina from "@/components/Pagina";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const index = () => {
  return (
    <Pagina titulo="Restaurante">
      <Row>
        <Col md={3}>
          <Card mt-5 mb-5>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Card.Title>Entrada</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card mt-5 mb-5>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Card.Title>Prato Principal</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card mt-5 mb-5>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Card.Title>Sobremesas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
        <Col md={3}>
          <Card mt-5 mb-5>
            <Card.Img
              variant="top"
              src={
                "https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
              }
            />
            <Card.Body>
              <Card.Title>Bebidas</Card.Title>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      <Row>
        <button className="btn btn-primary" mt-5 mb-5 py-3>
          Cadastrar
        </button>
      </Row>
    </Pagina>
  );
};

export default index;
