// ======================================================
// Manos Tech Platform
// API
// ======================================================

import { supabase } from "./supabase-client.js";

class Api {

    // ==================================================
    // SELECT
    // ==================================================

    async select(table, query) {

        try {

            const { data, error } = await query(
                supabase.from(table)
            );

            if (error) throw error;

            return {
                success: true,
                data,
                error: null
            };

        } catch (error) {

            console.error(error);

            return {
                success: false,
                data: null,
                error
            };

        }

    }

    // ==================================================
    // INSERT
    // ==================================================

    async insert(table, values) {

        try {

            const { data, error } = await supabase
                .from(table)
                .insert(values)
                .select();

            if (error) throw error;

            return {
                success: true,
                data,
                error: null
            };

        } catch (error) {

            console.error(error);

            return {
                success: false,
                data: null,
                error
            };

        }

    }

    // ==================================================
    // UPDATE
    // ==================================================

    async update(table, values, column, value) {

        try {

            const { data, error } = await supabase
                .from(table)
                .update(values)
                .eq(column, value)
                .select();

            if (error) throw error;

            return {
                success: true,
                data,
                error: null
            };

        } catch (error) {

            console.error(error);

            return {
                success: false,
                data: null,
                error
            };

        }

    }

    // ==================================================
    // DELETE
    // ==================================================

    async delete(table, column, value) {

        try {

            const { error } = await supabase
                .from(table)
                .delete()
                .eq(column, value);

            if (error) throw error;

            return {
                success: true,
                error: null
            };

        } catch (error) {

            console.error(error);

            return {
                success: false,
                error
            };

        }

    }

}

const api = new Api();

export default api;
