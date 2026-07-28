// ======================================================
// Manos Tech Platform
// Portal Service
// ======================================================

import api from "../core/api.js";
import portalRepository from "../repositories/portal.repository.js";

class PortalService {

    async buscar(id) {

        return api.execute(async () => {

            return await portalRepository.buscar(id);

        });

    }

    async buscarPorOperacao(operacaoId) {

        return api.execute(async () => {

            return await portalRepository.buscarPorOperacao(
                operacaoId
            );

        });

    }

    async buscarAtivo(operacaoId) {

        return api.execute(async () => {

            return await portalRepository.buscarAtivo(
                operacaoId
            );

        });

    }

    async criar(dados) {

        return api.execute(async () => {

            return await portalRepository.criar(dados);

        });

    }

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await portalRepository.atualizar(
                id,
                dados
            );

        });

    }

    async atualizarLayout(operacaoId, dados) {

        return api.execute(async () => {

            return await portalRepository.atualizarLayout(
                operacaoId,
                dados
            );

        });

    }

    async ativar(operacaoId) {

        return api.execute(async () => {

            return await portalRepository.ativar(
                operacaoId
            );

        });

    }

    async desativar(operacaoId) {

        return api.execute(async () => {

            return await portalRepository.desativar(
                operacaoId
            );

        });

    }

}

export default new PortalService();
