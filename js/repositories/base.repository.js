// ======================================================
// Manos Tech Platform
// Base Repository
// ======================================================

import { supabase } from "../core/supabase-client.js";

export default class BaseRepository {

    constructor(table) {

        this.table = table;

    }

    query() {

        return supabase.from(this.table);

    }

    async listar({
        select = "*",
        orderBy = "created_at",
        ascending = false,
        limit = null
    } = {}) {

        let query = this
            .query()
            .select(select)
            .order(orderBy, { ascending });

        if (limit) {
            query = query.limit(limit);
        }

        const { data, error } = await query;

        if (error) throw error;

        return data;

    }

    async buscar(id, select = "*") {

        const { data, error } = await this
            .query()
            .select(select)
            .eq("id", id)
            .single();

        if (error) throw error;

        return data;

    }

    async buscarUm(coluna, valor, select = "*") {

        const { data, error } = await this
            .query()
            .select(select)
            .eq(coluna, valor)
            .single();

        if (error) throw error;

        return data;

    }

    async buscarTodos(coluna, valor, {
        select = "*",
        orderBy = "created_at",
        ascending = false
    } = {}) {

        const { data, error } = await this
            .query()
            .select(select)
            .eq(coluna, valor)
            .order(orderBy, { ascending });

        if (error) throw error;

        return data;

    }

    async criar(dados) {

        const { data, error } = await this
            .query()
            .insert(dados)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    async atualizar(id, dados) {

        const { data, error } = await this
            .query()
            .update(dados)
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    async excluir(id) {

        const { error } = await this
            .query()
            .delete()
            .eq("id", id);

        if (error) throw error;

        return true;

    }

    async contar(coluna = "id") {

        const { count, error } = await this
            .query()
            .select(coluna, {
                count: "exact",
                head: true
            });

        if (error) throw error;

        return count;

    }

}
