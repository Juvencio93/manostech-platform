export const visitanteService = {
  async getAllVisitantes(filters = {}) {
    try {
      // TODO: Chamar API real
      return [];
    } catch (error) {
      console.error('Erro ao carregar visitantes:', error);
      return [];
    }
  },

  async getVisitante(id) {
    try {
      // TODO: Chamar API real
      return null;
    } catch (error) {
      console.error('Erro ao carregar visitante:', error);
      return null;
    }
  },

  async createVisitante(data) {
    try {
      // TODO: Chamar API real
      return { success: true, id: Date.now() };
    } catch (error) {
      console.error('Erro ao criar visitante:', error);
      return { success: false, error: error.message };
    }
  },

  async registerVisit(visitanteId, lojaId) {
    try {
      // TODO: Chamar API real
      return { success: true };
    } catch (error) {
      console.error('Erro ao registrar visita:', error);
      return { success: false, error: error.message };
    }
  }
};