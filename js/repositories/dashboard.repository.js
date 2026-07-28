// ======================================================
// Manos Tech Platform
// Dashboard Repository
// ======================================================

import { supabase } from "../core/supabase-client.js";

class DashboardRepository {

    // ==================================================
    // Cache
    // ==================================================

    async cache(operacaoId) {

        const { data, error } = await supabase
            .from("dashboard_cache")
            .select("*")
            .eq("unidade_id", operacaoId)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Atualizar Cache
    // ==================================================

    async atualizarCache(operacaoId, dados) {

        const { data, error } = await supabase
            .from("dashboard_cache")
            .update({
                ...dados,
                ultima_atualizacao: new Date().toISOString()
            })
            .eq("unidade_id", operacaoId)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Período Ativo
    // ==================================================

    async periodoAtivo(operacaoId) {

        const { data, error } = await supabase
            .from("dashboard_periodos")
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("ativo", true)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Fluxo Diário
    // ==================================================

    async fluxoDiario(operacaoId) {

        const { data, error } = await supabase
            .from("vw_fluxo_diario")
            .select("*")
            .eq("unidade_id", operacaoId);

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Acessos por Hora
    // ==================================================

    async acessosPorHora(operacaoId) {

        const { data, error } = await supabase
            .from("vw_acessos_por_hora")
            .select("*")
            .eq("unidade_id", operacaoId);

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Clientes Frequentes
    // ==================================================

    async clientesFrequentes(operacaoId) {

        const { data, error } = await supabase
            .from("vw_clientes_frequentes")
            .select("*")
            .eq("unidade_id", operacaoId);

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Pico Movimento
    // ==================================================

    async picoMovimento(operacaoId) {

        const { data, error } = await supabase
            .from("vw_pico_movimento")
            .select("*")
            .eq("unidade_id", operacaoId);

        if (error) throw error;

        return data;

    }

}

export default new DashboardRepository();
