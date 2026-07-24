import { api } from '../core/api.js';

// Módulo de Lojas
export const lojasModule = {
  async getAllLojas() {
    return api.query('lojas', { order: { column: 'nome', ascending: true } });
  },

  async getLojaById(id) {
    const data = await api.query('lojas', { filter: { id } });
    return data[0];
  },

  async createLoja(loja) {
    return api.insert('lojas', loja);
  },

  async updateLoja(id, loja) {
    return api.update('lojas', id, loja);
  },

  async deleteLoja(id) {
    return api.delete('lojas', id);
  },

  async getLojasByEmpresa(empresaId) {
    return api.query('lojas', { filter: { empresa_id: empresaId } });
  },
};

export default lojasModule;