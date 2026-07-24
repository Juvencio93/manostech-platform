import { api } from '../core/api.js';

// Módulo de Funcionários
export const funcionariosModule = {
  async getAllFuncionarios() {
    return api.query('funcionarios', { order: { column: 'nome', ascending: true } });
  },

  async getFuncionarioById(id) {
    const data = await api.query('funcionarios', { filter: { id } });
    return data[0];
  },

  async createFuncionario(funcionario) {
    return api.insert('funcionarios', funcionario);
  },

  async updateFuncionario(id, funcionario) {
    return api.update('funcionarios', id, funcionario);
  },

  async deleteFuncionario(id) {
    return api.delete('funcionarios', id);
  },

  async getFuncionariosByLoja(lojaId) {
    return api.query('funcionarios', { filter: { loja_id: lojaId } });
  },
};

export default funcionariosModule;