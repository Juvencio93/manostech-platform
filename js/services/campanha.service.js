export const campanhaService = {
  async getAllCampanhas(filters = {}) {
    try {
      // TODO: Chamar API real
      return [];
    } catch (error) {
      console.error('Erro ao carregar campanhas:', error);
      return [];
    }
  },

  async getCampanha(id) {
    try {
      // TODO: Chamar API real
      return null;
    } catch (error) {
      console.error('Erro ao carregar campanha:', error);
      return null;
    }
  },

  async createCampanha(data) {
    try {
      // TODO: Chamar API real
      return { success: true, id: Date.now() };
    } catch (error) {
      console.error('Erro ao criar campanha:', error);
      return { success: false, error: error.message };
    }
  }
};