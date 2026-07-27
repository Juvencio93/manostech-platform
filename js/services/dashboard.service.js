// ======================================================
// Manos Tech Platform
// Dashboard Service
// ======================================================

import api from "../core/api.js";

class DashboardService {

    constructor() {

        this.view = "vw_dashboard";

    }

    // ==================================================
    // Dashboard da Loja
    // ==================================================

    async loja(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from(this.view)
                .select("*")
                .eq("loja_id", lojaId)
                .single();

        });

    }

    // ==================================================
    // Dashboard do Evento
    // ==================================================

    async evento(eventoId) {

        return api.execute(async () => {

            return await supabase
                .from(this.view)
                .select("*")
                .eq("evento_id", eventoId)
                .single();

        });

    }

    // ==================================================
    // Total de Visitantes
    // ==================================================

    async totalVisitantes(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from("visitantes")
                .select("id", {

                    count: "exact",
                    head: true

                })
                .eq("loja_id", lojaId);

        });

    }

    // ==================================================
    // Conectados Agora
    // ==================================================

    async conectadosAgora(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from("visitantes")
                .select("id", {

                    count: "exact",
                    head: true

                })
                .eq("loja_id", lojaId)
                .eq("online", true);

        });

    }

    // ==================================================
    // Novos Clientes
    // ==================================================

    async novosClientes(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from("visitantes")
                .select("id", {

                    count: "exact",
                    head: true

                })
                .eq("loja_id", lojaId)
                .eq("primeira_visita", true);

        });

    }

    // ==================================================
    // Clientes Recorrentes
    // ==================================================

    async recorrentes(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from("visitantes")
                .select("id", {

                    count: "exact",
                    head: true

                })
                .eq("loja_id", lojaId)
                .gt("total_visitas", 1);

        });

    }

    // ==================================================
    // Acessos por Hora
    // ==================================================

    async acessosPorHora(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from("vw_acessos_hora")
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
                .from("vw_acessos_dia")
                .select("*")
                .eq("loja_id", lojaId)
                .order("data");

        });

    }

    // ==================================================
    // Ranking de Visitantes
    // ==================================================

    async ranking(lojaId) {

        return api.execute(async () => {

            return await supabase
                .from("vw_ranking_visitantes")
                .select("*")
                .eq("loja_id", lojaId)
                .limit(20);

        });

    }

}

export default new DashboardService();
