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
    // Buscar Empresa
    // ==================================================

    async buscar(id) {

        return super.buscar(id);

    }

    // ==================================================
    // Buscar por CNPJ
    // ==================================================

    async buscarPorCnpj(cnpj) {

        return this.buscarUm("cnpj", cnpj);

    }

    // ==================================================
    // Listar Empresas Ativas
    // ==================================================

    async listarAtivas() {

        return this.buscarTodos(

            "status",

            "ativo",

            {

                orderBy: "nome",
                ascending: true

            }

        );

    }

    // ==================================================
    // Buscar Assinatura
    // ==================================================

    async assinatura(empresaId) {

        return api.execute(async () => {

            return await supabase
                .from("assinaturas")
                .select("*")
                .eq("empresa_id", empresaId)
                .single();

        });

    }

    // ==================================================
    // Buscar Módulos
    // ==================================================

    async modulos(empresaId) {

        return api.execute(async () => {

            return await supabase
                .from("empresa_modulos")
                .select(`
                    *,
                    modulos (
                        id,
                        nome,
                        codigo,
                        descricao
                    )
                `)
                .eq("empresa_id", empresaId)
                .eq("ativo", true);

        });

    }

    // ==================================================
    // Empresa Possui Módulo
    // ==================================================

    async possuiModulo(empresaId, codigoModulo) {

        return api.execute(async () => {

            return await supabase
                .from("empresa_modulos")
                .select(`
                    ativo,
                    modulos!inner (
                        codigo
                    )
                `)
                .eq("empresa_id", empresaId)
                .eq("ativo", true)
                .eq("modulos.codigo", codigoModulo)
                .maybeSingle();

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

    // ==================================================
    // Empresa Ativa
    // ==================================================

    async empresaAtiva(id) {

        const result = await this.buscar(id);

        if (!result.success) {

            return result;

        }

        return {

            success: true,

            data: result.data.status === "ativo",

            error: null

        };

    }

}

export default new EmpresaService();
