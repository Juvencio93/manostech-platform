// ======================================================
// Manos Tech Platform
// Empresa Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

import empresaRepository from "../repositories/empresa.repository.js";

class EmpresaService {

    // ==================================================
    // Buscar
    // ==================================================

    async buscar(id) {

        return api.execute(async () => {

            return await empresaRepository.buscar(id);

        });

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar() {

        return api.execute(async () => {

            return await empresaRepository.listar();

        });

    }

    // ==================================================
    // Buscar por CNPJ
    // ==================================================

    async buscarPorCnpj(cnpj) {

        return api.execute(async () => {

            return await empresaRepository.buscarPorCnpj(cnpj);

        });

    }

    // ==================================================
    // Empresas Ativas
    // ==================================================

    async listarAtivas() {

        return api.execute(async () => {

            return await empresaRepository.listarAtivas();

        });

    }

    // ==================================================
    // Buscar Assinatura
    // ==================================================

    async assinatura(empresaId) {

        return api.execute(async () => {

            const { data, error } = await supabase
                .from("assinaturas")
                .select("*")
                .eq("empresa_id", empresaId)
                .single();

            if (error) throw error;

            return data;

        });

    }

    // ==================================================
    // Buscar Módulos
    // ==================================================

    async modulos(empresaId) {

        return api.execute(async () => {

            const { data, error } = await supabase
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

            if (error) throw error;

            return data;

        });

    }

    // ==================================================
    // Possui Módulo
    // ==================================================

    async possuiModulo(empresaId, codigo) {

        return api.execute(async () => {

            const { data, error } = await supabase
                .from("empresa_modulos")
                .select(`
                    ativo,
                    modulos!inner (
                        codigo
                    )
                `)
                .eq("empresa_id", empresaId)
                .eq("ativo", true)
                .eq("modulos.codigo", codigo)
                .maybeSingle();

            if (error) throw error;

            return !!data;

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        return api.execute(async () => {

            return await empresaRepository.criar(dados);

        });

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await empresaRepository.atualizar(id, dados);

        });

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        return api.execute(async () => {

            return await empresaRepository.excluir(id);

        });

    }

}

export default new EmpresaService();
