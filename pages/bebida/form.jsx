import Pagina2 from "@/components/Pagina2";
import bebidaValidator from "@/validators/bebidasValidators";
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
    axios.post("/api/bebidas", dados);
    push("/bebida");
  }

  return (
    <Pagina2 titulo="Adicionar bebida ao cardápio">
      <Form className="text-white">
        <Row className="mb-3">
          <Form.Group as={Col} controlId="nome">
            <Form.Label>Nome: </Form.Label>
            <Form.Control
              placeholder="Digite o nome da bebida"
              type="text"
              {...register("nome", bebidaValidator.nome)}
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
              {...register("ingredientes", bebidaValidator.ingredientes)}
            />
            {errors.ingredientes && (
              <small className="text-danger">
                {errors.ingredientes.message}
              </small>
            )}
          </Form.Group>
        </Row>

        <Form.Group className="mb-3" controlId="historia">
          <Form.Label>História da bebida: </Form.Label>
          <Form.Control
            placeholder="Conte a história desta bebida"
            type="text"
            {...register("historia")}
          />
          {errors.historia && (
            <small className="text-danger">{errors.historia.message}</small>
          )}
        </Form.Group>

        <Form.Group className="mb-3" controlId="imagem">
          <Form.Label>Adicione uma foto da bebida: </Form.Label>
          <Form.Control
            {...register("Imagem", bebidaValidator.Imagem)}
            type="text"
            placeholder="Adicione o link de uma imagem: Recomendamos 1920x1080p"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Escolha o tipo de bebida: </Form.Label>
          <Form.Select {...register("tipo", bebidaValidator.tipo)}>
            <option>Escolha o tipo de bebida</option>
            <option value="Alcoolica">Alcoolica</option>
            <option value="Suco">Suco</option>
            <option value="Refrigerante">Refrigerante</option>
            <option value="Milkshake">Milkshake</option>
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

export default form;
