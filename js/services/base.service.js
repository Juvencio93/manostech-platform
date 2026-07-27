// ======================================================
// Manos Tech Platform
// Base Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

export default class BaseService {

    constructor(table) {

        if (!table) {
            throw new Error("Tabela não informada.");
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
        ascending = false,
        limit = null
    } = {}) {

        return api.execute(async () => {

            let query = this
                .query()
                .select(select)
                .order(orderBy, { ascending });

            if (limit) {
                query = query.limit(limit);
            }

            return await query;

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
    // Buscar Primeiro
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
    // Buscar Todos
    // ==================================================

    async buscarTodos(column, value, {
        select = "*",
        orderBy = "created_at",
        ascending = false
    } = {}) {

        return api.execute(async () => {

            return await this
                .query()
                .select(select)
                .eq(column, value)
                .order(orderBy, { ascending });

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
    // Atualizar por Campo
    // ==================================================

    async atualizarPor(column, value, data) {

        return api.execute(async () => {

            return await this
                .query()
                .update(data)
                .eq(column, value)
                .select();

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

    async contar(column = "id") {

        return api.execute(async () => {

            return await this
                .query()
                .select(column, {
                    head: true,
                    count: "exact"
                });

        });

    }

    // ==================================================
    // Contar por Campo
    // ==================================================

    async contarPor(column, value) {

        return api.execute(async () => {

            return await this
                .query()
                .select("id", {
                    head: true,
                    count: "exact"
                })
                .eq(column, value);

        });

    }

    // ==================================================
    // Existe
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
