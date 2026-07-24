const express = require('express');
const { getAllRelatorios, getRelatorioById, createRelatorio } = require('../controllers/relatorioController');

const router = express.Router();

router.get('/', getAllRelatorios);
router.get('/:id', getRelatorioById);
router.post('/', createRelatorio);

module.exports = router;