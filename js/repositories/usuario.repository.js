// ======================================================
// Manos Tech Platform
// Usuario Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class UsuarioRepository extends BaseRepository {

    constructor() {

        super("usuarios");

    }

    // ==================================================
    // Buscar por E-mail
    // ==================================================

    async buscarPorEmail(email) {

        return await this.buscarUm("email", email);

    }

    // ==================================================
    // Buscar por CPF
    // ==================================================

    async buscarPorCpf(cpf) {

        return await this.buscarUm("cpf", cpf);

    }

    // ==================================================
    // Listar por Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return await this.buscarTodos(
            "empresa_id",
            empresaId,
            {
                orderBy: "nome",
                ascending: true
            }
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
                orderBy: "nome",
                ascending: true
            }
        );

    }

    // ==================================================
    // Listar Ativos
    // ==================================================

    async listarAtivos() {

        return await this.buscarTodos(
            "status",
            "ativo",
            {
                orderBy: "nome",
                ascending: true
            }
        );

    }

}

export default new UsuarioRepository();
