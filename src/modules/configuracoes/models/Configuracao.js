const mongoose = require('mongoose');

const configuracaoSchema = new mongoose.Schema(
  {
    unidade: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Unidade',
      required: true,
    },
    chave: {
      type: String,
      required: true,
    },
    valor: {
      type: mongoose.Schema.Types.Mixed,
      required: true,
    },
    descricao: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model('Configuracao', configuracaoSchema);