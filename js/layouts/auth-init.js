import { auth } from '../core/auth.js';

// Inicializar layout de autenticação
const loginForm = document.getElementById('loginForm');

if (loginForm) {
  loginForm.addEventListener('submit', async (e) => {
    e.preventDefault();

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;
    const remember = document.getElementById('remember').checked;

    try {
      const result = await auth.login(email, password);
      
      if (result.success) {
        if (remember) {
          localStorage.setItem('remember_email', email);
        }
        window.location.hash = '#/dashboard';
      } else {
        alert('Erro ao fazer login: ' + result.message);
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error);
      alert('Erro ao fazer login. Tente novamente.');
    }
  });

  // Recuperar email se "lembrar-me" foi marcado anteriormente
  const rememberedEmail = localStorage.getItem('remember_email');
  if (rememberedEmail) {
    document.getElementById('email').value = rememberedEmail;
    document.getElementById('remember').checked = true;
  }
}