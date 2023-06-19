import Pagina2 from "@/components/Pagina2";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
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

  return (
    <Pagina2 titulo="Editar Prato Principal" footer="fixed">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Digite o nome do prato"
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
            {errors.data && (
              <small className="text-danger">
                {errors.ingredientes.message}
              </small>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="historia">
          <Form.Label>História do prato: </Form.Label>
          <Form.Control
            placeholder="Conte a história deste prato"
            type="text"
            {...register("historia")}
          />
          {errors.data && (
            <small className="text-danger">{errors.historia.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Adicione uma foto do prato: </Form.Label>
          <Form.Control
            {...register("Imagem")}
            type="text"
            placeholder="Adicione uma imagem: Recomendamos 1920x1080p"
          />
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="ms-1" />
            Salvar
          </Button>
          <Link
            href={"/pratoP"}
            className="btn ms-3"
            style={{ backgroundColor: "darkorange" }}
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