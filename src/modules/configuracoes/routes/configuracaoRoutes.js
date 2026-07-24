const express = require('express');
const { getAllConfiguracoes, getConfiguracaoById, createConfiguracao } = require('../controllers/configuracaoController');

const router = express.Router();

router.get('/', getAllConfiguracoes);
router.get('/:id', getConfiguracaoById);
router.post('/', createConfiguracao);

module.exports = router;