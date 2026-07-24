import { router } from './core/router.js';
import { auth } from './core/auth.js';
import { session } from './core/session.js';

async function initializeApp() {
  try {
    const isAuthenticated = auth.checkAuth();

    if (!isAuthenticated) {
      window.location.hash = '#/login';
    } else {
      await session.initialize();
      if (!window.location.hash || window.location.hash === '#' || window.location.hash === '#/') {
        window.location.hash = '#/dashboard';
      }
    }

    router.initialize();
  } catch (error) {
    console.error('Erro ao inicializar aplicação:', error);
    window.location.hash = '#/login';
    router.initialize();
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initializeApp);
} else {
  initializeApp();
}