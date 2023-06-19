import Pagina2 from "@/components/Pagina2";
import entradaValidator from "@/validators/entradasValidators";
import axios from "axios";
import Link from "next/link";
import { useRouter } from "next/router";
import { Button, Col, Form, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BsArrowLeftCircleFill, BsCheck2 } from "react-icons/bs";

const form = () => {
  const { push } = useRouter();
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  function salvar(dados) {
    axios.post("/api/entradas", dados);
    push("/entrada");
  }

  function handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;
    const mascara = event.target.getAttribute("mask");
    setValue(name, mask(value, mascara));
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
              {...register("nome", entradaValidator.nome)}
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
              {...register("ingredientes", entradaValidator.ingredientes)}
            />
            {errors.ingredientes && (
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
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Adicione uma foto do prato: </Form.Label>
          <Form.Control
            {...register("Imagem", entradaValidator.Imagem)}
            type="text"
            placeholder="Adicione o link de uma imagem: Recomendamos 1920x1080p"
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
            href={"/entrada"}
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
