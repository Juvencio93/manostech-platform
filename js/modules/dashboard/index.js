import { dashboardService } from '../../services/dashboard.service.js';

const dashboardModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    try {
      const stats = await dashboardService.getStats();
      const recentVisits = await dashboardService.getRecentVisits();
      const proximosEventos = await dashboardService.getEventosProximos();
      
      contentArea.innerHTML = `
        <div class="fade-in">
          <h2>Dashboard</h2>
          
          <!-- Stats Cards -->
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
            <div class="stat-card">
              <div class="stat-card-label">Total de Eventos</div>
              <div class="stat-card-value">${stats.totalEventos}</div>
            </div>
            <div class="stat-card success">
              <div class="stat-card-label">Total de Lojas</div>
              <div class="stat-card-value">${stats.totalLojas}</div>
            </div>
            <div class="stat-card warning">
              <div class="stat-card-label">Total de Visitantes</div>
              <div class="stat-card-value">${stats.totalVisitantes}</div>
              <div class="stat-card-footer">↑ ${stats.crescimentoVisitantes}</div>
            </div>
            <div class="stat-card danger">
              <div class="stat-card-label">Campanhas Ativas</div>
              <div class="stat-card-value">${stats.totalCampanhas}</div>
              <div class="stat-card-footer">↑ ${stats.crescimentoReceita}</div>
            </div>
          </div>

          <!-- Recent Visits -->
          <div class="card mb-lg">
            <div class="card-header">
              <h3 style="margin: 0;">Visitas Recentes</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Data</th>
                      <th>Loja</th>
                      <th>Visitante</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${recentVisits.map(visit => `
                      <tr>
                        <td>${new Date(visit.data).toLocaleDateString('pt-BR')}</td>
                        <td>${visit.loja}</td>
                        <td>${visit.visitante}</td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          <!-- Upcoming Events -->
          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">Próximos Eventos</h3>
            </div>
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Data</th>
                      <th>Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    ${proximosEventos.map(evento => `
                      <tr>
                        <td>${evento.nome}</td>
                        <td>${new Date(evento.data).toLocaleDateString('pt-BR')}</td>
                        <td><span style="background-color: ${evento.status === 'ativo' ? 'var(--success-color)' : 'var(--warning-color)'}; color: white; padding: 4px 8px; border-radius: 4px;">${evento.status}</span></td>
                      </tr>
                    `).join('')}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    } catch (error) {
      console.error('Erro ao carregar dashboard:', error);
      contentArea.innerHTML = '<p style="color: var(--danger-color);">Erro ao carregar dashboard</p>';
    }
  }
};

export default dashboardModule;