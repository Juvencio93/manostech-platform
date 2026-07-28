// ======================================================
// Manos Tech Platform
// Configuração Service
// ======================================================

import api from "../core/api.js";
import configuracaoRepository from "../repositories/configuracao.repository.js";

class ConfiguracaoService {

    async buscar(id) {

        return api.execute(async () => {

            return await configuracaoRepository.buscar(id);

        });

    }

    async buscarPorOperacao(operacaoId) {

        return api.execute(async () => {

            return await configuracaoRepository.buscarPorOperacao(
                operacaoId
            );

        });

    }

    async criar(dados) {

        return api.execute(async () => {

            return await configuracaoRepository.criar(
                dados
            );

        });

    }

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizar(
                id,
                dados
            );

        });

    }

    async atualizarConfiguracao(operacaoId, dados) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarConfiguracao(
                operacaoId,
                dados
            );

        });

    }

    async atualizarHorarioReinicio(operacaoId, horario) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarHorarioReinicio(
                operacaoId,
                horario
            );

        });

    }

    async atualizarRetencao(operacaoId, dias) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarRetencao(
                operacaoId,
                dias
            );

        });

    }

    async atualizarIdioma(operacaoId, idioma) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarIdioma(
                operacaoId,
                idioma
            );

        });

    }

    async atualizarTimezone(operacaoId, timezone) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarTimezone(
                operacaoId,
                timezone
            );

        });

    }

    async atualizarEmailRelatorio(operacaoId, email) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarEmailRelatorio(
                operacaoId,
                email
            );

        });

    }

    async atualizarEnvioAutomatico(operacaoId, ativo) {

        return api.execute(async () => {

            return await configuracaoRepository.atualizarEnvioAutomatico(
                operacaoId,
                ativo
            );

        });

    }

}

export default new ConfiguracaoService();
