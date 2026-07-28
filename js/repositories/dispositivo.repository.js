// ======================================================
// Manos Tech Platform
// Dispositivo Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class DispositivoRepository extends BaseRepository {

    constructor() {

        super("dispositivos");

    }

    // ==================================================
    // Buscar por Visitante
    // ==================================================

    async listarPorVisitante(visitanteId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("visitante_id", visitanteId)
            .order("ultimo_acesso", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar por Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        const { data, error } = await this
            .query()
            .select(`
                *,
                visitantes (
                    id,
                    nome,
                    whatsapp,
                    email
                )
            `)
            .eq("unidade_id", operacaoId)
            .order("ultimo_acesso", {
                ascending: false
            });

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
            .order("ultimo_acesso", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Atualizar Último Acesso
    // ==================================================

    async registrarAcesso(id) {

        const { data, error } = await this
            .query()
            .update({

                ultimo_acesso: new Date().toISOString(),

                total_acessos: 1

            })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Incrementar Acessos
    // ==================================================

    async incrementarAcessos(id, totalAtual) {

        const { data, error } = await this
            .query()
            .update({

                ultimo_acesso: new Date().toISOString(),

                total_acessos: totalAtual + 1

            })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar Dispositivo
    // ==================================================

    async buscarDispositivo(visitanteId, tipo, modelo) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("visitante_id", visitanteId)
            .eq("tipo", tipo)
            .eq("modelo", modelo)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

}

export default new DispositivoRepository();
