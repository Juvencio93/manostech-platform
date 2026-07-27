// ======================================================
// Manos Tech Platform
// Usuario Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class UsuarioService {

    // ==================================================
    // Usuário autenticado
    // ==================================================

    async me() {

        return api.execute(async () => {

            const { data: auth } = await supabase.auth.getUser();

            if (!auth.user) {

                throw new Error("Usuário não autenticado.");

            }

            return await supabase
                .from("usuarios")
                .select(`
                    *,
                    empresa:empresas(*),
                    unidade:unidades(*)
                `)
                .eq("auth_user_id", auth.user.id)
                .single();

        });

    }

    // ==================================================
    // Buscar por ID
    // ==================================================

    async buscar(id) {

        return api.execute(async () => {

            return await supabase
                .from("usuarios")
                .select("*")
                .eq("id", id)
                .single();

        });

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar() {

        return api.execute(async () => {

            return await supabase
                .from("usuarios")
                .select("*")
                .order("nome");

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(usuario) {

        return api.execute(async () => {

            return await supabase
                .from("usuarios")
                .insert(usuario)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, usuario) {

        return api.execute(async () => {

            return await supabase
                .from("usuarios")
                .update(usuario)
                .eq("id", id)
                .select()
                .single();

        });

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        return api.execute(async () => {

            return await supabase
                .from("usuarios")
                .delete()
                .eq("id", id);

        });

    }

}

export default new UsuarioService();
