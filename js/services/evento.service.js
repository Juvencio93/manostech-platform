// ======================================================
// Manos Tech Platform
// Evento Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";

class EventoService extends BaseService {

    constructor() {

        super("eventos");

    }

    // ==================================================
    // Eventos da Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("empresa_id", empresaId)
                .order("data_inicio", { ascending: false });

        });

    }

    // ==================================================
    // Eventos Ativos
    // ==================================================

    async listarAtivos(empresaId) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("empresa_id", empresaId)
                .eq("status", "ativo")
                .order("data_inicio", { ascending: false });

        });

    }

    // ==================================================
    // Buscar por Slug
    // ==================================================

    async buscarPorSlug(slug) {

        return this.buscarUm("slug", slug);

    }

    // ==================================================
    // Buscar Evento Atual
    // ==================================================

    async buscarAtual(empresaId) {

        return api.execute(async () => {

            const hoje = new Date().toISOString();

            return await this
                .query()
                .select("*")
                .eq("empresa_id", empresaId)
                .lte("data_inicio", hoje)
                .gte("data_fim", hoje)
                .single();

        });

    }

    // ==================================================
    // Encerrar Evento
    // ==================================================

    async encerrar(id) {

        return this.atualizar(id, {

            status: "encerrado"

        });

    }

    // ==================================================
    // Cancelar Evento
    // ==================================================

    async cancelar(id) {

        return this.atualizar(id, {

            status: "cancelado"

        });

    }

    // ==================================================
    // Publicar Evento
    // ==================================================

    async publicar(id) {

        return this.atualizar(id, {

            status: "ativo"

        });

    }

    // ==================================================
    // Atualizar Banner
    // ==================================================

    async atualizarBanner(id, bannerUrl) {

        return this.atualizar(id, {

            banner_principal: bannerUrl

        });

    }

    // ==================================================
    // Atualizar Logo
    // ==================================================

    async atualizarLogo(id, logoUrl) {

        return this.atualizar(id, {

            logo_url: logoUrl

        });

    }

}

export default new EventoService();
