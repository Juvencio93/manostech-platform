// ======================================================
// Manos Tech Platform
// Campanha Service
// ======================================================

import api from "../core/api.js";
import campanhaRepository from "../repositories/campanha.repository.js";

class CampanhaService {

    async buscar(id) {

        return api.execute(async () => {

            return await campanhaRepository.buscar(id);

        });

    }

    async listar() {

        return api.execute(async () => {

            return await campanhaRepository.listar();

        });

    }

    async listarPorOperacao(operacaoId) {

        return api.execute(async () => {

            return await campanhaRepository.listarPorOperacao(
                operacaoId
            );

        });

    }

    async listarAtivas(operacaoId) {

        return api.execute(async () => {

            return await campanhaRepository.listarAtivas(
                operacaoId
            );

        });

    }

    async listarPorTipo(operacaoId, tipo) {

        return api.execute(async () => {

            return await campanhaRepository.listarPorTipo(
                operacaoId,
                tipo
            );

        });

    }

    async criar(dados) {

        return api.execute(async () => {

            return await campanhaRepository.criar(dados);

        });

    }

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await campanhaRepository.atualizar(
                id,
                dados
            );

        });

    }

    async ativar(id) {

        return api.execute(async () => {

            return await campanhaRepository.ativar(id);

        });

    }

    async desativar(id) {

        return api.execute(async () => {

            return await campanhaRepository.desativar(id);

        });

    }

    async alterarOrdem(id, ordem) {

        return api.execute(async () => {

            return await campanhaRepository.alterarOrdem(
                id,
                ordem
            );

        });

    }

    async excluir(id) {

        return api.execute(async () => {

            return await campanhaRepository.excluir(id);

        });

    }

}

export default new CampanhaService();
