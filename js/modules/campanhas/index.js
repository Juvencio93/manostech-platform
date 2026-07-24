const campanhasModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xl);">
          <h1 style="margin: 0;">📢 Campanhas</h1>
          <button class="btn btn-primary">+ Nova Campanha</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
          <div class="stat-card success">
            <div class="stat-card-label">Campanhas Ativas</div>
            <div class="stat-card-value">2</div>
            <div class="stat-card-footer">Rodando agora</div>
          </div>
          <div class="stat-card info">
            <div class="stat-card-label">Planejadas</div>
            <div class="stat-card-value">3</div>
            <div class="stat-card-footer">Próximas semanas</div>
          </div>
          <div class="stat-card warning">
            <div class="stat-card-label">Alcance Total</div>
            <div class="stat-card-value">8.5k</div>
            <div class="stat-card-footer">↑ 22% vs mês anterior</div>
          </div>
          <div class="stat-card danger">
            <div class="stat-card-label">Conversão Média</div>
            <div class="stat-card-value">14%</div>
            <div class="stat-card-footer">↑ 2% este mês</div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: var(--spacing-lg);">
          <div class="card">
            <div class="card-header" style="border-left: 4px solid var(--success-color);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Black Friday 2024</h3>
                <span style="background: var(--success-color); color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">✅ Ativa</span>
              </div>
            </div>
            <div class="card-body">
              <p><strong>Tipo:</strong> Desconto Especial</p>
              <p><strong>Início:</strong> 29/11/2024</p>
              <p><strong>Fim:</strong> 02/12/2024</p>
              <p><strong>Alcance:</strong> 5.200 pessoas</p>
              <p><strong>Conversão:</strong> 18%</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Pausar</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header" style="border-left: 4px solid var(--success-color);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Lançamento Produto X</h3>
                <span style="background: var(--success-color); color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">✅ Ativa</span>
              </div>
            </div>
            <div class="card-body">
              <p><strong>Tipo:</strong> Evento + Promoção</p>
              <p><strong>Início:</strong> 20/07/2024</p>
              <p><strong>Fim:</strong> 31/07/2024</p>
              <p><strong>Alcance:</strong> 3.300 pessoas</p>
              <p><strong>Conversão:</strong> 12%</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Pausar</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header" style="border-left: 4px solid var(--info-color);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <h3 style="margin: 0;">Natal 2024</h3>
                <span style="background: var(--info-color); color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px;">📅 Planejada</span>
              </div>
            </div>
            <div class="card-body">
              <p><strong>Tipo:</strong> Promoção Sazonal</p>
              <p><strong>Início:</strong> 15/12/2024</p>
              <p><strong>Fim:</strong> 26/12/2024</p>
              <p><strong>Meta Alcance:</strong> 10.000 pessoas</p>
              <p><strong>Status:</strong> Em preparação</p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Ativar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default campanhasModule;
