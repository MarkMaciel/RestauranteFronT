const bebidaValidator = {
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
    minLength: {
      value: 10,
      message: "A quantidade de caracteres mínima é 10",
    },
    maxLength: {
      value: 50,
      message: "A quantidade de caracteres máxima é 50",
    },
  },

  Imagem: {
    required: "O campo é obrigatório",
  },

  tipo: {
    value: "Escolha o tipo de bebida",
    options: {
      compare: "Escolha o tipo de bebida",
      message: "É necessário escolher uma opção.",
    },
  },
};

export default bebidaValidator;
