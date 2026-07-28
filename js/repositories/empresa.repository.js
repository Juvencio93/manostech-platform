// ======================================================
// Manos Tech Platform
// Empresa Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class EmpresaRepository extends BaseRepository {

    constructor() {

        super("empresas");

    }

    // ==================================================
    // Empresas Ativas
    // ==================================================

    async listarAtivas() {

        return await this.filtrar(
            { ativo: true },
            {
                orderBy: "nome_fantasia",
                ascending: true
            }
        );

    }

    // ==================================================
    // Buscar por CNPJ
    // ==================================================

    async buscarPorCnpj(cnpj) {

        return await this.buscarUm(
            "cnpj",
            cnpj
        );

    }

    // ==================================================
    // Buscar Completa
    // ==================================================

    async buscarCompleta(id) {

        const { data, error } = await this
            .query()
            .select(`
                *,
                unidades(
                    id,
                    nome,
                    tipo,
                    ativo
                ),
                usuarios(
                    id,
                    nome,
                    email,
                    nivel,
                    ativo
                )
            `)
            .eq("id", id)
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Total de Operações
    // ==================================================

    async totalOperacoes(id) {

        const { count, error } = await this.supabase
            .from("unidades")
            .select("id", {
                head: true,
                count: "exact"
            })
            .eq("empresa_id", id);

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(id) {

        const empresa = await this.buscar(id);

        const operacoes = await this.totalOperacoes(id);

        return {

            empresa,

            operacoes

        };

    }

}

export default new EmpresaRepository();
