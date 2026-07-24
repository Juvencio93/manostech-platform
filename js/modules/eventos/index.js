const eventosModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
          <h1 style="margin: 0;">🎉 Eventos</h1>
          <button class="btn btn-primary">+ Novo Evento</button>
        </div>

        <div class="card">
          <div class="card-body">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Data Início</th>
                    <th>Unidade</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Lançamento Produto X</strong></td>
                    <td>25/07/2024</td>
                    <td>Loja Centro</td>
                    <td><span style="background: var(--success-color); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Ativo</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
                      <button class="btn btn-sm btn-ghost">Deletar</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Black Friday</strong></td>
                    <td>29/11/2024</td>
                    <td>Todas</td>
                    <td><span style="background: var(--info-color); color: white; padding: 4px 8px; border-radius: 4px; font-size: 12px;">Planejado</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
                      <button class="btn btn-sm btn-ghost">Deletar</button>
                    </td>
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

export default eventosModule;
