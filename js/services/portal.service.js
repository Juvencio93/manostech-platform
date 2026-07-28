// ======================================================
// Manos Tech Platform
// Portal Service
// ======================================================

import http from "../core/http.js";
import portalRepository from "../repositories/portal.repository.js";

class PortalService {

    // ==================================================
    // Buscar Configuração
    // ==================================================

    async buscarPorOperacao(operacaoId) {

        return await http.execute(() =>
            portalRepository.buscarPorOperacao(
                operacaoId
            )
        );

    }

    // ==================================================
    // Buscar Portal Ativo
    // ==================================================

    async buscarPortalAtivo(operacaoId) {

        return await http.execute(() =>
            portalRepository.buscarPortalAtivo(
                operacaoId
            )
        );

    }

    // ==================================================
    // Salvar Configuração
    // ==================================================

    async salvarConfiguracao(
        operacaoId,
        dados
    ) {

        return await http.execute(() =>
            portalRepository.salvarConfiguracao(
                operacaoId,
                dados
            )
        );

    }

    // ==================================================
    // Ativar
    // ==================================================

    async ativar(id) {

        return await http.execute(() =>
            portalRepository.ativar(id)
        );

    }

    // ==================================================
    // Desativar
    // ==================================================

    async desativar(id) {

        return await http.execute(() =>
            portalRepository.desativar(id)
        );

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(operacaoId) {

        return await http.execute(() =>
            portalRepository.dashboard(
                operacaoId
            )
        );

    }

}

export default new PortalService();
