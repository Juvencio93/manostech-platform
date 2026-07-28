// ======================================================
// Manos Tech Platform
// Operacao Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class OperacaoRepository extends BaseRepository {

    constructor() {

        super("unidades");

    }

    // ==================================================
    // Buscar Operações da Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .order("nome");

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar por Tipo
    // ==================================================

    async listarPorTipo(empresaId, tipo) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .eq("tipo", tipo)
            .order("nome");

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Empresas
    // ==================================================

    async empresas(empresaId) {

        return this.listarPorTipo(
            empresaId,
            "EMPRESA"
        );

    }

    // ==================================================
    // Filiais
    // ==================================================

    async filiais(empresaId) {

        return this.listarPorTipo(
            empresaId,
            "FILIAL"
        );

    }

    // ==================================================
    // Eventos
    // ==================================================

    async eventos(empresaId) {

        return this.listarPorTipo(
            empresaId,
            "EVENTO"
        );

    }

    // ==================================================
    // Operações Ativas
    // ==================================================

    async listarAtivas(empresaId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .eq("ativo", true)
            .order("nome");

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar por Nome
    // ==================================================

    async buscarPorNome(empresaId, nome) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .ilike("nome", `%${nome}%`)
            .order("nome");

        if (error) throw error;

        return data;

    }

}

export default new OperacaoRepository();
