const { Schema, model } = require("mongoose");

const ClienteSchema = new Schema(
  {
    nome: {
      type: String,
      required: true
    },
    cpf: {
      type: Number,
      unique: true,
      required: true
    },
    cidade: {
      type: String,
      required: true
    },
    estado: {
      type: String,
      required: true
    },
    telefone:{
      type: Number,
      required: true
    }
  },

  {
    timestamps: true
  }
);
module.exports = model("Cliente", ClienteSchema);
