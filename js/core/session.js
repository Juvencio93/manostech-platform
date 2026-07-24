export const session = {
  data: {
    user: null,
    permissions: [],
    preferences: {}
  },

  async initialize() {
    try {
      // Carregar dados da sessão
      const user = this.loadUser();
      this.data.user = user;

      // TODO: Carregar permissões do backend
      // TODO: Carregar preferências do usuário
    } catch (error) {
      console.error('Erro ao inicializar sessão:', error);
    }
  },

  loadUser() {
    const email = localStorage.getItem('user_email');
    return {
      email: email,
      role: 'admin' // TODO: Carregar do backend
    };
  },

  getUser() {
    return this.data.user;
  },

  hasPermission(permission) {
    return this.data.permissions.includes(permission);
  },

  setPreference(key, value) {
    this.data.preferences[key] = value;
    localStorage.setItem(`pref_${key}`, JSON.stringify(value));
  },

  getPreference(key) {
    const stored = localStorage.getItem(`pref_${key}`);
    return stored ? JSON.parse(stored) : this.data.preferences[key];
  },

  destroy() {
    this.data = {
      user: null,
      permissions: [],
      preferences: {}
    };
  }
};