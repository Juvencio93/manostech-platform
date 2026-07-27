// ======================================================
// Manos Tech Platform
// Unidade Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";

class UnidadeService extends BaseService {

    constructor() {

        super("unidades");

    }

    // ==================================================
    // Buscar por Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("empresa_id", empresaId)
                .order("nome");

        });

    }

    // ==================================================
    // Buscar Unidade Principal
    // ==================================================

    async buscarPrincipal(empresaId) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("empresa_id", empresaId)
                .eq("principal", true)
                .single();

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

    // ==================================================
    // Atualizar Logo
    // ==================================================

    async atualizarLogo(id, logoUrl) {

        return this.atualizar(id, {

            logo_url: logoUrl

        });

    }

}

export default new UnidadeService();
