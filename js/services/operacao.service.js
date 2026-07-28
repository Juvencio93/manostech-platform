// ======================================================
// Manos Tech Platform
// Operação Service
// ======================================================

import api from "../core/http.js";
import operacaoRepository from "../repositories/operacao.repository.js";

class OperacaoService {

    async listar() {

        return await api.execute(() =>
            operacaoRepository.listar()
        );

    }

    async buscar(id) {

        return await api.execute(() =>
            operacaoRepository.buscar(id)
        );

    }

    async buscarCompleta(id) {

        return await api.execute(() =>
            operacaoRepository.buscarCompleta(id)
        );

    }

    async listarPorEmpresa(empresaId) {

        return await api.execute(() =>
            operacaoRepository.listarPorEmpresa(
                empresaId
            )
        );

    }

    async listarPorTipo(empresaId, tipo) {

        return await api.execute(() =>
            operacaoRepository.listarPorTipo(
                empresaId,
                tipo
            )
        );

    }

    async criar(dados) {

        return await api.execute(() =>
            operacaoRepository.criar(dados)
        );

    }

    async atualizar(id, dados) {

        return await api.execute(() =>
            operacaoRepository.atualizar(
                id,
                dados
            )
        );

    }

    async excluir(id) {

        return await api.execute(() =>
            operacaoRepository.desativar(id)
        );

    }

    async dashboard(id) {

        return await api.execute(() =>
            operacaoRepository.dashboard(id)
        );

    }

}

export default new OperacaoService();
