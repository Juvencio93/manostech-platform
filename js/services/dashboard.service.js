export const dashboardService = {
  async getStats() {
    try {
      // TODO: Chamar API real
      return {
        totalEventos: 42,
        totalLojas: 15,
        totalVisitantes: 1250,
        totalCampanhas: 8,
        crescimentoVisitantes: '+12%',
        crescimentoReceita: '+8%'
      };
    } catch (error) {
      console.error('Erro ao carregar estatísticas:', error);
      return null;
    }
  },

  async getRecentVisits(limit = 10) {
    try {
      // TODO: Chamar API real
      return [
        { id: 1, data: new Date(), loja: 'Loja Centro', visitante: 'João Silva' },
        { id: 2, data: new Date(Date.now() - 3600000), loja: 'Loja North', visitante: 'Maria Santos' }
      ];
    } catch (error) {
      console.error('Erro ao carregar visitas recentes:', error);
      return [];
    }
  },

  async getEventosProximos(limit = 5) {
    try {
      // TODO: Chamar API real
      return [
        { id: 1, nome: 'Promoção de Verão', data: new Date(Date.now() + 7*24*60*60*1000), status: 'ativo' },
        { id: 2, nome: 'Black Friday', data: new Date(Date.now() + 60*24*60*60*1000), status: 'planejado' }
      ];
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
      return [];
    }
  }
};