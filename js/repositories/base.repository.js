// ======================================================
// Manos Tech Platform
// Base Repository
// ======================================================

import { supabase } from "../core/supabase-client.js";

class BaseRepository {

    constructor(table) {

        this.table = table;

        // Instância compartilhada do Supabase
        this.supabase = supabase;

    }

    // ==================================================
    // Query Base
    // ==================================================

    query() {

        return this.supabase.from(this.table);

    }

    // ==================================================
    // Buscar por ID
    // ==================================================

    async buscar(id, select = "*") {

        const { data, error } = await this
            .query()
            .select(select)
            .eq("id", id)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar Um
    // ==================================================

    async buscarUm(campo, valor, select = "*") {

        const { data, error } = await this
            .query()
            .select(select)
            .eq(campo, valor)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Buscar Vários
    // ==================================================

    async buscarPor(campo, valor, select = "*") {

        const { data, error } = await this
            .query()
            .select(select)
            .eq(campo, valor);

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Listar
    // ==================================================

    async listar({

        select = "*",

        orderBy = "created_at",

        ascending = false

    } = {}) {

        const { data, error } = await this
            .query()
            .select(select)
            .order(orderBy, { ascending });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Criar
    // ==================================================

    async criar(dados) {

        const { data, error } = await this
            .query()
            .insert(dados)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Atualizar
    // ==================================================

    async atualizar(id, dados) {

        const { data, error } = await this
            .query()
            .update({

                ...dados,

                updated_at: new Date().toISOString()

            })
            .eq("id", id)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluir(id) {

        const { error } = await this
            .query()
            .delete()
            .eq("id", id);

        if (error) throw error;

        return true;

    }

    // ==================================================
    // Soft Delete
    // ==================================================

    async desativar(id) {

        return this.atualizar(id, {

            ativo: false

        });

    }

    async ativar(id) {

        return this.atualizar(id, {

            ativo: true

        });

    }

    // ==================================================
    // Existe
    // ==================================================

    async existe(campo, valor) {

        const { count, error } = await this
            .query()
            .select("id", {

                head: true,

                count: "exact"

            })
            .eq(campo, valor);

        if (error) throw error;

        return count > 0;

    }

    // ==================================================
    // Contar
    // ==================================================

    async contar(filtros = {}) {

        let query = this
            .query()
            .select("id", {

                head: true,

                count: "exact"

            });

        Object.entries(filtros).forEach(([campo, valor]) => {

            if (
                valor !== undefined &&
                valor !== null &&
                valor !== ""
            ) {

                query = query.eq(campo, valor);

            }

        });

        const { count, error } = await query;

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Pesquisa
    // ==================================================

    async pesquisar(campo, texto) {

        const { data, error } = await this
            .query()
            .select("*")
            .ilike(campo, `%${texto}%`);

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Filtros
    // ==================================================

    async filtrar(filtros = {}, options = {}) {

        let query = this.query().select(options.select || "*");

        Object.entries(filtros).forEach(([campo, valor]) => {

            if (
                valor !== undefined &&
                valor !== null &&
                valor !== ""
            ) {

                query = query.eq(campo, valor);

            }

        });

        if (options.orderBy) {

            query = query.order(

                options.orderBy,

                {

                    ascending: options.ascending ?? true

                }

            );

        }

        const { data, error } = await query;

        if (error) throw error;

        return data;

    }

}

export default BaseRepository;
