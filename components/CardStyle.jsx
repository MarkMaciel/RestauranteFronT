import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const CardStyle = (props) => {
  return (
    <div>
      <Card
        style={{ boxShadow: "0 8px 11px rgba(255, 255, 255, 0.2)" }}
        border="warning"
        className="text-white bg-dark"
      >
        <Card.Header
          className="text-center"
          style={{
            backgroundColor: "#FF8500",
            fontSize: "25px",
            fontFamily: "system-ui",
          }}
        >
          {props.titulo}
        </Card.Header>
        <Card.Img variant="top" src={props.imagem} />
        <Card.Body>
          <Link
            href={`/${props.link}`}
            className="btn"
            style={{ backgroundColor: "darkorange", color: "white" }}
          >
            Ver mais
          </Link>
        </Card.Body>
      </Card>
    </div>
  );
};

export default CardStyle;
