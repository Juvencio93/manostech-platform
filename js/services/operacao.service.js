// js/services/operacao.service.js

import { supabase } from "../core/supabase.js";

class OperacaoService {

    async buscar(id) {

        const { data, error } = await supabase
            .from("vw_operacoes")
            .select("*")
            .eq("id", id)
            .single();

        if (error) throw error;

        return data;

    }

    async buscarPorToken(token) {

        const { data, error } = await supabase
            .from("vw_operacoes")
            .select("*")
            .eq("token", token)
            .single();

        if (error) throw error;

        return data;

    }

    async listarEmpresa(empresaId) {

        const { data, error } = await supabase
            .from("vw_operacoes")
            .select("*")
            .eq("empresa_id", empresaId)
            .order("nome");

        if (error) throw error;

        return data || [];

    }

    async listarUnidade(unidadeId) {

        const { data, error } = await supabase
            .from("vw_operacoes")
            .select("*")
            .eq("unidade_id", unidadeId)
            .order("nome");

        if (error) throw error;

        return data || [];

    }

    async portal(id) {

        const { data, error } = await supabase
            .from("portal_config")
            .select("*")
            .eq("operacao_id", id)
            .single();

        if (error) throw error;

        return data;

    }

    async patrocinadores(id) {

        const { data, error } = await supabase
            .from("portal_patrocinadores")
            .select("*")
            .eq("operacao_id", id)
            .eq("ativo", true)
            .order("ordem");

        if (error) throw error;

        return data || [];

    }

    async banners(id) {

        const { data, error } = await supabase
            .from("portal_banners")
            .select("*")
            .eq("operacao_id", id)
            .eq("ativo", true)
            .order("ordem");

        if (error) throw error;

        return data || [];

    }

}

export default new OperacaoService();
