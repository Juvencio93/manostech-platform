export const auth = {
  async checkAuth() {
    try {
      // Verificar se token existe no localStorage
      const token = localStorage.getItem('auth_token');
      if (!token) {
        return false;
      }

      // TODO: Validar token com backend/Supabase
      return true;
    } catch (error) {
      console.error('Erro ao verificar autenticação:', error);
      return false;
    }
  },

  async login(email, password) {
    try {
      // TODO: Chamar API de login (Supabase)
      // Por enquanto, mock
      if (email && password) {
        localStorage.setItem('auth_token', 'mock_token');
        localStorage.setItem('user_email', email);
        return { success: true, message: 'Login realizado com sucesso' };
      }
      return { success: false, message: 'Credenciais inválidas' };
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      return { success: false, message: error.message };
    }
  },

  async logout() {
    try {
      localStorage.removeItem('auth_token');
      localStorage.removeItem('user_email');
      return { success: true };
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      return { success: false };
    }
  },

  getToken() {
    return localStorage.getItem('auth_token');
  },

  getUser() {
    return {
      email: localStorage.getItem('user_email')
    };
  }
};