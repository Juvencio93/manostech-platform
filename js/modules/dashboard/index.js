const dashboardModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <h1 style="margin-bottom: var(--spacing-xl);">📊 Dashboard</h1>
        
        <!-- Stats -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-2xl);">
          <div class="stat-card success">
            <div class="stat-card-label">Total de Visitantes</div>
            <div class="stat-card-value">1,234</div>
            <div class="stat-card-footer">↑ 12% este mês</div>
          </div>
          <div class="stat-card info">
            <div class="stat-card-label">Eventos Ativos</div>
            <div class="stat-card-value">8</div>
            <div class="stat-card-footer">3 próximas semana</div>
          </div>
          <div class="stat-card warning">
            <div class="stat-card-label">Campanhas</div>
            <div class="stat-card-value">5</div>
            <div class="stat-card-footer">2 em andamento</div>
          </div>
          <div class="stat-card danger">
            <div class="stat-card-label">Unidades</div>
            <div class="stat-card-value">12</div>
            <div class="stat-card-footer">Todas ativas</div>
          </div>
        </div>

        <!-- Content Cards -->
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg);">
          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">🎉 Próximos Eventos</h3>
            </div>
            <div class="card-body">
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color);">
                  <strong>Lançamento Produto X</strong><br>
                  <span style="font-size: 12px; color: var(--text-light);">Amanhã às 14h</span>
                </li>
                <li style="padding: 10px 0;">
                  <strong>Black Friday 2024</strong><br>
                  <span style="font-size: 12px; color: var(--text-light);">29/11 - 02/12</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">📈 Performance</h3>
            </div>
            <div class="card-body">
              <p>Visitantes: <strong>↑ 32%</strong></p>
              <p>Conversão: <strong>12.5%</strong></p>
              <p>Receita: <strong>R$ 45,230</strong></p>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">⚡ Ações Rápidas</h3>
            </div>
            <div class="card-body">
              <button class="btn btn-primary" style="width: 100%; margin-bottom: 10px;">
                + Novo Evento
              </button>
              <button class="btn btn-secondary" style="width: 100%; margin-bottom: 10px;">
                + Nova Campanha
              </button>
              <button class="btn btn-ghost" style="width: 100%;">
                Ver Visitantes
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default dashboardModule;
