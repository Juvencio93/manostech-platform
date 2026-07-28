// ======================================================
// Manos Tech Platform
// Unidade Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

import unidadeRepository from "../repositories/unidade.repository.js";

class UnidadeService {

    // ==================================================
    // Buscar
    // ==================================================

    async buscar(id) {

        return api.execute(async () => {

            return await unidadeRepository.buscar(id);

        });

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar() {

        return api.execute(async () => {

            return await unidadeRepository.listar();

        });

    }

    // ==================================================
    // Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return api.execute(async () => {

            return await unidadeRepository.listarPorEmpresa(empresaId);

        });

    }

    // ==================================================
    // Ativas
    // ==================================================

    async listarAtivas(empresaId) {

        return api.execute(async () => {

            return await unidadeRepository.listarAtivas(empresaId);

        });

    }

    // ==================================================
    // Principal
    // ==================================================

    async principal(empresaId) {

        return api.execute(async () => {

            return await unidadeRepository.principal(empresaId);

        });

    }

    // ==================================================
    // Configurações
    // ==================================================

    async configuracoes(unidadeId) {

        return api.execute(async () => {

            const { data, error } = await supabase
                .from("configuracoes")
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

            if (error) throw error;

            return data;

        });

    }

    // ==================================================
    // Portal
    // ==================================================

    async portal(unidadeId) {

        return api.execute(async () => {

            const { data, error } = await supabase
                .from("portal_config")
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

            if (error) throw error;

            return data;

        });

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(unidadeId) {

        return api.execute(async () => {

            const { data, error } = await supabase
                .from("dashboard_cache")
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

            if (error) throw error;

            return data;

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        return api.execute(async () => {

            return await unidadeRepository.criar(dados);

        });

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await unidadeRepository.atualizar(id, dados);

        });

    }

    // ==================================================
    // Alterar Status
    // ==================================================

    async alterarStatus(id, status) {

        return api.execute(async () => {

            return await unidadeRepository.alterarStatus(id, status);

        });

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        return api.execute(async () => {

            return await unidadeRepository.excluir(id);

        });

    }

}

export default new UnidadeService();
