const entradaValidator = {
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
  ingredientes: {
    required: "O campo é obrigatório",
    maxLength: {
      value: 100,
      message: "A quantidade de caracteres máxima é 100",
    },
  },
  Imagem: {
    required: "O campo é obrigatório",
  },
};

export default entradaValidator;
