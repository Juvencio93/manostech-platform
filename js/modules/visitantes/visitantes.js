import { api } from '../core/api.js';

// Módulo de Visitantes
export const visitantesModule = {
  async getAllVisitantes() {
    return api.query('visitantes', { order: { column: 'data_visita', ascending: false } });
  },

  async getVisitanteById(id) {
    const data = await api.query('visitantes', { filter: { id } });
    return data[0];
  },

  async createVisitante(visitante) {
    return api.insert('visitantes', visitante);
  },

  async updateVisitante(id, visitante) {
    return api.update('visitantes', id, visitante);
  },

  async deleteVisitante(id) {
    return api.delete('visitantes', id);
  },

  async getVisitantesByLoja(lojaId) {
    return api.query('visitantes', { filter: { loja_id: lojaId } });
  },
};

export default visitantesModule;