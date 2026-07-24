import { auth } from '../core/auth.js';

const loginForm = document.getElementById('loginForm');

loginForm.addEventListener('submit', async (e) => {
  e.preventDefault();

  const email = document.getElementById('email').value;
  const password = document.getElementById('password').value;

  try {
    const result = await auth.login(email, password);
    if (result.success) {
      window.location.href = '../pages/dashboard.html';
    } else {
      alert('Erro ao fazer login: ' + result.message);
    }
  } catch (error) {
    console.error('Erro ao fazer login:', error);
    alert('Erro ao fazer login. Verifique suas credenciais.');
  }
});
