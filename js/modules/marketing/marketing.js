import { api } from '../core/api.js';

// Módulo de Marketing
export const marketingModule = {
  async getAllCampanhas() {
    return api.query('campanhas', { order: { column: 'data_inicio', ascending: false } });
  },

  async getCampanhaById(id) {
    const data = await api.query('campanhas', { filter: { id } });
    return data[0];
  },

  async createCampanha(campanha) {
    return api.insert('campanhas', campanha);
  },

  async updateCampanha(id, campanha) {
    return api.update('campanhas', id, campanha);
  },

  async deleteCampanha(id) {
    return api.delete('campanhas', id);
  },

  async getCampanhasByLoja(lojaId) {
    return api.query('campanhas', { filter: { loja_id: lojaId } });
  },
};

export default marketingModule;