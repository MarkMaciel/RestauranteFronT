const salaValidator = {
  nome: {
    required: "O campo é obrigatório",
    minLength: {
      value: 3,
      message: "A quantidade de caracteres mínima é 3",
    },
    maxLength: {
      value: 10,
      message: "A quantidade de caracteres máxima é 10",
    },
  },
  capacidade: {
    required: "O campo é obrigatório",
    min: {
      value: 5,
      message: "O valor mínimo é 5",
    },
    max: {
      value: 40,
      message: "O valor máximo é 40",
    },
  },
  tipo: {
    required: "O campo é obrigatório",
    minLength: {
      value: 1,
      message: "A quantidade de caracteres mínima é 1",
    },
    maxLength: {
      value: 10,
      message: "A quantidade de caracteres máxima é 10",
    },
  },
};

export default salaValidator;
