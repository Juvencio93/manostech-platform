const visitantesModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xl);">
          <h1 style="margin: 0;">👥 Visitantes</h1>
          <button class="btn btn-primary">+ Registrar Visitante</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
          <div class="stat-card success">
            <div class="stat-card-label">Total de Visitantes</div>
            <div class="stat-card-value">1,234</div>
            <div class="stat-card-footer">↑ 12% este mês</div>
          </div>
          <div class="stat-card info">
            <div class="stat-card-label">Visitantes Hoje</div>
            <div class="stat-card-value">47</div>
            <div class="stat-card-footer">↑ 8% vs ontem</div>
          </div>
          <div class="stat-card warning">
            <div class="stat-card-label">Novos (30 dias)</div>
            <div class="stat-card-value">234</div>
            <div class="stat-card-footer">↑ 5% vs mês anterior</div>
          </div>
          <div class="stat-card danger">
            <div class="stat-card-label">Taxa de Retorno</div>
            <div class="stat-card-value">68%</div>
            <div class="stat-card-footer">↑ 3% este mês</div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 style="margin: 0;">📋 Últimos Visitantes</h3>
          </div>
          <div class="card-body" style="padding: 0;">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Evento</th>
                    <th>Data</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Ana Silva</strong></td>
                    <td>ana@email.com</td>
                    <td>Lançamento Produto X</td>
                    <td>24/07/2024</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Presente</span></td>
                  </tr>
                  <tr>
                    <td><strong>Carlos Pereira</strong></td>
                    <td>carlos@email.com</td>
                    <td>Workshop Marketing</td>
                    <td>23/07/2024</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Presente</span></td>
                  </tr>
                  <tr>
                    <td><strong>Maria Santos</strong></td>
                    <td>maria@email.com</td>
                    <td>Feira de Negócios</td>
                    <td>22/07/2024</td>
                    <td><span style="background: var(--warning-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Confirmado</span></td>
                  </tr>
                  <tr>
                    <td><strong>João Lima</strong></td>
                    <td>joao@email.com</td>
                    <td>Lançamento Produto X</td>
                    <td>24/07/2024</td>
                    <td><span style="background: var(--info-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Convidado</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default visitantesModule;
