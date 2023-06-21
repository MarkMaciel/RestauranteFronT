import Link from "next/link";
import React from "react";
import { Card } from "react-bootstrap";

const CardStyle = (props) => {
  return (
    <div>
      <Link
        href={`/${props.link}`}
        style={{
          textDecoration: "none",
        }}
      >
        <Card
          border="warning"
          style={{
            boxShadow: "0 8px 11px rgba(255, 255, 0, 0.2)",
            transition: "transform 0.3s ease",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "scale(1.05)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "scale(1)";
          }}
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
        </Card>
      </Link>
    </div>
  );
};

export default CardStyle;
