/* ================================================================
   ManosTech Platform – auth.js
   Authentication & role-based permission system
================================================================ */

/* ── Demo users (fallback when Supabase not configured) ───────── */
const DEMO_USERS = {
  'admin@demo.com':    { password: 'admin123',   role: 'admin',       name: 'Admin Sistema' },
  'gerente@demo.com':  { password: 'gerente123', role: 'gerente',     name: 'Gerente Silva' },
  'operador@demo.com': { password: 'op123',      role: 'operador',    name: 'Operador João' },
  'viewer@demo.com':   { password: 'view123',    role: 'visualizador',name: 'Viewer Maria'  }
};

/* ── Role permissions ─────────────────────────────────────────── */
const ROLE_PERMISSIONS = {
  admin:        ['dashboard','eventos','empresas','visitantes','campanhas','relatorios',
                 'financeiro','usuarios','unidades','funcionarios','configuracoes','perfil'],
  gerente:      ['dashboard','eventos','empresas','visitantes','campanhas','relatorios',
                 'unidades','funcionarios','configuracoes','perfil'],
  operador:     ['dashboard','eventos','visitantes','campanhas','perfil'],
  visualizador: ['dashboard','relatorios','perfil']
};

/* ── Storage keys ─────────────────────────────────────────────── */
const USER_KEY  = 'mt_user';
const TOKEN_KEY = 'mt_token';

/* ================================================================
   auth object – public API
================================================================ */
const auth = {

  /**
   * Login with email + password.
   * Tries Supabase first; falls back to demo users.
   */
  async login(email, password) {
    const normalized = email.trim().toLowerCase();

    // Try Supabase if configured
    try {
      const { supabaseAuth } = await import('./supabase-client.js').catch(() => ({}));
      if (supabaseAuth) {
        const result = await supabaseAuth.signIn(normalized, password);
        if (result.success) {
          const user = {
            email: normalized,
            name:  result.data.user?.user_metadata?.name || normalized,
            role:  result.data.user?.user_metadata?.role || 'visualizador',
            id:    result.data.user?.id
          };
          this._saveUser(user, result.data.session?.access_token);
          return { success: true, user };
        }
      }
    } catch (_) { /* Supabase not configured – use demo */ }

    // Demo fallback
    const demo = DEMO_USERS[normalized];
    if (demo && demo.password === password) {
      const user = { email: normalized, role: demo.role, name: demo.name };
      this._saveUser(user, 'demo-token');
      return { success: true, user };
    }

    return { success: false, message: 'Email ou senha incorretos.' };
  },

  /** Logout – clear local storage. */
  async logout() {
    try {
      const { supabaseAuth } = await import('./supabase-client.js').catch(() => ({}));
      if (supabaseAuth) await supabaseAuth.signOut();
    } catch (_) {}
    localStorage.removeItem(USER_KEY);
    localStorage.removeItem(TOKEN_KEY);
    return { success: true };
  },

  /** Returns true if a user session exists. */
  isAuthenticated() {
    return !!localStorage.getItem(USER_KEY);
  },

  /** Returns the stored user object or null. */
  getUser() {
    try {
      const raw = localStorage.getItem(USER_KEY);
      return raw ? JSON.parse(raw) : null;
    } catch (_) { return null; }
  },

  /** Returns the JWT token or null. */
  getToken() {
    return localStorage.getItem(TOKEN_KEY);
  },

  /**
   * Returns the list of modules the current user can access.
   * @param {string} [role] – defaults to the logged-in user's role
   */
  getAllowedModules(role) {
    const userRole = role || this.getUser()?.role;
    return ROLE_PERMISSIONS[userRole] || ROLE_PERMISSIONS['visualizador'];
  },

  /**
   * Returns true if the current user can access the given module.
   */
  canAccess(module) {
    return this.getAllowedModules().includes(module);
  },

  /** @private */
  _saveUser(user, token) {
    localStorage.setItem(USER_KEY, JSON.stringify(user));
    if (token) localStorage.setItem(TOKEN_KEY, token);
  }
};

export { auth, ROLE_PERMISSIONS, DEMO_USERS };
