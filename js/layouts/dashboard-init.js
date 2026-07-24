import { auth } from '../core/auth.js';
import { router } from '../core/router.js';

// Inicializar layout do dashboard
const logoutBtn = document.getElementById('logoutBtn');
const userEmail = document.getElementById('userEmail');
const navLinks = document.querySelectorAll('.nav-link');

// Exibir email do usuário
const user = auth.getUser();
if (user && user.email) {
  userEmail.textContent = user.email;
}

// Logout
if (logoutBtn) {
  logoutBtn.addEventListener('click', async () => {
    if (confirm('Deseja sair da plataforma?')) {
      await auth.logout();
      window.location.hash = '#/login';
    }
  });
}

// Atualizar link ativo
window.addEventListener('hashchange', () => {
  navLinks.forEach(link => {
    link.classList.remove('active');
  });
  const currentPath = window.location.hash.slice(1) || '/dashboard';
  const activeLink = document.querySelector(`[href="#${currentPath}"]`);
  if (activeLink) {
    activeLink.classList.add('active');
    document.getElementById('pageTitle').textContent = activeLink.textContent;
  }
});

// Trigger initial state
window.dispatchEvent(new Event('hashchange'));