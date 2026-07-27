// ======================================================
// Manos Tech Platform
// Usuario Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class UsuarioService extends BaseService {

    constructor() {

        super("usuarios");

    }

    // ==================================================
    // Usuário Logado
    // ==================================================

    async me() {

        return api.execute(async () => {

            const { data, error } = await supabase.auth.getUser();

            if (error) throw error;

            if (!data.user) {
                throw new Error("Usuário não autenticado.");
            }

            return await this
                .query()
                .select(`
                    *,
                    empresas (
                        id,
                        nome,
                        cnpj,
                        status
                    ),
                    unidades (
                        id,
                        nome,
                        status
                    )
                `)
                .eq("auth_user_id", data.user.id)
                .single();

        });

    }

    // ==================================================
    // Buscar por Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return this.buscarTodos(

            "empresa_id",

            empresaId,

            {

                orderBy: "nome",
                ascending: true

            }

        );

    }

    // ==================================================
    // Buscar por Unidade
    // ==================================================

    async listarPorUnidade(unidadeId) {

        return this.buscarTodos(

            "unidade_id",

            unidadeId,

            {

                orderBy: "nome",
                ascending: true

            }

        );

    }

    // ==================================================
    // Buscar por Email
    // ==================================================

    async buscarPorEmail(email) {

        return this.buscarUm("email", email);

    }

    // ==================================================
    // Buscar por CPF
    // ==================================================

    async buscarPorCpf(cpf) {

        return this.buscarUm("cpf", cpf);

    }

    // ==================================================
    // Buscar por Status
    // ==================================================

    async listarPorStatus(status) {

        return this.buscarTodos(

            "status",

            status,

            {

                orderBy: "nome",
                ascending: true

            }

        );

    }

    // ==================================================
    // Ativar Usuário
    // ==================================================

    async ativar(id) {

        return this.atualizar(id, {

            status: "ativo"

        });

    }

    // ==================================================
    // Desativar Usuário
    // ==================================================

    async desativar(id) {

        return this.atualizar(id, {

            status: "inativo"

        });

    }

    // ==================================================
    // Alterar Senha
    // ==================================================

    async alterarSenha(password) {

        return api.execute(async () => {

            return await supabase.auth.updateUser({

                password

            });

        });

    }

    // ==================================================
    // Atualizar Perfil
    // ==================================================

    async atualizarPerfil(id, dados) {

        return this.atualizar(id, dados);

    }

}

export default new UsuarioService();
