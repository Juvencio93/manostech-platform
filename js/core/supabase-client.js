// Supabase Client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui';

export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

export const supabaseAuth = {
  async signUp(email, password) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password
      });
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Erro ao registrar:', error);
      return { success: false, error: error.message };
    }
  },

  async signIn(email, password) {
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password
      });
      if (error) throw error;
      
      // Armazenar token
      if (data.session) {
        localStorage.setItem('supabase_token', data.session.access_token);
        localStorage.setItem('user', JSON.stringify(data.user));
      }
      
      return { success: true, data };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { success: false, error: error.message };
    }
  },

  async signOut() {
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      
      localStorage.removeItem('supabase_token');
      localStorage.removeItem('user');
      
      return { success: true };
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return { success: false, error: error.message };
    }
  },

  async getUser() {
    try {
      const { data: { user }, error } = await supabase.auth.getUser();
      if (error) throw error;
      return user;
    } catch (error) {
      console.error('Erro ao obter usuário:', error);
      return null;
    }
  },

  async getSession() {
    try {
      const { data: { session }, error } = await supabase.auth.getSession();
      if (error) throw error;
      return session;
    } catch (error) {
      console.error('Erro ao obter sessão:', error);
      return null;
    }
  },

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  }
};
