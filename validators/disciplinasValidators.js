const disciplinaValidator = {
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
  curso: {
    required: "O campo é obrigatório",
  },
};

export default disciplinaValidator;
