// ======================================================
// Manos Tech Platform
// Operacao Service
// ======================================================

import api from "../core/api.js";

import operacaoRepository from "../repositories/operacao.repository.js";

class OperacaoService {

    // ==================================================
    // Buscar
    // ==================================================

    async buscar(id) {

        return api.execute(async () => {

            return await operacaoRepository.buscar(id);

        });

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar() {

        return api.execute(async () => {

            return await operacaoRepository.listar();

        });

    }

    // ==================================================
    // Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return api.execute(async () => {

            return await operacaoRepository.listarPorEmpresa(
                empresaId
            );

        });

    }

    // ==================================================
    // Empresas
    // ==================================================

    async empresas(empresaId) {

        return api.execute(async () => {

            return await operacaoRepository.empresas(
                empresaId
            );

        });

    }

    // ==================================================
    // Filiais
    // ==================================================

    async filiais(empresaId) {

        return api.execute(async () => {

            return await operacaoRepository.filiais(
                empresaId
            );

        });

    }

    // ==================================================
    // Eventos
    // ==================================================

    async eventos(empresaId) {

        return api.execute(async () => {

            return await operacaoRepository.eventos(
                empresaId
            );

        });

    }

    // ==================================================
    // Buscar por Tipo
    // ==================================================

    async listarPorTipo(empresaId, tipo) {

        return api.execute(async () => {

            return await operacaoRepository.listarPorTipo(
                empresaId,
                tipo
            );

        });

    }

    // ==================================================
    // Ativas
    // ==================================================

    async listarAtivas(empresaId) {

        return api.execute(async () => {

            return await operacaoRepository.listarAtivas(
                empresaId
            );

        });

    }

    // ==================================================
    // Buscar por Nome
    // ==================================================

    async buscarPorNome(empresaId, nome) {

        return api.execute(async () => {

            return await operacaoRepository.buscarPorNome(
                empresaId,
                nome
            );

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        return api.execute(async () => {

            return await operacaoRepository.criar(dados);

        });

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await operacaoRepository.atualizar(
                id,
                dados
            );

        });

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        return api.execute(async () => {

            return await operacaoRepository.excluir(id);

        });

    }

}

export default new OperacaoService();
