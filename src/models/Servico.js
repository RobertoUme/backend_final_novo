const { Schema, model } = require("mongoose");

const ServicosSchema = new Schema(
  {
    cliente: {
      type: Schema.Types.ObjectId,
      ref:'Cliente',
      required: true
    },
    dia:{
      type: Date,
      required: true
    },
    valor: {
      type: Number,
      required: true
    },
    tipodeservico: {
      type: String,
      required: true
    },
    tamanho:{
      type: Number,
      required: true
    }
  },
  {
    timestamps: true
  }
);
module.exports = model("Servicos", ServicosSchema);
