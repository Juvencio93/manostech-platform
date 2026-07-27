// ======================================================
// Manos Tech Platform
// Loja Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";

class LojaService extends BaseService {

    constructor() {

        super("lojas");

    }

    // ==================================================
    // Buscar por Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return this.buscarTodos("empresa_id", empresaId);

    }

    // ==================================================
    // Buscar por Slug
    // ==================================================

    async buscarPorSlug(slug) {

        return this.buscarUm("slug", slug);

    }

    // ==================================================
    // Buscar por CNPJ
    // ==================================================

    async buscarPorCnpj(cnpj) {

        return this.buscarUm("cnpj", cnpj);

    }

    // ==================================================
    // Buscar Lojas Ativas
    // ==================================================

    async listarAtivas() {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("status", "ativo")
                .order("nome");

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

    // ==================================================
    // Atualizar Banner Principal
    // ==================================================

    async atualizarBanner(id, bannerUrl) {

        return this.atualizar(id, {

            banner_principal: bannerUrl

        });

    }

    // ==================================================
    // Atualizar Link de Redirecionamento
    // ==================================================

    async atualizarLink(id, link) {

        return this.atualizar(id, {

            link_redirecionamento: link

        });

    }

    // ==================================================
    // Atualizar Plano
    // ==================================================

    async atualizarPlano(id, plano, vencimento, valorMensalidade) {

        return this.atualizar(id, {

            plano,
            vencimento,
            valor_mensalidade: valorMensalidade

        });

    }

    // ==================================================
    // Alterar Status
    // ==================================================

    async alterarStatus(id, status) {

        return this.atualizar(id, {

            status

        });

    }

}

export default new LojaService();
