// ======================================================
// Manos Tech Platform
// Unidade Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class UnidadeService extends BaseService {

    constructor() {

        super("unidades");

    }

    // ==================================================
    // Buscar Unidade
    // ==================================================

    async buscar(id) {

        return super.buscar(id);

    }

    // ==================================================
    // Listar por Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return this.buscarTodos(

            "empresa_id",

            empresaId,

            {

                orderBy: "nome",
                ascending: true

            }

        );

    }

    // ==================================================
    // Buscar Unidade Principal
    // ==================================================

    async principal(empresaId) {

        return this.buscarUm(

            "empresa_id",

            empresaId

        );

    }

    // ==================================================
    // Configurações da Unidade
    // ==================================================

    async configuracoes(unidadeId) {

        return api.execute(async () => {

            return await supabase
                .from("configuracoes")
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

        });

    }

    // ==================================================
    // Portal Config
    // ==================================================

    async portal(unidadeId) {

        return api.execute(async () => {

            return await supabase
                .from("portal_config")
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

        });

    }

    // ==================================================
    // Dashboard Cache
    // ==================================================

    async dashboard(unidadeId) {

        return api.execute(async () => {

            return await supabase
                .from("dashboard_cache")
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

        });

    }

    // ==================================================
    // Arquivos
    // ==================================================

    async arquivos(unidadeId) {

        return api.execute(async () => {

            return await supabase
                .from("arquivos")
                .select("*")
                .eq("unidade_id", unidadeId)
                .order("created_at", {

                    ascending: false

                });

        });

    }

    // ==================================================
    // Campanhas
    // ==================================================

    async campanhas(unidadeId) {

        return api.execute(async () => {

            return await supabase
                .from("campanhas")
                .select("*")
                .eq("unidade_id", unidadeId)
                .eq("ativo", true)
                .order("ordem");

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
    // Alterar Status
    // ==================================================

    async alterarStatus(id, status) {

        return this.atualizar(id, {

            status

        });

    }

}

export default new UnidadeService();
