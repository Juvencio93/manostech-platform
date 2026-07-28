// ======================================================
// Manos Tech Platform
// Visitante Service
// ======================================================

import http from "../core/http.js";
import visitanteRepository from "../repositories/visitante.repository.js";

class VisitanteService {

    // ==================================================
    // Listar
    // ==================================================

    async listar() {

        return await http.execute(() =>
            visitanteRepository.listar()
        );

    }

    // ==================================================
    // Buscar
    // ==================================================

    async buscar(id) {

        return await http.execute(() =>
            visitanteRepository.buscar(id)
        );

    }

    // ==================================================
    // Listar por Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        return await http.execute(() =>
            visitanteRepository.listarPorOperacao(
                operacaoId
            )
        );

    }

    // ==================================================
    // Buscar WhatsApp
    // ==================================================

    async buscarPorWhatsapp(operacaoId, whatsapp) {

        return await http.execute(() =>
            visitanteRepository.buscarPorWhatsapp(
                operacaoId,
                whatsapp
            )
        );

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        return await http.execute(() =>
            visitanteRepository.criar(dados)
        );

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        return await http.execute(() =>
            visitanteRepository.atualizar(
                id,
                dados
            )
        );

    }

    // ==================================================
    // Desativar
    // ==================================================

    async excluir(id) {

        return await http.execute(() =>
            visitanteRepository.desativar(id)
        );

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(operacaoId) {

        return await http.execute(() =>
            visitanteRepository.dashboard(
                operacaoId
            )
        );

    }

    // ==================================================
    // Novos Hoje
    // ==================================================

    async novosHoje(operacaoId) {

        return await http.execute(() =>
            visitanteRepository.novosHoje(
                operacaoId
            )
        );

    }

    // ==================================================
    // Recorrentes
    // ==================================================

    async recorrentes(operacaoId) {

        return await http.execute(() =>
            visitanteRepository.recorrentes(
                operacaoId
            )
        );

    }

}

export default new VisitanteService();
