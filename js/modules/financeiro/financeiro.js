import { api } from '../core/api.js';

// Módulo Financeiro
export const financeiroModule = {
  async getAllTransacoes() {
    return api.query('transacoes', { order: { column: 'data', ascending: false } });
  },

  async getTransacaoById(id) {
    const data = await api.query('transacoes', { filter: { id } });
    return data[0];
  },

  async createTransacao(transacao) {
    return api.insert('transacoes', transacao);
  },

  async updateTransacao(id, transacao) {
    return api.update('transacoes', id, transacao);
  },

  async deleteTransacao(id) {
    return api.delete('transacoes', id);
  },

  async getResumoFinanceiro() {
    const transacoes = await api.query('transacoes');
    const receita = transacoes
      .filter(t => t.tipo === 'receita')
      .reduce((sum, t) => sum + t.valor, 0);
    const despesa = transacoes
      .filter(t => t.tipo === 'despesa')
      .reduce((sum, t) => sum + t.valor, 0);

    return {
      receita,
      despesa,
      saldo: receita - despesa,
    };
  },
};

export default financeiroModule;