import Pagina2 from "@/components/Pagina2";
import clienteValidator from "@/validators/clientesValidators";
import axios from "axios";
import { mask } from "remask";
import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { Button, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    axios.post("/api/clientes", dados);
    push("/clientes");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
  }

  return (
    <Pagina2 titulo="Faça seu cadastro">
      <Form>
        <Form.Group className="mb-3" controlId="nome">
          <Form.Label>Nome: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu nome"
            {...register("nome", clienteValidator.nome)}
          />
          {errors.nome && (
            <small className="text-danger">{errors.nome.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cpf">
          <Form.Label>CPF: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu cpf - Ex: 000.000.000-00"
            mask="999.999.999-99"
            {...register("cpf")}
            onChange={handleChange}
          />
          {errors.cpf && (
            <small className="text-danger">{errors.cpf.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email: </Form.Label>
          <Form.Control
            type="email"
            placeholder="Digite seu e-mail"
            {...register("email", clienteValidator.email)}
          />
          {errors.email && (
            <small className="text-danger">{errors.email.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="telefone">
          <Form.Label>Telefone: </Form.Label>
          <Form.Control
            type="tel"
            placeholder="Digite seu telefone - Ex: (61) 00000-0000"
            mask="(99) 99999-9999"
            {...register("telefone")}
            onChange={handleChange}
          />
          {errors.telefone && (
            <small className="text-danger">{errors.telefone.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="cep">
          <Form.Label>CEP: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Digite seu CEP - Ex: 00000-000"
            mask="99999-999"
            {...register("cep")}
            onChange={handleChange}
          />
          {errors.cep && (
            <small className="text-danger">{errors.cep.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="logradouro">
          <Form.Label>Logradouro: </Form.Label>
          <Form.Control
            type="text"
            {...register("logradouro", clienteValidator.logradouro)}
          />
          {errors.logradouro && (
            <small className="text-danger">{errors.logradouro.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="complemento">
          <Form.Label>Complemento: </Form.Label>
          <Form.Control
            type="text"
            {...register("complemento", clienteValidator.complemento)}
          />
          {errors.complemento && (
            <small className="text-danger">{errors.complemento.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="numero">
          <Form.Label>Numero: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: 10"
            {...register("numero", clienteValidator.numero)}
          />
          {errors.numero && (
            <small className="text-danger">{errors.numero.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="bairro">
          <Form.Label>Bairro: </Form.Label>
          <Form.Control
            type="text"
            placeholder="Ex: Setor O"
            {...register("bairro", clienteValidator.bairro)}
          />
          {errors.bairro && (
            <small className="text-danger">{errors.bairro.message}</small>
          )}
        </Form.Group>

        <div className="text-center mb-3">
          <Button variant="success" onClick={handleSubmit(salvar)}>
            <BsCheck2 className="me-1" />
            Salvar
          </Button>

          <Link
            href={"/clientes"}
            className="ms-2 btn"
            style={{ backgroundColor: "DarkOrange" }}
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
