// ======================================================
// Manos Tech Platform
// Base Repository
// ======================================================

import { supabase } from "../core/supabase-client.js";

class BaseRepository {

    constructor(table) {

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

        ascending = false

    } = {}) {

        const { data, error } = await this
            .query()
            .select(select)
            .order(orderBy, {
                ascending
            });

        if (error) throw error;

        return data;

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
    // Buscar Um Campo
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
    // Upsert
    // ==================================================

    async salvar(dados) {

        const { data, error } = await this
            .query()
            .upsert(dados)
            .select();

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

        return await this.atualizar(id, {

            ativo: false

        });

    }

    // ==================================================
    // Ativar
    // ==================================================

    async ativar(id) {

        return await this.atualizar(id, {

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

    async contar() {

        const { count, error } = await this
            .query()
            .select("id", {

                head: true,

                count: "exact"

            });

        if (error) throw error;

        return count;

    }

    // ==================================================
    // Paginação
    // ==================================================

    async paginar({

        pagina = 1,

        limite = 20,

        orderBy = "created_at",

        ascending = false,

        select = "*"

    } = {}) {

        const inicio = (pagina - 1) * limite;

        const fim = inicio + limite - 1;

        const { data, error, count } = await this
            .query()
            .select(select, {

                count: "exact"

            })
            .order(orderBy, {

                ascending

            })
            .range(inicio, fim);

        if (error) throw error;

        return {

            dados: data,

            total: count,

            pagina,

            limite,

            paginas: Math.ceil(count / limite)

        };

    }

    // ==================================================
    // Busca Texto
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
    // Filtro Dinâmico
    // ==================================================

    async filtrar(filtros = {}, options = {}) {

        let query = this.query().select(
            options.select || "*"
        );

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
                    ascending:
                        options.ascending ?? false
                }
            );

        }

        const { data, error } = await query;

        if (error) throw error;

        return data;

    }

}

export default BaseRepository;
