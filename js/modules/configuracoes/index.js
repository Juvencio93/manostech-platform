const configuracoesModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div class="fade-in">
        <h2>Configurações</h2>
        
        <div class="card mb-lg">
          <div class="card-header">
            <h3 style="margin: 0;">Geral</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Nome da Plataforma</label>
              <input type="text" value="ManosTech Platform" />
            </div>
            <div class="form-group">
              <label>Email de Suporte</label>
              <input type="email" value="support@manostech.com" />
            </div>
            <button class="btn btn-primary">Salvar Alterações</button>
          </div>
        </div>

        <div class="card">
          <div class="card-header">
            <h3 style="margin: 0;">Backup e Segurança</h3>
          </div>
          <div class="card-body">
            <button class="btn btn-secondary mb-md">Fazer Backup</button>
            <button class="btn btn-ghost">Restaurar Backup</button>
          </div>
        </div>
      </div>
    `;
  }
};

export default configuracoesModule;