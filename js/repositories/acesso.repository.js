// ======================================================
// Manos Tech Platform
// Acesso Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class AcessoRepository extends BaseRepository {

    constructor() {

        super("acessos");

    }

    // ==================================================
    // Listar por Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        const { data, error } = await this
            .query()
            .select(`
                *,
                visitantes (
                    id,
                    nome,
                    whatsapp,
                    email
                )
            `)
            .eq("unidade_id", operacaoId)
            .order("entrada", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Listar por Visitante
    // ==================================================

    async listarPorVisitante(visitanteId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("visitante_id", visitanteId)
            .order("entrada", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Último Acesso
    // ==================================================

    async ultimoAcesso(visitanteId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("visitante_id", visitanteId)
            .order("entrada", {
                ascending: false
            })
            .limit(1)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Registrar Entrada
    // ==================================================

    async registrarEntrada(dados) {

        return await this.criar({

            ...dados,

            entrada: new Date().toISOString()

        });

    }

    // ==================================================
    // Registrar Saída
    // ==================================================

    async registrarSaida(id) {

        const saida = new Date();

        const acesso = await this.buscar(id);

        let tempo = null;

        if (acesso?.entrada) {

            tempo = Math.floor(

                (saida - new Date(acesso.entrada)) / 1000

            );

        }

        return await this.atualizar(id, {

            saida: saida.toISOString(),

            tempo_conectado: tempo

        });

    }

    // ==================================================
    // Conectados Agora
    // ==================================================

    async conectadosAgora(operacaoId) {

        const { count, error } = await this
            .query()
            .select("id", {
                count: "exact",
                head: true
            })
            .eq("unidade_id", operacaoId)
            .is("saida", null);

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Total Hoje
    // ==================================================

    async totalHoje(operacaoId) {

        const hoje = new Date().toISOString().substring(0, 10);

        const { count, error } = await this
            .query()
            .select("id", {
                count: "exact",
                head: true
            })
            .eq("unidade_id", operacaoId)
            .gte("entrada", `${hoje}T00:00:00`);

        if (error) throw error;

        return count;

    }

}

export default new AcessoRepository();
