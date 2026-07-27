// ======================================================
// Manos Tech Platform
// Empresa Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";

class EmpresaService extends BaseService {

    constructor() {

        super("empresas");

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
    // Empresas Ativas
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
    // Empresas Inativas
    // ==================================================

    async listarInativas() {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("status", "inativo")
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
    // Atualizar Configurações
    // ==================================================

    async atualizarConfiguracoes(id, configuracoes) {

        return this.atualizar(id, {

            configuracoes

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

export default new EmpresaService();
