// ======================================================
// Manos Tech Platform
// Dashboard Repository
// ======================================================

import { supabase } from "../core/supabase-client.js";

class DashboardRepository {

    // ==================================================
    // Dashboard Geral
    // ==================================================

    async obterDashboard(operacaoId) {

        const [

            cache,

            visitantes,

            campanhas,

            acessos,

            dispositivos,

            portal

        ] = await Promise.all([

            this.cache(operacaoId),

            this.visitantes(operacaoId),

            this.campanhas(operacaoId),

            this.acessos(operacaoId),

            this.dispositivos(operacaoId),

            this.portal(operacaoId)

        ]);

        return {

            cache,

            visitantes,

            campanhas,

            acessos,

            dispositivos,

            portal,

            atualizadoEm: new Date().toISOString()

        };

    }

    // ==================================================
    // Cache
    // ==================================================

    async cache(operacaoId) {

        const { data } = await supabase

            .from("dashboard_cache")

            .select("*")

            .eq("unidade_id", operacaoId)

            .maybeSingle();

        return data;

    }

    // ==================================================
    // Visitantes
    // ==================================================

    async visitantes(operacaoId) {

        const { count } = await supabase

            .from("visitantes")

            .select("id", {

                head: true,

                count: "exact"

            })

            .eq("unidade_id", operacaoId)

            .eq("ativo", true);

        return count || 0;

    }

    // ==================================================
    // Campanhas
    // ==================================================

    async campanhas(operacaoId) {

        const { count } = await supabase

            .from("campanhas")

            .select("id", {

                head: true,

                count: "exact"

            })

            .eq("unidade_id", operacaoId)

            .eq("ativo", true);

        return count || 0;

    }

    // ==================================================
    // Acessos
    // ==================================================

    async acessos(operacaoId) {

        const { count } = await supabase

            .from("acessos")

            .select("id", {

                head: true,

                count: "exact"

            })

            .eq("unidade_id", operacaoId);

        return count || 0;

    }

    // ==================================================
    // Dispositivos
    // ==================================================

    async dispositivos(operacaoId) {

        const { count } = await supabase

            .from("dispositivos")

            .select("id", {

                head: true,

                count: "exact"

            })

            .eq("unidade_id", operacaoId);

        return count || 0;

    }

    // ==================================================
    // Portal
    // ==================================================

    async portal(operacaoId) {

        const { data } = await supabase

            .from("portal_config")

            .select("*")

            .eq("unidade_id", operacaoId)

            .maybeSingle();

        return data;

    }

}

export default new DashboardRepository();
