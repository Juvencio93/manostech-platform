import { auth } from './auth.js';
import { storage } from './storage.js';

// Session Management
export const session = {
  async init() {
    try {
      const user = await auth.getCurrentUser();
      if (user) {
        this.setUser(user);
      }
    } catch (error) {
      console.error('Erro ao inicializar sessão:', error);
    }
  },

  setUser(user) {
    storage.set('user', user);
  },

  getUser() {
    return storage.get('user');
  },

  isAuthenticated() {
    return !!this.getUser();
  },

  clear() {
    storage.remove('user');
  },

  async requireAuth() {
    if (!this.isAuthenticated()) {
      window.location.hash = '#/login';
      return false;
    }
    return true;
  },
};

export default session;