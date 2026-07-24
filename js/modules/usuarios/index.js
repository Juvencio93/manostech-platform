const usuariosModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xl);">
          <h1 style="margin: 0;">👥 Usuários</h1>
          <button class="btn btn-primary">+ Novo Usuário</button>
        </div>

        <div class="card">
          <div class="card-body" style="padding: 0;">
            <div class="table-responsive">
              <table class="table table-striped">
                <thead>
                  <tr>
                    <th>Nome</th>
                    <th>Email</th>
                    <th>Perfil</th>
                    <th>Unidade</th>
                    <th>Status</th>
                    <th>Ações</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td><strong>Admin Master</strong></td>
                    <td>admin@manostech.com</td>
                    <td>Administrador</td>
                    <td>Todas</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Ativo</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>João Silva</strong></td>
                    <td>joao@manostech.com</td>
                    <td>Gerente</td>
                    <td>Unidade Centro</td>
                    <td><span style="background: var(--success-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Ativo</span></td>
                    <td>
                      <button class="btn btn-sm btn-ghost">Editar</button>
                    </td>
                  </tr>
                  <tr>
                    <td><strong>Maria Santos</strong></td>
                    <td>maria@manostech.com</td>
                    <td>Operador</td>
                    <td>Unidade Norte</td>
                    <td><span style="background: var(--warning-color); color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px;">Inativo</span></td>
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

export default usuariosModule;
