// ======================================================
// Manos Tech Platform
// Base Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

export default class BaseService {

    constructor(table) {

        this.table = table;

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar(orderBy = "created_at", ascending = true) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .select("*")
                .order(orderBy, { ascending });

        });

    }

    // ==================================================
    // Buscar por ID
    // ==================================================

    async buscar(id) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .select("*")
                .eq("id", id)
                .single();

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(data) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .insert(data)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, data) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .update(data)
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
                .from(this.table)
                .delete()
                .eq("id", id);

        });

    }

}
