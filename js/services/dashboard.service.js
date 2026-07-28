// ======================================================
// Manos Tech Platform
// Dashboard Service
// ======================================================

import api from "../core/api.js";
import dashboardRepository from "../repositories/dashboard.repository.js";

class DashboardService {

    async cache(operacaoId) {

        return api.execute(async () => {

            return await dashboardRepository.cache(
                operacaoId
            );

        });

    }

    async atualizarCache(operacaoId, dados) {

        return api.execute(async () => {

            return await dashboardRepository.atualizarCache(
                operacaoId,
                dados
            );

        });

    }

    async periodoAtivo(operacaoId) {

        return api.execute(async () => {

            return await dashboardRepository.periodoAtivo(
                operacaoId
            );

        });

    }

    async fluxoDiario(operacaoId) {

        return api.execute(async () => {

            return await dashboardRepository.fluxoDiario(
                operacaoId
            );

        });

    }

    async acessosPorHora(operacaoId) {

        return api.execute(async () => {

            return await dashboardRepository.acessosPorHora(
                operacaoId
            );

        });

    }

    async clientesFrequentes(operacaoId) {

        return api.execute(async () => {

            return await dashboardRepository.clientesFrequentes(
                operacaoId
            );

        });

    }

    async picoMovimento(operacaoId) {

        return api.execute(async () => {

            return await dashboardRepository.picoMovimento(
                operacaoId
            );

        });

    }

}

export default new DashboardService();
