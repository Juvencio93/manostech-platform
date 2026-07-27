// ======================================================
// Manos Tech Platform
// Usuario Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";
import usuarioRepository from "../repositories/usuario.repository.js";

class UsuarioService {

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

            return await usuarioRepository.buscarUm(
                "auth_user_id",
                data.user.id,
                `
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
                `
            );

        });

    }

    // ==================================================
    // Buscar
    // ==================================================

    async buscar(id) {

        return api.execute(async () => {

            return await usuarioRepository.buscar(id);

        });

    }

    // ==================================================
    // Buscar por Email
    // ==================================================

    async buscarPorEmail(email) {

        return api.execute(async () => {

            return await usuarioRepository.buscarPorEmail(email);

        });

    }

    // ==================================================
    // Buscar por CPF
    // ==================================================

    async buscarPorCpf(cpf) {

        return api.execute(async () => {

            return await usuarioRepository.buscarPorCpf(cpf);

        });

    }

    // ==================================================
    // Listar Empresa
    // ==================================================

    async listarPorEmpresa(empresaId) {

        return api.execute(async () => {

            return await usuarioRepository.listarPorEmpresa(empresaId);

        });

    }

    // ==================================================
    // Listar Unidade
    // ==================================================

    async listarPorUnidade(unidadeId) {

        return api.execute(async () => {

            return await usuarioRepository.listarPorUnidade(unidadeId);

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        return api.execute(async () => {

            return await usuarioRepository.criar(dados);

        });

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        return api.execute(async () => {

            return await usuarioRepository.atualizar(id, dados);

        });

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        return api.execute(async () => {

            return await usuarioRepository.excluir(id);

        });

    }

    // ==================================================
    // Alterar Senha
    // ==================================================

    async alterarSenha(password) {

        return api.execute(async () => {

            const { data, error } = await supabase.auth.updateUser({
                password
            });

            if (error) throw error;

            return data;

        });

    }

}

export default new UsuarioService();
