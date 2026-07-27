// ======================================================
// Manos Tech Platform
// Base Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

export default class BaseService {

    constructor(table) {

        if (!table) {
            throw new Error("A tabela deve ser informada.");
        }

        this.table = table;

    }

    // ==================================================
    // Query Base
    // ==================================================

    query() {

        return supabase.from(this.table);

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar({
        select = "*",
        orderBy = "created_at",
        ascending = true
    } = {}) {

        return api.execute(async () => {

            return await this
                .query()
                .select(select)
                .order(orderBy, { ascending });

        });

    }

    // ==================================================
    // Buscar por ID
    // ==================================================

    async buscar(id, select = "*") {

        return api.execute(async () => {

            return await this
                .query()
                .select(select)
                .eq("id", id)
                .single();

        });

    }

    // ==================================================
    // Buscar Um
    // ==================================================

    async buscarUm(column, value, select = "*") {

        return api.execute(async () => {

            return await this
                .query()
                .select(select)
                .eq(column, value)
                .single();

        });

    }

    // ==================================================
    // Buscar Vários
    // ==================================================

    async buscarTodos(column, value, select = "*") {

        return api.execute(async () => {

            return await this
                .query()
                .select(select)
                .eq(column, value);

        });

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(data) {

        return api.execute(async () => {

            return await this
                .query()
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

            return await this
                .query()
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

            return await this
                .query()
                .delete()
                .eq("id", id);

        });

    }

    // ==================================================
    // Contar
    // ==================================================

    async contar(column = "*") {

        return api.execute(async () => {

            return await this
                .query()
                .select(column, {
                    count: "exact",
                    head: true
                });

        });

    }

    // ==================================================
    // Existe?
    // ==================================================

    async existe(column, value) {

        const result = await api.execute(async () => {

            return await this
                .query()
                .select("id")
                .eq(column, value)
                .limit(1);

        });

        if (!result.success) {

            return result;

        }

        return {

            success: true,

            data: result.data.length > 0,

            error: null

        };

    }

}
