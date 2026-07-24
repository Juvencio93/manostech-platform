const marketingLocalModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <h1 style="margin-bottom: var(--spacing-xl);">📱 Marketing Local</h1>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
          <div class="stat-card success">
            <div class="stat-card-label">Anúncios Ativos</div>
            <div class="stat-card-value">12</div>
            <div class="stat-card-footer">↑ 4 novos esta semana</div>
          </div>
          <div class="stat-card info">
            <div class="stat-card-label">Alcance Local</div>
            <div class="stat-card-value">15k</div>
            <div class="stat-card-footer">Raio de 5km</div>
          </div>
          <div class="stat-card warning">
            <div class="stat-card-label">Cliques Hoje</div>
            <div class="stat-card-value">342</div>
            <div class="stat-card-footer">↑ 28% vs ontem</div>
          </div>
          <div class="stat-card danger">
            <div class="stat-card-label">Conversão</div>
            <div class="stat-card-value">8.5%</div>
            <div class="stat-card-footer">↑ 1.2% este mês</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg);">
          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">📍 Campanhas Ativas por Localização</h3>
            </div>
            <div class="card-body">
              <ul style="list-style: none; padding: 0;">
                <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;">
                  <span>🏬 Unidade Centro</span>
                  <span style="color: var(--success-color);">3 campanhas</span>
                </li>
                <li style="padding: 10px 0; border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between;">
                  <span>🏬 Unidade Norte</span>
                  <span style="color: var(--success-color);">5 campanhas</span>
                </li>
                <li style="padding: 10px 0; display: flex; justify-content: space-between;">
                  <span>🏬 Unidade Sul</span>
                  <span style="color: var(--warning-color);">4 campanhas</span>
                </li>
              </ul>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">⚡ Ações Rápidas</h3>
            </div>
            <div class="card-body">
              <button class="btn btn-primary" style="width: 100%; margin-bottom: var(--spacing-md);" onclick="alert('Novo anúncio criado!')">
                📢 Criar Anúncio Local
              </button>
              <button class="btn btn-secondary" style="width: 100%; margin-bottom: var(--spacing-md);" onclick="alert('Segmentação configurada!')">
                🎯 Configurar Segmentação
              </button>
              <button class="btn btn-ghost" style="width: 100%;" onclick="alert('Relatório gerado!')">
                📊 Ver Relatório de Alcance
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default marketingLocalModule;
