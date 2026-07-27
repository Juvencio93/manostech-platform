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
    // Buscar por CNPJ
    // ==================================================

    async buscarPorCnpj(cnpj) {

        return await this.buscarUm("cnpj", cnpj);

    }

    // ==================================================
    // Empresas Ativas
    // ==================================================

    async listarAtivas() {

        return await this.buscarTodos(
            "status",
            "ativo",
            {
                orderBy: "nome",
                ascending: true
            }
        );

    }

    // ==================================================
    // Buscar por Nome
    // ==================================================

    async buscarPorNome(nome) {

        return await this.query()
            .select("*")
            .ilike("nome", `%${nome}%`)
            .order("nome");

    }

}

export default new EmpresaRepository();
