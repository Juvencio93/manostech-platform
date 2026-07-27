// ======================================================
// Manos Tech Platform
// Dashboard Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class DashboardService {

    constructor() {

        this.dashboardView = "vw_dashboard";
        this.acessosHoraView = "vw_acessos_hora";
        this.acessosDiaView = "vw_acessos_dia";
        this.rankingView = "vw_ranking_visitantes";

    }

    // ==================================================
    // Dashboard da Loja
    // ==================================================

    async dashboardLoja(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from(this.dashboardView)
                .select("*")
                .eq("loja_id", lojaId)
                .single();

        });

    }

    // ==================================================
    // Dashboard do Evento
    // ==================================================

    async dashboardEvento(eventoId) {

        return api.execute(async () => {

            return await supabase
                .from(this.dashboardView)
                .select("*")
                .eq("evento_id", eventoId)
                .single();

        });

    }

    // ==================================================
    // Acessos por Hora
    // ==================================================

    async acessosPorHora(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from(this.acessosHoraView)
                .select("*")
                .eq("loja_id", lojaId)
                .order("hora");

        });

    }

    // ==================================================
    // Acessos por Dia
    // ==================================================

    async acessosPorDia(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from(this.acessosDiaView)
                .select("*")
                .eq("loja_id", lojaId)
                .order("data");

        });

    }

    // ==================================================
    // Ranking de Visitantes
    // ==================================================

    async rankingVisitantes(lojaId, limite = 20) {

        return api.execute(async () => {

            return await supabase
                .from(this.rankingView)
                .select("*")
                .eq("loja_id", lojaId)
                .limit(limite);

        });

    }

    // ==================================================
    // Resumo Geral
    // ==================================================

    async resumo(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from(this.dashboardView)
                .select(`
                    total_visitantes,
                    conectados_agora,
                    novos_clientes,
                    clientes_recorrentes,
                    whatsapp_capturados,
                    emails_capturados
                `)
                .eq("loja_id", lojaId)
                .single();

        });

    }

}

export default new DashboardService();
