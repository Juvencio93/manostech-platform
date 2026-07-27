// ======================================================
// Manos Tech Platform
// Visitante Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class VisitanteRepository extends BaseRepository {

    constructor() {

        super("visitantes");

    }

    // ==================================================
    // Buscar por Documento
    // ==================================================

    async buscarPorDocumento(documento) {

        return await this.buscarUm(
            "documento",
            documento
        );

    }

    // ==================================================
    // Buscar por Telefone
    // ==================================================

    async buscarPorTelefone(telefone) {

        return await this.buscarUm(
            "telefone",
            telefone
        );

    }

    // ==================================================
    // Buscar por Email
    // ==================================================

    async buscarPorEmail(email) {

        return await this.buscarUm(
            "email",
            email
        );

    }

    // ==================================================
    // Listar por Unidade
    // ==================================================

    async listarPorUnidade(unidadeId) {

        return await this.buscarTodos(
            "unidade_id",
            unidadeId,
            {
                orderBy: "created_at",
                ascending: false
            }
        );

    }

    // ==================================================
    // Buscar por Nome
    // ==================================================

    async buscarPorNome(unidadeId, nome) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", unidadeId)
            .ilike("nome", `%${nome}%`)
            .order("nome");

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Total de Visitantes
    // ==================================================

    async total(unidadeId) {

        const { count, error } = await this
            .query()
            .select("id", {
                count: "exact",
                head: true
            })
            .eq("unidade_id", unidadeId);

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Novos Hoje
    // ==================================================

    async novosHoje(unidadeId) {

        const hoje = new Date().toISOString().substring(0, 10);

        const { count, error } = await this
            .query()
            .select("id", {
                count: "exact",
                head: true
            })
            .eq("unidade_id", unidadeId)
            .gte("created_at", `${hoje}T00:00:00`);

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Clientes Frequentes
    // ==================================================

    async clientesFrequentes(unidadeId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", unidadeId)
            .gte("total_visitas", 2)
            .order("total_visitas", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

}

export default new VisitanteRepository();
