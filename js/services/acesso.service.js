// ======================================================
// Manos Tech Platform
// Acesso Service
// ======================================================

import api from "../core/api.js";
import acessoRepository from "../repositories/acesso.repository.js";

class AcessoService {

    async buscar(id) {

        return api.execute(async () => {

            return await acessoRepository.buscar(id);

        });

    }

    async listar() {

        return api.execute(async () => {

            return await acessoRepository.listar();

        });

    }

    async listarPorOperacao(operacaoId) {

        return api.execute(async () => {

            return await acessoRepository.listarPorOperacao(
                operacaoId
            );

        });

    }

    async listarPorVisitante(visitanteId) {

        return api.execute(async () => {

            return await acessoRepository.listarPorVisitante(
                visitanteId
            );

        });

    }

    async ultimoAcesso(visitanteId) {

        return api.execute(async () => {

            return await acessoRepository.ultimoAcesso(
                visitanteId
            );

        });

    }

    async registrarEntrada(dados) {

        return api.execute(async () => {

            return await acessoRepository.registrarEntrada(
                dados
            );

        });

    }

    async registrarSaida(id) {

        return api.execute(async () => {

            return await acessoRepository.registrarSaida(
                id
            );

        });

    }

    async conectadosAgora(operacaoId) {

        return api.execute(async () => {

            return await acessoRepository.conectadosAgora(
                operacaoId
            );

        });

    }

    async totalHoje(operacaoId) {

        return api.execute(async () => {

            return await acessoRepository.totalHoje(
                operacaoId
            );

        });

    }

}

export default new AcessoService();
