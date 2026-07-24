const relatoriosModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <h1 style="margin-bottom: var(--spacing-xl);">📈 Relatórios</h1>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: var(--spacing-lg);">
          <div class="card" style="cursor: pointer;" onclick="alert('Relatório gerado com sucesso!')">
            <div class="card-body" style="text-align: center; padding: var(--spacing-xl);">
              <div style="font-size: 48px; margin-bottom: var(--spacing-md);">👥</div>
              <h3>Relatório de Visitantes</h3>
              <p style="color: var(--text-light);">Análise completa de visitantes por período, evento e unidade.</p>
              <button class="btn btn-primary" style="margin-top: var(--spacing-lg); width: 100%;">Gerar Relatório</button>
            </div>
          </div>

          <div class="card" style="cursor: pointer;" onclick="alert('Relatório gerado com sucesso!')">
            <div class="card-body" style="text-align: center; padding: var(--spacing-xl);">
              <div style="font-size: 48px; margin-bottom: var(--spacing-md);">💰</div>
              <h3>Relatório Financeiro</h3>
              <p style="color: var(--text-light);">Receitas, despesas e margem de lucro por período.</p>
              <button class="btn btn-primary" style="margin-top: var(--spacing-lg); width: 100%;">Gerar Relatório</button>
            </div>
          </div>

          <div class="card" style="cursor: pointer;" onclick="alert('Relatório gerado com sucesso!')">
            <div class="card-body" style="text-align: center; padding: var(--spacing-xl);">
              <div style="font-size: 48px; margin-bottom: var(--spacing-md);">📢</div>
              <h3>Relatório de Campanhas</h3>
              <p style="color: var(--text-light);">Performance e ROI de campanhas de marketing.</p>
              <button class="btn btn-primary" style="margin-top: var(--spacing-lg); width: 100%;">Gerar Relatório</button>
            </div>
          </div>

          <div class="card" style="cursor: pointer;" onclick="alert('Relatório gerado com sucesso!')">
            <div class="card-body" style="text-align: center; padding: var(--spacing-xl);">
              <div style="font-size: 48px; margin-bottom: var(--spacing-md);">🏬</div>
              <h3>Relatório por Unidade</h3>
              <p style="color: var(--text-light);">Desempenho comparativo entre unidades.</p>
              <button class="btn btn-primary" style="margin-top: var(--spacing-lg); width: 100%;">Gerar Relatório</button>
            </div>
          </div>

          <div class="card" style="cursor: pointer;" onclick="alert('Relatório gerado com sucesso!')">
            <div class="card-body" style="text-align: center; padding: var(--spacing-xl);">
              <div style="font-size: 48px; margin-bottom: var(--spacing-md);">🎉</div>
              <h3>Relatório de Eventos</h3>
              <p style="color: var(--text-light);">Presença, engajamento e resultado dos eventos.</p>
              <button class="btn btn-primary" style="margin-top: var(--spacing-lg); width: 100%;">Gerar Relatório</button>
            </div>
          </div>

          <div class="card" style="cursor: pointer;" onclick="alert('Relatório gerado com sucesso!')">
            <div class="card-body" style="text-align: center; padding: var(--spacing-xl);">
              <div style="font-size: 48px; margin-bottom: var(--spacing-md);">👔</div>
              <h3>Relatório de Funcionários</h3>
              <p style="color: var(--text-light);">Produtividade e métricas de RH.</p>
              <button class="btn btn-primary" style="margin-top: var(--spacing-lg); width: 100%;">Gerar Relatório</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default relatoriosModule;
