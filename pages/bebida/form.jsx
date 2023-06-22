import React, { useEffect, useState } from "react";
import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

const schema = yup
  .object({
    nome: yup
      .string()
      .required("Campo obrigatório")
      .max(20, "Máximo de 20 caracteres"),
    ingredientes: yup
      .string()
      .required("Campo obrigatório")
      .max(50, "Máximo de 50 caracteres"),
    Imagem: yup
      .string()
      .required("Campo obrigatório")
      .url("URL Inválida")
      .min(5, "Mínimo de 5 caracteres"),
    tipo: yup
      .string()
      .required()
      .oneOf(
        ["Alcoolica", "Suco", "Refrigerante", "Milshake"],
        "É necessário escolher uma opção"
      )
      .label("Escolha o Tipo"),
  })
  .required();

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  function salvar(dados) {
    axios.post("/api/bebidas", dados);
    push("/bebida");
  }

  return (
    <Pagina2 footer="fixed" titulo="Adicionar bebida ao cardápio">
      <Form className="text-white">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Digite o nome da bebida"
              type="text"
              {...register("nome")}
            />
            {errors.nome && (
              <small className="text-danger">{errors.nome.message}</small>
            )}
          </Form.Group>
          <Form.Group as={Col} controlId="ingredientes">
            <Form.Label>Ingredientes: </Form.Label>
            <Form.Control
              placeholder="Digite os ingredientes"
              type="text"
              {...register("ingredientes")}
            />
            {errors.ingredientes && (
              <small className="text-danger">
                {errors.ingredientes.message}
              </small>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="teor">
          <Form.Label>Teor álcoolico: </Form.Label>
          <Form.Control
            placeholder="Conte a história desta bebida"
            type="text"
            {...register("teor")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Adicione uma foto da bebida: </Form.Label>
          <Form.Control
            {...register("Imagem")}
            type="text"
            placeholder="Adicione o link de uma imagem: Recomendamos 1920x1080p"
          />
          {errors.Imagem && (
            <small className="text-danger">{errors.Imagem.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Escolha o tipo de bebida: </Form.Label>
          <Form.Select {...register("tipo")}>
            <option>Escolha o tipo de bebida</option>
            <option value="Alcoolica">Alcoolica</option>
            <option value="Suco">Suco</option>
            <option value="Refrigerante">Refrigerante</option>
            <option value="Refrigerante">Milkshake</option>
          </Form.Select>
          {errors.tipo && (
            <small className="text-danger">{errors.tipo.message}</small>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="ms-1" />
            Salvar
          </Button>
          <Link
            href={"/bebida"}
            className="btn ms-3"
            style={{ backgroundColor: "darkorange", color: "white" }}
          >
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina2>
  );
};

export default form;
