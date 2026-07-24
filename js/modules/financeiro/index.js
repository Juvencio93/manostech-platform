const financeiroModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <h1 style="margin-bottom: var(--spacing-xl);">💰 Financeiro</h1>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: var(--spacing-lg); margin-bottom: var(--spacing-xl);">
          <div class="stat-card success">
            <div class="stat-card-label">Receita do Mês</div>
            <div class="stat-card-value">R$ 45.2k</div>
            <div class="stat-card-footer">↑ 15% vs mês anterior</div>
          </div>
          <div class="stat-card danger">
            <div class="stat-card-label">Despesas do Mês</div>
            <div class="stat-card-value">R$ 28.7k</div>
            <div class="stat-card-footer">↓ 3% vs mês anterior</div>
          </div>
          <div class="stat-card info">
            <div class="stat-card-label">Lucro Líquido</div>
            <div class="stat-card-value">R$ 16.5k</div>
            <div class="stat-card-footer">Margem: 36.5%</div>
          </div>
          <div class="stat-card warning">
            <div class="stat-card-label">A Receber</div>
            <div class="stat-card-value">R$ 8.3k</div>
            <div class="stat-card-footer">Vencimento próximo</div>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 style="margin: 0;">📊 Últimas Transações</h3>
          </div>
          <div class="card-body" style="padding: 0;">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Descrição</th>
                    <th>Categoria</th>
                    <th>Data</th>
                    <th>Valor</th>
                    <th>Status</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Venda Evento X</strong></td>
                    <td>Receita</td>
                    <td>24/07/2024</td>
                    <td style="color: var(--success-color);">+ R$ 5.200,00</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Pago</span></td>
                  </tr>
                  <tr>
                    <td><strong>Aluguel Unidade Centro</strong></td>
                    <td>Despesa</td>
                    <td>23/07/2024</td>
                    <td style="color: var(--danger-color);">- R$ 3.800,00</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Pago</span></td>
                  </tr>
                  <tr>
                    <td><strong>Campanha Black Friday</strong></td>
                    <td>Marketing</td>
                    <td>22/07/2024</td>
                    <td style="color: var(--danger-color);">- R$ 1.500,00</td>
                    <td><span style="background: var(--warning-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Pendente</span></td>
                  </tr>
                  <tr>
                    <td><strong>Venda Produtos</strong></td>
                    <td>Receita</td>
                    <td>21/07/2024</td>
                    <td style="color: var(--success-color);">+ R$ 2.100,00</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Pago</span></td>
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

export default financeiroModule;
