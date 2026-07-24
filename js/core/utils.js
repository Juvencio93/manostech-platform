// Utilitários gerais
export const utils = {
  // Formatar data
  formatDate(date) {
    return new Date(date).toLocaleDateString('pt-BR');
  },

  // Formatar moeda
  formatCurrency(value) {
    return new Intl.NumberFormat('pt-BR', {
      style: 'currency',
      currency: 'BRL',
    }).format(value);
  },

  // Validar email
  isValidEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  },

  // Gerar UUID
  generateId() {
    return crypto.randomUUID();
  },

  // Debounce
  debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Query string parser
  parseQueryString(qs) {
    const params = new URLSearchParams(qs);
    return Object.fromEntries(params);
  },
};

export default utils;