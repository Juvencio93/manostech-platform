import { dashboardModule } from '../modules/dashboard/dashboard.js';
import { visitantesModule } from '../modules/visitantes/visitantes.js';

async function initDashboard() {
  try {
    // Load stats
    const stats = await dashboardModule.getStats();
    document.getElementById('totalEventos').textContent = stats.totalEventos;
    document.getElementById('totalLojas').textContent = stats.totalLojas;
    document.getElementById('totalVisitantes').textContent = stats.totalVisitantes;
    document.getElementById('totalCampanhas').textContent = stats.totalCampanhas;

    // Load recent visits
    const visitantes = await visitantesModule.getAllVisitantes();
    const tbody = document.querySelector('#recentVisitas tbody');
    
    visitantes.slice(0, 10).forEach(v => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${new Date(v.data_visita).toLocaleDateString('pt-BR')}</td>
        <td>${v.loja || 'N/A'}</td>
        <td>${v.nome}</td>
      `;
      tbody.appendChild(row);
    });

    // Setup logout button
    document.getElementById('logoutBtn').addEventListener('click', () => {
      if (confirm('Deseja sair?')) {
        window.location.href = '../pages/login.html';
      }
    });
  } catch (error) {
    console.error('Erro ao carregar dashboard:', error);
  }
}

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initDashboard);
} else {
  initDashboard();
}
