const Configuracao = require('../models/Configuracao');

const getAllConfiguracoes = async (req, res) => {
  try {
    const configuracoes = await Configuracao.find().populate('unidade');
    res.json(configuracoes);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getConfiguracaoById = async (req, res) => {
  try {
    const configuracao = await Configuracao.findById(req.params.id).populate('unidade');
    if (!configuracao) return res.status(404).json({ error: 'Configuração não encontrada' });
    res.json(configuracao);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const createConfiguracao = async (req, res) => {
  try {
    const configuracao = new Configuracao(req.body);
    await configuracao.save();
    res.status(201).json(configuracao);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = { getAllConfiguracoes, getConfiguracaoById, createConfiguracao };