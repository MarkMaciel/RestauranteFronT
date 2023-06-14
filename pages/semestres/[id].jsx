import Pagina from "@/components/Pagina";
import semestreValidator from "@/validators/semestresValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push, query } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (query.id) {
      axios.get(`/api/semestres/${query.id}`).then((res) => {
        const disciplina = res.data;

        for (let atributo in disciplina) {
          setValue(atributo, disciplina[atributo]);
        }
      });
    }
  }, [query.id]);

  function salvar(dados) {
    axios.put(`/api/semestres/${dados.id}`, dados);
    push("/semestres");
  }

  return (
    <Pagina titulo="Semestre">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            {...register("nome", semestreValidator.nome)}
          />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="dataInicio">
          <Form.Label>Data de Início: </Form.Label>
          <Form.Control
            type="date"
            {...register("dataInicio", semestreValidator.dataInicio)}
          />
          {errors.dataInicio && (
            <small className="text-danger">{errors.dataInicio.message}</small>
          )}
        </Form.Group>

        <Form.Group as={Col} controlId="dataFim">
          <Form.Label>Data Final: </Form.Label>
          <Form.Control
            type="date"
            {...register("dataFim", semestreValidator.dataFim)}
          />
          {errors.dataFim && (
            <small className="text-danger">{errors.dataFim.message}</small>
          )}
        </Form.Group>

        <div className="text-center">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>
          <Link href={"/semestres"} className="ms-2 btn btn-danger">
            <BsArrowLeftCircleFill className="me-1" />
            Voltar
          </Link>
        </div>
      </Form>
    </Pagina>
  );
};

export default form;
