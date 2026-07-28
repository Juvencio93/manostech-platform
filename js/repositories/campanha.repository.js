// ======================================================
// Manos Tech Platform
// Campanha Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class CampanhaRepository extends BaseRepository {

    constructor() {

        super("campanhas");

    }

    // ==================================================
    // Listar por Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .order("ordem", { ascending: true })
            .order("titulo", { ascending: true });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Campanhas Ativas
    // ==================================================

    async listarAtivas(operacaoId) {

        const agora = new Date().toISOString();

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("ativo", true)
            .or(`data_inicio.is.null,data_inicio.lte.${agora}`)
            .or(`data_fim.is.null,data_fim.gte.${agora}`)
            .order("ordem", { ascending: true });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar por Tipo
    // ==================================================

    async listarPorTipo(operacaoId, tipo) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("tipo", tipo)
            .order("ordem", { ascending: true });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Ativar
    // ==================================================

    async ativar(id) {

        return await this.atualizar(id, {

            ativo: true,
            updated_at: new Date().toISOString()

        });

    }

    // ==================================================
    // Desativar
    // ==================================================

    async desativar(id) {

        return await this.atualizar(id, {

            ativo: false,
            updated_at: new Date().toISOString()

        });

    }

    // ==================================================
    // Alterar Ordem
    // ==================================================

    async alterarOrdem(id, ordem) {

        return await this.atualizar(id, {

            ordem,
            updated_at: new Date().toISOString()

        });

    }

}

export default new CampanhaRepository();
