import { supabase, supabaseAuth } from './supabase-client.js';

export const auth = {
  async login(email, password) {
    try {
      const result = await supabaseAuth.signIn(email, password);
      
      if (result.success) {
        console.log('✅ Login realizado com sucesso');
        return {
          success: true,
          user: result.data.user,
          token: result.data.session.access_token
        };
      } else {
        console.error('❌ Erro ao fazer login:', result.error);
        return { success: false, message: result.error };
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { success: false, message: error.message };
    }
  },

  async logout() {
    try {
      const result = await supabaseAuth.signOut();
      if (result.success) {
        console.log('✅ Logout realizado');
      }
      return result;
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return { success: false, message: error.message };
    }
  },

  checkAuth() {
    const token = localStorage.getItem('supabase_token');
    const user = localStorage.getItem('user');
    return !!(token && user);
  },

  getUser() {
    const userStr = localStorage.getItem('user');
    if (userStr) {
      try {
        return JSON.parse(userStr);
      } catch (e) {
        console.error('Erro ao parsear usuário:', e);
        return null;
      }
    }
    return null;
  },

  getToken() {
    return localStorage.getItem('supabase_token');
  },

  async register(email, password, userData = {}) {
    try {
      const result = await supabaseAuth.signUp(email, password);
      
      if (result.success) {
        console.log('✅ Registro realizado');
        return { success: true, user: result.data.user };
      } else {
        console.error('❌ Erro ao registrar:', result.error);
        return { success: false, message: result.error };
      }
    } catch (error) {
      console.error('Erro ao registrar:', error);
      return { success: false, message: error.message };
    }
  }
};
