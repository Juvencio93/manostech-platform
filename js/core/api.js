import { supabase } from './auth.js';

// API Call Handler
export const api = {
  async query(table, options = {}) {
    let query = supabase.from(table).select(options.select || '*');

    if (options.filter) {
      for (const [key, value] of Object.entries(options.filter)) {
        query = query.eq(key, value);
      }
    }

    if (options.limit) {
      query = query.limit(options.limit);
    }

    if (options.order) {
      query = query.order(options.order.column, { ascending: options.order.ascending });
    }

    const { data, error } = await query;
    if (error) throw error;
    return data;
  },

  async insert(table, data) {
    const { data: result, error } = await supabase.from(table).insert([data]);
    if (error) throw error;
    return result;
  },

  async update(table, id, data) {
    const { data: result, error } = await supabase.from(table).update(data).eq('id', id);
    if (error) throw error;
    return result;
  },

  async delete(table, id) {
    const { error } = await supabase.from(table).delete().eq('id', id);
    if (error) throw error;
  },
};

export default api;