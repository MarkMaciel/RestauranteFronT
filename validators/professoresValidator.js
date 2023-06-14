const professorValidator = {
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
      value: 5,
      message: "A quantidade de caracteres mínima é 5",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },
  salario: {
    required: "O campo é obrigatório",
    min: { value: 1320, message: "Mínimo de R$1320,00" },
  },
  email: {
    required: "O campo é obrigatório",
    pattern: {
      value: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/,
      message: "Email incorreto",
    },
  },
  telefone: {
    required: "O campo é obrigatório",
    maxLength: {
      value: 14,
      message: "O máximo de caracteres é 14",
    },
    minLength: {
      value: 9,
      message: "O mínimo de caracteres é 9",
    },
  },
  cep: {
    required: "O campo é obrigatório",
    pattern: { value: /\d{5}-\d{3}/, message: "CEP incorreto" },
  },
  logradouro: {
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
      value: 20,
      message: "A quantidade de caracteres máxima é 20",
    },
  },
};
export default professorValidator;
