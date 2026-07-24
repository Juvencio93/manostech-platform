const perfilModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div class="fade-in">
        <h2>Meu Perfil</h2>
        
        <div class="card">
          <div class="card-body">
            <div class="form-row">
              <div class="form-group">
                <label>Nome Completo</label>
                <input type="text" value="Usuário Admin" />
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" value="admin@manostech.com" />
              </div>
            </div>
            
            <div class="form-row">
              <div class="form-group">
                <label>Telefone</label>
                <input type="tel" value="(11) 9999-9999" />
              </div>
              <div class="form-group">
                <label>Cargo</label>
                <input type="text" value="Administrador" disabled />
              </div>
            </div>

            <button class="btn btn-primary">Salvar Alterações</button>
          </div>
        </div>

        <div class="card mt-lg">
          <div class="card-header">
            <h3 style="margin: 0;">Alterar Senha</h3>
          </div>
          <div class="card-body">
            <div class="form-group">
              <label>Senha Atual</label>
              <input type="password" />
            </div>
            <div class="form-group">
              <label>Nova Senha</label>
              <input type="password" />
            </div>
            <div class="form-group">
              <label>Confirmar Senha</label>
              <input type="password" />
            </div>
            <button class="btn btn-primary">Alterar Senha</button>
          </div>
        </div>
      </div>
    `;
  }
};

export default perfilModule;