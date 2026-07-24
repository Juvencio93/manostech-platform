// Configuração do Supabase
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL || 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

// Importar Supabase Client
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';

// Inicializar cliente Supabase
export const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Objetos de autenticação
export const auth = {
  async login(email, password) {
    const { data, error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async signup(email, password) {
    const { data, error } = await supabase.auth.signUp({
      email,
      password,
    });
    if (error) throw error;
    return data;
  },

  async logout() {
    const { error } = await supabase.auth.signOut();
    if (error) throw error;
  },

  async getCurrentUser() {
    const { data: { user }, error } = await supabase.auth.getUser();
    if (error) throw error;
    return user;
  },

  onAuthStateChange(callback) {
    return supabase.auth.onAuthStateChange(callback);
  },
};

export default supabase;