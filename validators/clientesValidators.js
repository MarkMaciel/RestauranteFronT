const clienteValidator = {
  nome: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  cpf: {
    required: "O campo é obrigatório",
    pattern: {
      value: /^\d{3}\.\d{3}\.\d{3}\-\d{2}$/,
      message: "O CPF está incorreto",
    },
  },
  matricula: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  email: {
    required: "O campo é obrigatório",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Email incorreto",
    },
  },
  data: {
    required: "O campo é obrigatório",
  },
  telefone: {
    required: "O campo é obrigatório",
    maxLength: {
      value: 50,
      message: "O maxímo de caracteres é 50",
    },
    minLength: {
      value: 9,
      message: "O mínimo de caracteres é 9",
    },
  },
  cep: {
    required: "O campo é obrigatório",
    maxLength: {
      value: 11,
      message: "CEP incorreto",
    },
    minLength: {
      value: 8,
      message: "CEP incorreto",
    },
  },
  uf: {
    required: "O campo é obrigatório",
  },
  cidade: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 20,
      message: "A quantidade de caracteres máxima é 20",
    },
  },
  logradouro: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  numero: {
    required: "O campo é obrigatório",
    minLength: {
      value: 1,
      message: "A quantidade de caracteres mínima é 1",
    },
    maxLength: {
      value: 5,
      message: "A quantidade de caracteres máxima é 5",
    },
  },
  bairro: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
};
export default clienteValidator;
