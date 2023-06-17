import Pagina from "@/components/Pagina";
import Rodape from "@/components/Rodape";
import Link from "next/link";
import React from "react";
import { Button, Card, Col, Row } from "react-bootstrap";
import { BsJustify } from "react-icons/bs";

const index = () => {
  return (
    <Pagina titulo="https://cdn.discordapp.com/attachments/967872716063526942/1119405014297890866/FrontFoodTruck.png">
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
              <Link
                href={"/entrada"}
                className="btn"
                style={{ backgroundColor: "darkorange" }}
              >
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
              <Link
                href={"/pratoP"}
                className="btn"
                style={{ backgroundColor: "darkorange" }}
              >
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
              <Link
                href={"#"}
                className="btn"
                style={{ backgroundColor: "darkorange" }}
              >
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
              <Link
                href={"#"}
                className="btn"
                style={{ backgroundColor: "darkorange" }}
              >
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
