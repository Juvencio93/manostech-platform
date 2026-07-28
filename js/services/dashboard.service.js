// ======================================================
// Manos Tech Platform
// Dashboard Service
// ======================================================

import http from "../core/http.js";
import dashboardRepository from "../repositories/dashboard.repository.js";

class DashboardService {

    // ==================================================
    // Dashboard Geral
    // ==================================================

    async obterDashboard(operacaoId) {

        return await http.execute(() =>
            dashboardRepository.obterDashboard(
                operacaoId
            )
        );

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(operacaoId) {

        return await this.obterDashboard(
            operacaoId
        );

    }

    // ==================================================
    // KPIs
    // ==================================================

    async kpis(operacaoId) {

        const response = await this.obterDashboard(
            operacaoId
        );

        if (!response.success) {

            return response;

        }

        const dados = response.data;

        return {

            success: true,

            data: {

                visitantes: dados.visitantes,

                acessos: dados.acessos,

                campanhas: dados.campanhas,

                dispositivos: dados.dispositivos

            }

        };

    }

    // ==================================================
    // Portal
    // ==================================================

    async portal(operacaoId) {

        const response = await this.obterDashboard(
            operacaoId
        );

        if (!response.success) {

            return response;

        }

        return {

            success: true,

            data: response.data.portal

        };

    }

    // ==================================================
    // Cache
    // ==================================================

    async cache(operacaoId) {

        const response = await this.obterDashboard(
            operacaoId
        );

        if (!response.success) {

            return response;

        }

        return {

            success: true,

            data: response.data.cache

        };

    }

}

export default new DashboardService();
