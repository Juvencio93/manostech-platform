const configuracoesModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <h1 style="margin-bottom: var(--spacing-xl);">⚙️ Configurações</h1>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: var(--spacing-lg);">
          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">👤 Perfil da Conta</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label>Email</label>
                <input type="email" value="${user.email || 'admin@manostech.com'}" readonly style="background: var(--light-bg);">
              </div>
              <div class="form-group">
                <label>Nome</label>
                <input type="text" placeholder="Seu nome completo">
              </div>
              <button class="btn btn-primary" onclick="alert('Perfil salvo com sucesso!')">Salvar Perfil</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">🔔 Notificações</h3>
            </div>
            <div class="card-body">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md); padding-bottom: var(--spacing-md); border-bottom: 1px solid var(--border-color);">
                <div>
                  <strong>Notificações por Email</strong>
                  <p style="font-size: 12px; color: var(--text-light); margin: 0;">Receber alertas por email</p>
                </div>
                <input type="checkbox" checked>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-md); padding-bottom: var(--spacing-md); border-bottom: 1px solid var(--border-color);">
                <div>
                  <strong>Novos Visitantes</strong>
                  <p style="font-size: 12px; color: var(--text-light); margin: 0;">Alertar ao registrar visitante</p>
                </div>
                <input type="checkbox" checked>
              </div>
              <div style="display: flex; justify-content: space-between; align-items: center;">
                <div>
                  <strong>Relatórios Semanais</strong>
                  <p style="font-size: 12px; color: var(--text-light); margin: 0;">Resumo toda segunda-feira</p>
                </div>
                <input type="checkbox">
              </div>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">🎨 Aparência</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label>Tema</label>
                <select>
                  <option value="light" selected>☀️ Claro</option>
                  <option value="dark">🌙 Escuro</option>
                </select>
              </div>
              <div class="form-group">
                <label>Idioma</label>
                <select>
                  <option value="pt-BR" selected>🇧🇷 Português (Brasil)</option>
                  <option value="en">🇺🇸 English</option>
                  <option value="es">🇪🇸 Español</option>
                </select>
              </div>
              <button class="btn btn-primary" onclick="alert('Aparência salva com sucesso!')">Salvar</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">🔒 Segurança</h3>
            </div>
            <div class="card-body">
              <div class="form-group">
                <label>Senha Atual</label>
                <input type="password" placeholder="••••••••">
              </div>
              <div class="form-group">
                <label>Nova Senha</label>
                <input type="password" placeholder="••••••••">
              </div>
              <div class="form-group">
                <label>Confirmar Nova Senha</label>
                <input type="password" placeholder="••••••••">
              </div>
              <button class="btn btn-primary" onclick="alert('Senha alterada com sucesso!')">Alterar Senha</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default configuracoesModule;
