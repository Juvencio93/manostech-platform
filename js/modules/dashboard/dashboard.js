import { api } from '../core/api.js';

// Módulo de Dashboard
export const dashboardModule = {
  async getDashboardStats() {
    try {
      const eventos = await api.query('eventos');
      const lojas = await api.query('lojas');
      const visitantes = await api.query('visitantes');
      const campanhas = await api.query('campanhas');

      return {
        totalEventos: eventos.length,
        totalLojas: lojas.length,
        totalVisitantes: visitantes.length,
        totalCampanhas: campanhas.length,
        eventosAtivos: eventos.filter(e => e.status === 'ativo').length,
        lojasAtivas: lojas.filter(l => l.status === 'ativo').length,
      };
    } catch (error) {
      console.error('Erro ao buscar stats:', error);
      return null;
    }
  },

  async getRecentVisitas(limit = 10) {
    return api.query('visitantes', { limit, order: { column: 'data_visita', ascending: false } });
  },

  async getUpcomingEventos(limit = 5) {
    return api.query('eventos', { 
      limit, 
      order: { column: 'data', ascending: true },
      filter: { status: 'ativo' }
    });
  },
};

export default dashboardModule;