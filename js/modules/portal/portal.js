import { api } from '../core/api.js';

// Módulo de Portal
export const portalModule = {
  async getAllPaginas() {
    return api.query('portal_paginas', { order: { column: 'titulo', ascending: true } });
  },

  async getPaginaById(id) {
    const data = await api.query('portal_paginas', { filter: { id } });
    return data[0];
  },

  async createPagina(pagina) {
    return api.insert('portal_paginas', pagina);
  },

  async updatePagina(id, pagina) {
    return api.update('portal_paginas', id, pagina);
  },

  async deletePagina(id) {
    return api.delete('portal_paginas', id);
  },

  async getPaginasByLoja(lojaId) {
    return api.query('portal_paginas', { filter: { loja_id: lojaId } });
  },
};

export default portalModule;