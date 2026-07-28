// ======================================================
// Manos Tech Platform
// Operação Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class OperacaoRepository extends BaseRepository {

    constructor() {

        super("unidades");

    }

    // ==================================================
    // Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return await this.filtrar(

            {
                empresa_id: empresaId,
                ativo: true
            },

            {
                orderBy: "nome",
                ascending: true
            }

        );

    }

    // ==================================================
    // Tipo
    // ==================================================

    async listarPorTipo(empresaId, tipo) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .eq("tipo", tipo)
            .eq("ativo", true)
            .order("nome");

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar
    // ==================================================

    async buscarCompleta(id) {

        const { data, error } = await this
            .query()
            .select(`
                *,
                empresas(
                    id,
                    nome_fantasia,
                    cnpj
                )
            `)
            .eq("id", id)
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Ativas
    // ==================================================

    async listarAtivas() {

        return await this.buscarPor(
            "ativo",
            true
        );

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(id) {

        const operacao = await this.buscar(id);

        return {

            operacao

        };

    }

}

export default new OperacaoRepository();
