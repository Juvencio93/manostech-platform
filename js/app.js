import { router } from './core/router.js';
import { auth } from './core/auth.js';
import { session } from './core/session.js';

async function initializeApp() {
  try {
    // Verificar se usuário está autenticado
    const isAuthenticated = await auth.checkAuth();
    
    if (!isAuthenticated) {
      // Redirecionar para login
      window.location.href = '#/login';
      return;
    }

    // Inicializar sessão
    await session.initialize();

    // Inicializar roteador
    router.initialize();

    // Navegar para dashboard por padrão
    if (window.location.hash === '') {
      window.location.hash = '#/dashboard';
    }
  } catch (error) {
    console.error('Erro ao inicializar aplicação:', error);
    window.location.href = '#/login';
  }
}

// Iniciar aplicação quando DOM estiver pronto
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}