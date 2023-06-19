import CardStyle from "@/components/CardStyle";
import Pagina from "@/components/Pagina";
import Rodape from "@/components/Rodape";
import Link from "next/link";
import React from "react";
import { Card, Col, Row } from "react-bootstrap";

const index = () => {
  return (
    <Pagina titulo="https://cdn.discordapp.com/attachments/967872716063526942/1119405014297890866/FrontFoodTruck.png">
      <Row style={{ marginTop: 60 }}>
        <Col style={{ textAlign: "center" }} md={3}>
          <CardStyle
            titulo="Entradas"
            imagem="https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
            link="entrada"
          />
        </Col>
        <Col style={{ textAlign: "center" }} md={3}>
          <CardStyle
            titulo="Prato Principal"
            imagem="https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
            link="pratoP"
          />
        </Col>
        <Col style={{ textAlign: "center" }} md={3}>
          <CardStyle
            titulo="Sobremesas"
            imagem="https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
            link="sobremesa"
          />
        </Col>
        <Col style={{ textAlign: "center" }} md={3}>
          <CardStyle
            titulo="Bebidas"
            imagem="https://receitade.com.br/assets/site/uploads/receita/feijoada-light-1920x1080.webp"
            link="bebida"
          />
        </Col>
      </Row>
    </Pagina>
  );
};

export default index;
