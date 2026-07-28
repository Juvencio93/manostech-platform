// ======================================================
// Manos Tech Platform
// Portal Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class PortalRepository extends BaseRepository {

    constructor() {

        super("portal_config");

    }

    // ==================================================
    // Buscar Portal da Operação
    // ==================================================

    async buscarPorOperacao(operacaoId) {

        return await this.buscarUm(
            "unidade_id",
            operacaoId
        );

    }

    // ==================================================
    // Buscar Portal Ativo
    // ==================================================

    async buscarAtivo(operacaoId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("ativo", true)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Ativar Portal
    // ==================================================

    async ativar(operacaoId) {

        const { data, error } = await this
            .query()
            .update({
                ativo: true,
                updated_at: new Date().toISOString()
            })
            .eq("unidade_id", operacaoId)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Desativar Portal
    // ==================================================

    async desativar(operacaoId) {

        const { data, error } = await this
            .query()
            .update({
                ativo: false,
                updated_at: new Date().toISOString()
            })
            .eq("unidade_id", operacaoId)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Atualizar Layout
    // ==================================================

    async atualizarLayout(operacaoId, dados) {

        const { data, error } = await this
            .query()
            .update({
                ...dados,
                updated_at: new Date().toISOString()
            })
            .eq("unidade_id", operacaoId)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

}

export default new PortalRepository();
