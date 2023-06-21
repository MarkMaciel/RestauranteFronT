import Pagina2 from "@/components/Pagina2";
import pratoValidator from "@/validators/pratosValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const index = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const [bebidas, setBebidas] = useState([]);

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/pratos/${query.id}`).then((res) => {
        const prato = res.data;

        for (let atributo in prato) {
          setValue(atributo, prato[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/pratos/${dados.id}`, dados);
    push(`/pratoP/`);
  }

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/bebidas").then((res) => {
      setBebidas(res.data);
    });
  }

  return (
    <Pagina2 footer="fixed" titulo="Adicionar prato ao cardápio">
      <Form className="text-white">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Digite o nome do prato"
              type="text"
              {...register("nome", pratoValidator.nome)}
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
              {...register("ingredientes", pratoValidator.ingredientes)}
            />
            {errors.ingredientes && (
              <small className="text-danger">
                {errors.ingredientes.message}
              </small>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="bebida">
          <Form.Label>Bebida que acompanha: </Form.Label>
          <Form.Select defaultValue={"..."} {...register("bebida")}>
            <option value={"..."}>...</option>
            {bebidas.map((item) => (
              <option key={item.id} value={item.nome}>
                {item.nome}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-3" controlId="historia">
          <Form.Label>História do prato: </Form.Label>
          <Form.Control
            placeholder="Conte a história deste prato"
            type="text"
            {...register("historia")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Adicione uma foto do prato: </Form.Label>
          <Form.Control
            {...register("Imagem", pratoValidator.Imagem)}
            type="text"
            placeholder="Adicione uma imagem: Recomendamos 1920x1080p"
          />
          {errors.Imagem && (
            <small className="text-danger">{errors.Imagem.message}</small>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="ms-1" />
            Salvar
          </Button>
          <Link
            href={"/pratoP"}
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

export default index;
