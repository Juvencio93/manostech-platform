// ======================================================
// Manos Tech Platform
// Visitante Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class VisitanteRepository extends BaseRepository {

    constructor() {

        super("visitantes");

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
                orderBy: "ultimo_acesso",
                ascending: false
            }

        );

    }

    // ==================================================
    // Buscar WhatsApp
    // ==================================================

    async buscarPorWhatsapp(unidadeId, whatsapp) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", unidadeId)
            .eq("whatsapp", whatsapp)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Novos Hoje
    // ==================================================

    async novosHoje(unidadeId) {

        const hoje = new Date();

        hoje.setHours(0,0,0,0);

        const { count, error } = await this
            .query()
            .select("id", {

                head: true,

                count: "exact"

            })
            .eq("unidade_id", unidadeId)
            .gte("primeiro_acesso", hoje.toISOString());

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Recorrentes
    // ==================================================

    async recorrentes(unidadeId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", unidadeId)
            .gt("total_visitas", 1)
            .order("total_visitas", {

                ascending: false

            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(unidadeId) {

        return {

            total: await this.contar({

                unidade_id: unidadeId,

                ativo: true

            }),

            novos: await this.novosHoje(

                unidadeId

            ),

            recorrentes: (

                await this.recorrentes(

                    unidadeId

                )

            ).length

        };

    }

}

export default new VisitanteRepository();
