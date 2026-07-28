// ======================================================
// Manos Tech Platform
// Campanha Service
// ======================================================

import http from "../core/http.js";
import campanhaRepository from "../repositories/campanha.repository.js";

class CampanhaService {

    // ==================================================
    // Listar
    // ==================================================

    async listar() {

        return await http.execute(() =>
            campanhaRepository.listar()
        );

    }

    // ==================================================
    // Buscar
    // ==================================================

    async buscar(id) {

        return await http.execute(() =>
            campanhaRepository.buscar(id)
        );

    }

    // ==================================================
    // Buscar Completa
    // ==================================================

    async buscarCompleta(id) {

        return await http.execute(() =>
            campanhaRepository.buscarCompleta(id)
        );

    }

    // ==================================================
    // Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        return await http.execute(() =>
            campanhaRepository.listarPorOperacao(
                operacaoId
            )
        );

    }

    // ==================================================
    // Campanhas Ativas
    // ==================================================

    async listarAtivas(operacaoId) {

        return await http.execute(() =>
            campanhaRepository.listarAtivas(
                operacaoId
            )
        );

    }

    // ==================================================
    // Banner Principal
    // ==================================================

    async bannerPrincipal(operacaoId) {

        return await http.execute(() =>
            campanhaRepository.bannerPrincipal(
                operacaoId
            )
        );

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        return await http.execute(() =>
            campanhaRepository.criar(dados)
        );

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        return await http.execute(() =>
            campanhaRepository.atualizar(
                id,
                dados
            )
        );

    }

    // ==================================================
    // Atualizar Ordem
    // ==================================================

    async atualizarOrdem(id, ordem) {

        return await http.execute(() =>
            campanhaRepository.atualizarOrdem(
                id,
                ordem
            )
        );

    }

    // ==================================================
    // Ativar
    // ==================================================

    async ativar(id) {

        return await http.execute(() =>
            campanhaRepository.ativar(id)
        );

    }

    // ==================================================
    // Desativar
    // ==================================================

    async desativar(id) {

        return await http.execute(() =>
            campanhaRepository.desativar(id)
        );

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        return await http.execute(() =>
            campanhaRepository.excluir(id)
        );

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(operacaoId) {

        return await http.execute(() =>
            campanhaRepository.dashboard(
                operacaoId
            )
        );

    }

}

export default new CampanhaService();
