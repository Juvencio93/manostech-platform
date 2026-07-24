import { api } from '../core/api.js';

// Módulo de Eventos
export const eventosModule = {
  async getAllEventos() {
    return api.query('eventos', { order: { column: 'data', ascending: false } });
  },

  async getEventoById(id) {
    const data = await api.query('eventos', { filter: { id } });
    return data[0];
  },

  async createEvento(evento) {
    return api.insert('eventos', evento);
  },

  async updateEvento(id, evento) {
    return api.update('eventos', id, evento);
  },

  async deleteEvento(id) {
    return api.delete('eventos', id);
  },

  async getEventosByUnidade(unidadeId) {
    return api.query('eventos', { filter: { unidade_id: unidadeId } });
  },
};

export default eventosModule;