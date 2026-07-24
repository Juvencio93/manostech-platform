const funcionariosModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xl);">
          <h1 style="margin: 0;">👔 Funcionários</h1>
          <button class="btn btn-primary">+ Novo Funcionário</button>
        </div>

        <div class="card">
          <div class="card-body" style="padding: 0;">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Cargo</th>
                    <th>Unidade</th>
                    <th>Contratação</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Carlos Pereira</strong></td>
                    <td>Gerente de Loja</td>
                    <td>Unidade Centro</td>
                    <td>01/03/2022</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Ativo</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Ana Lima</strong></td>
                    <td>Atendente</td>
                    <td>Unidade Norte</td>
                    <td>15/06/2023</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Ativo</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Pedro Costa</strong></td>
                    <td>Supervisor</td>
                    <td>Unidade Sul</td>
                    <td>10/01/2021</td>
                    <td><span style="background: var(--warning-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Férias</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
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

export default funcionariosModule;
