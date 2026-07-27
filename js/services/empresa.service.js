// ======================================================
// Manos Tech Platform
// Empresa Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class EmpresaService extends BaseService {

    constructor() {

        super("empresas");

    }

    // ==================================================
    // Buscar por Slug
    // ==================================================

    async buscarPorSlug(slug) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .select("*")
                .eq("slug", slug)
                .single();

        });

    }

    // ==================================================
    // Buscar por CNPJ
    // ==================================================

    async buscarPorCnpj(cnpj) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .select("*")
                .eq("cnpj", cnpj)
                .single();

        });

    }

    // ==================================================
    // Empresas Ativas
    // ==================================================

    async listarAtivas() {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .select("*")
                .eq("status", "ativo")
                .order("nome");

        });

    }

    // ==================================================
    // Atualizar Logo
    // ==================================================

    async atualizarLogo(id, logo_url) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .update({

                    logo_url

                })
                .eq("id", id)
                .select()
                .single();

        });

    }

}

export default new EmpresaService();
