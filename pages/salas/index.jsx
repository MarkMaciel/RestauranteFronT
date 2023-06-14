import Pagina from "@/components/Pagina";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Table } from "react-bootstrap";
import {
  BsFillPencilFill,
  BsFillTrashFill,
  BsPlusCircle,
} from "react-icons/bs";

const index = () => {
  const [salas, setSalas] = useState([]);

  useEffect(() => {
    getAll();
  }, []);

  function getAll() {
    axios.get("/api/salas").then((res) => {
      setSalas(res.data);
    });
  }

  function excluir(id) {
    if (confirm("Você tem certeza disso?")) {
      axios.delete(`/api/salas/${id}`);
      getAll();
    }
  }

  return (
    <Pagina titulo="Salas">
      <Link href={"/salas/form"} className="btn btn-primary mb-2">
        Criar novo
      </Link>

      <Table striped bordered hover variant="table table-hover table-dark">
        <thead>
          <tr>
            <th>#</th>
            <th>Nome</th>
            <th>Capacidade</th>
            <th>Tipo</th>
          </tr>
        </thead>
        <tbody>
          {salas.map((item) => (
            <tr key={item.id}>
              <td>
                <Link href={`/salas/${item.id}`}>
                  <BsFillPencilFill className="me-2 text-primary" />
                </Link>
                <BsFillTrashFill
                  onClick={() => excluir(item.id)}
                  className="text-danger"
                />
              </td>
              <td>{item.nome}</td>
              <td>{item.capacidade}</td>
              <td>{item.tipo}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Pagina>
  );
};

export default index;
