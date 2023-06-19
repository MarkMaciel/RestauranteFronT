import Pagina2 from "@/components/Pagina2";
import sobremesaValidator from "@/validators/sobremesasValidators";
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
      axios.get(`/api/sobremesas/${query.id}`).then((res) => {
        const sobremesas = res.data;

        for (let atributo in sobremesas) {
          setValue(atributo, sobremesas[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/sobremesas/${dados.id}`, dados);
    push(`/sobremesa/`);
  }

  return (
    <Pagina2 titulo="Editar sobremesa" footer="fixed">
      <Form>
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Digite o nome da sobremesa"
              type="text"
              {...register("nome", sobremesaValidator.nome)}
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
              {...register("ingredientes", sobremesaValidator.ingredientes)}
            />
            {errors.ingredientes && (
              <small className="text-danger">
                {errors.ingredientes.message}
              </small>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="historia">
          <Form.Label>História da sobremesa: </Form.Label>
          <Form.Control
            placeholder="Conte a história desta sobremesa"
            type="text"
            {...register("historia")}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Adicione uma foto da sobremesa: </Form.Label>
          <Form.Control
            {...register("Imagem", sobremesaValidator.Imagem)}
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
            href={"/sobremesa"}
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
