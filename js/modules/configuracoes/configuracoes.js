import { api } from '../core/api.js';

// Módulo de Configurações
export const configuracoesModule = {
  async getAllConfiguracoes() {
    return api.query('configuracoes');
  },

  async getConfiguracaoById(id) {
    const data = await api.query('configuracoes', { filter: { id } });
    return data[0];
  },

  async createConfiguracao(config) {
    return api.insert('configuracoes', config);
  },

  async updateConfiguracao(id, config) {
    return api.update('configuracoes', id, config);
  },

  async deleteConfiguracao(id) {
    return api.delete('configuracoes', id);
  },

  async getConfiguracaoByKey(chave) {
    const data = await api.query('configuracoes', { filter: { chave } });
    return data[0];
  },
};

export default configuracoesModule;