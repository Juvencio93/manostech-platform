import { api } from '../core/api.js';

// Módulo de Relatórios
export const relatoriosModule = {
  async getAllRelatorios() {
    return api.query('relatorios', { order: { column: 'data_geracao', ascending: false } });
  },

  async getRelatorioById(id) {
    const data = await api.query('relatorios', { filter: { id } });
    return data[0];
  },

  async createRelatorio(relatorio) {
    return api.insert('relatorios', relatorio);
  },

  async updateRelatorio(id, relatorio) {
    return api.update('relatorios', id, relatorio);
  },

  async deleteRelatorio(id) {
    return api.delete('relatorios', id);
  },

  async gerarRelatorioVisitas(lojaId, dataInicio, dataFim) {
    const visitantes = await api.query('visitantes', { filter: { loja_id: lojaId } });
    return visitantes.filter(v => {
      const data = new Date(v.data_visita);
      return data >= new Date(dataInicio) && data <= new Date(dataFim);
    });
  },
};

export default relatoriosModule;