// Supabase Database Service
import { supabase } from './supabase-client.js';

export const db = {
  // EMPRESAS
  async getEmpresas() {
    try {
      const { data, error } = await supabase
        .from('empresas')
        .select('*')
        .order('data_criacao', { ascending: false });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Erro ao buscar empresas:', error);
      return [];
    }
  },

  async getEmpresa(id) {
    try {
      const { data, error } = await supabase
        .from('empresas')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao buscar empresa:', error);
      return null;
    }
  },

  async createEmpresa(empresa) {
    try {
      const { data, error } = await supabase
        .from('empresas')
        .insert([empresa])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao criar empresa:', error);
      return null;
    }
  },

  async updateEmpresa(id, empresa) {
    try {
      const { data, error } = await supabase
        .from('empresas')
        .update(empresa)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao atualizar empresa:', error);
      return null;
    }
  },

  async deleteEmpresa(id) {
    try {
      const { error } = await supabase
        .from('empresas')
        .delete()
        .eq('id', id);
      
      if (error) throw error;
      return true;
    } catch (error) {
      console.error('Erro ao deletar empresa:', error);
      return false;
    }
  },

  // VISITANTES
  async getVisitantes() {
    try {
      const { data, error } = await supabase
        .from('visitantes')
        .select('*')
        .order('data_criacao', { ascending: false });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Erro ao buscar visitantes:', error);
      return [];
    }
  },

  async getVisitante(id) {
    try {
      const { data, error } = await supabase
        .from('visitantes')
        .select('*')
        .eq('id', id)
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao buscar visitante:', error);
      return null;
    }
  },

  async createVisitante(visitante) {
    try {
      const { data, error } = await supabase
        .from('visitantes')
        .insert([visitante])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao criar visitante:', error);
      return null;
    }
  },

  async updateVisitante(id, visitante) {
    try {
      const { data, error } = await supabase
        .from('visitantes')
        .update(visitante)
        .eq('id', id)
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao atualizar visitante:', error);
      return null;
    }
  },

  // EVENTOS
  async getEventos() {
    try {
      const { data, error } = await supabase
        .from('eventos')
        .select('*')
        .order('data_inicio', { ascending: true });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Erro ao buscar eventos:', error);
      return [];
    }
  },

  async createEvento(evento) {
    try {
      const { data, error } = await supabase
        .from('eventos')
        .insert([evento])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao criar evento:', error);
      return null;
    }
  },

  // CAMPANHAS
  async getCampanhas() {
    try {
      const { data, error } = await supabase
        .from('campanhas')
        .select('*')
        .order('data_inicio', { ascending: true });
      
      if (error) throw error;
      return data || [];
    } catch (error) {
      console.error('Erro ao buscar campanhas:', error);
      return [];
    }
  },

  async createCampanha(campanha) {
    try {
      const { data, error } = await supabase
        .from('campanhas')
        .insert([campanha])
        .select()
        .single();
      
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
      return null;
    }
  },

  // GENÉRICO - query personalizada
  async query(table, options = {}) {
    try {
      let query = supabase.from(table).select(options.select || '*');
      
      if (options.where) {
        Object.entries(options.where).forEach(([key, value]) => {
          query = query.eq(key, value);
        });
      }
      
      if (options.order) {
        query = query.order(options.order.by, { ascending: options.order.ascending !== false });
      }
      
      if (options.limit) {
        query = query.limit(options.limit);
      }
      
      const { data, error } = await query;
      if (error) throw error;
      return data;
    } catch (error) {
      console.error('Erro em query:', error);
      return [];
    }
  }
};
