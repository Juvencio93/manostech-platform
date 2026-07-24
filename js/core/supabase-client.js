// Supabase Client
// Para usar com Supabase real, substitua os valores abaixo pelas suas credenciais.
// Enquanto as credenciais forem as de exemplo, o app funciona em modo demo (sem backend).

const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui';

const DEMO_MODE = SUPABASE_URL === 'https://seu-projeto.supabase.co';

// Cliente Supabase real (usado apenas quando as credenciais estiverem configuradas)
let supabase = null;

if (!DEMO_MODE) {
  try {
    const { createClient } = await import('https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2');
    supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
  } catch (e) {
    console.warn('Supabase não pôde ser inicializado, usando modo demo.');
  }
}

// Mock de sessão para modo demo
const demoAuth = {
  getSession() {
    const token = localStorage.getItem('supabase_token');
    const userStr = localStorage.getItem('user');
    if (token && userStr) {
      const user = JSON.parse(userStr);
      return { data: { session: { access_token: token, user } }, error: null };
    }
    return { data: { session: null }, error: null };
  }
};

export { supabase };

export const supabaseAuth = {
  async signUp(email, password) {
    if (DEMO_MODE) {
      const user = { id: 'demo-' + Date.now(), email, role: 'admin' };
      const session = { access_token: 'demo_token_' + Date.now(), user };
      localStorage.setItem('supabase_token', session.access_token);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, data: { user, session } };
    }
    try {
      const { data, error } = await supabase.auth.signUp({ email, password });
      if (error) throw error;
      return { success: true, data };
    } catch (error) {
      console.error('Erro ao registrar:', error);
      return { success: false, error: error.message };
    }
  },

  async signIn(email, password) {
    if (DEMO_MODE) {
      if (!email || !password) {
        return { success: false, error: 'Email e senha são obrigatórios.' };
      }
      const user = { id: 'demo-' + Date.now(), email, role: 'admin' };
      const session = { access_token: 'demo_token_' + Date.now(), user };
      localStorage.setItem('supabase_token', session.access_token);
      localStorage.setItem('user', JSON.stringify(user));
      return { success: true, data: { user, session } };
    }
    try {
      const { data, error } = await supabase.auth.signInWithPassword({ email, password });
      if (error) throw error;
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
    localStorage.removeItem('supabase_token');
    localStorage.removeItem('user');
    if (DEMO_MODE || !supabase) {
      return { success: true };
    }
    try {
      const { error } = await supabase.auth.signOut();
      if (error) throw error;
      return { success: true };
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return { success: false, error: error.message };
    }
  },

  async getUser() {
    if (DEMO_MODE || !supabase) {
      const userStr = localStorage.getItem('user');
      return userStr ? JSON.parse(userStr) : null;
    }
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
    if (DEMO_MODE || !supabase) {
      return demoAuth.getSession();
    }
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
    if (DEMO_MODE || !supabase) {
      return { data: { subscription: { unsubscribe: () => {} } } };
    }
    return supabase.auth.onAuthStateChange(callback);
  }
};
