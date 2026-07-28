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
    // Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        return await this.filtrar(

            {
                unidade_id: operacaoId,
                ativo: true
            },

            {
                orderBy: "ordem",
                ascending: true
            }

        );

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
            .lte("data_inicio", agora)
            .gte("data_fim", agora)
            .order("ordem", {

                ascending: true

            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar Completa
    // ==================================================

    async buscarCompleta(id) {

        const { data, error } = await this
            .query()
            .select(`
                *,
                campanhas_horarios(*)
            `)
            .eq("id", id)
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Reordenar
    // ==================================================

    async atualizarOrdem(id, ordem) {

        return await this.atualizar(id, {

            ordem

        });

    }

    // ==================================================
    // Ativar
    // ==================================================

    async ativar(id) {

        return await this.atualizar(id, {

            ativo: true

        });

    }

    // ==================================================
    // Desativar
    // ==================================================

    async desativar(id) {

        return await this.atualizar(id, {

            ativo: false

        });

    }

    // ==================================================
    // Banner Principal
    // ==================================================

    async bannerPrincipal(operacaoId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("ativo", true)
            .order("ordem")
            .limit(1)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(operacaoId) {

        const total = await this.contar({

            unidade_id: operacaoId

        });

        const ativas = await this.contar({

            unidade_id: operacaoId,

            ativo: true

        });

        return {

            total,

            ativas,

            inativas: total - ativas

        };

    }

}

export default new CampanhaRepository();
