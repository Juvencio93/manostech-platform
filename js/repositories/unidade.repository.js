// ======================================================
// Manos Tech Platform
// Unidade Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class UnidadeRepository extends BaseRepository {

    constructor() {

        super("unidades");

    }

    // ==================================================
    // Buscar por Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return await this.buscarTodos(
            "empresa_id",
            empresaId,
            {
                orderBy: "nome",
                ascending: true
            }
        );

    }

    // ==================================================
    // Unidades Ativas
    // ==================================================

    async listarAtivas(empresaId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .eq("status", "ativo")
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

    // ==================================================
    // Buscar Unidade Principal
    // ==================================================

    async principal(empresaId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("empresa_id", empresaId)
            .eq("principal", true)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Alterar Status
    // ==================================================

    async alterarStatus(id, status) {

        return await this.atualizar(id, {

            status

        });

    }

}

export default new UnidadeRepository();
