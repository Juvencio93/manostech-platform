const express = require('express');
const portalRoutes = require('../modules/portal/routes/portalRoutes');
const campanhaRoutes = require('../modules/campanhas/routes/campanhaRoutes');
const visitanteRoutes = require('../modules/visitantes/routes/visitanteRoutes');
const acessoRoutes = require('../modules/acessos/routes/acessoRoutes');
const relatorioRoutes = require('../modules/relatorios/routes/relatorioRoutes');
const configuracaoRoutes = require('../modules/configuracoes/routes/configuracaoRoutes');

const router = express.Router();

// Rotas dos módulos
router.use('/portal', portalRoutes);
router.use('/campanhas', campanhaRoutes);
router.use('/visitantes', visitanteRoutes);
router.use('/acessos', acessoRoutes);
router.use('/relatorios', relatorioRoutes);
router.use('/configuracoes', configuracaoRoutes);

module.exports = router;