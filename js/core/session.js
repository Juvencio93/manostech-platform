// Gerenciamento de sessão com Supabase
import { supabaseAuth } from './supabase-client.js';

export const session = {
  data: {
    user: null,
    preferences: {},
    theme: 'light'
  },

  async initialize() {
    try {
      // supabaseAuth.getSession() returns the session object directly (or null),
      // not the raw { data: { session }, error } structure from supabase.auth.getSession()
      const supabaseSession = await supabaseAuth.getSession();

      if (supabaseSession?.user) {
        this.data.user = supabaseSession.user;
        console.log('✅ Sessão restaurada:', this.data.user.email);
      }

      // Carregar preferências
      const savedPrefs = localStorage.getItem('user_prefs');
      if (savedPrefs) {
        this.data.preferences = JSON.parse(savedPrefs);
      }

      // Carregar tema
      const savedTheme = localStorage.getItem('theme');
      if (savedTheme) {
        this.data.theme = savedTheme;
      }
    } catch (error) {
      console.error('Erro ao inicializar sessão:', error);
    }
  },

  setUser(user) {
    this.data.user = user;
    if (user) {
      localStorage.setItem('user', JSON.stringify(user));
    }
  },

  getUser() {
    return this.data.user;
  },

  setPreference(key, value) {
    this.data.preferences[key] = value;
    localStorage.setItem('user_prefs', JSON.stringify(this.data.preferences));
  },

  getPreference(key) {
    return this.data.preferences[key];
  },

  setTheme(theme) {
    this.data.theme = theme;
    localStorage.setItem('theme', theme);
  },

  getTheme() {
    return this.data.theme;
  },

  clear() {
    this.data = {
      user: null,
      preferences: {},
      theme: 'light'
    };
    localStorage.removeItem('user');
    localStorage.removeItem('user_prefs');
    localStorage.removeItem('theme');
  }
};
