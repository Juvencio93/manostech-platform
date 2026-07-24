const perfilModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    const user = JSON.parse(localStorage.getItem('user') || '{}');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <h1 style="margin-bottom: var(--spacing-xl);">👤 Meu Perfil</h1>

        <div style="display: grid; grid-template-columns: 1fr 2fr; gap: var(--spacing-lg);">
          <div class="card" style="text-align: center;">
            <div class="card-body" style="padding: var(--spacing-2xl);">
              <div style="width: 100px; height: 100px; background: var(--primary-color); border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto var(--spacing-lg);">
                <span style="font-size: 40px; color: white;">👤</span>
              </div>
              <h3 style="margin-bottom: var(--spacing-sm);">${user.email ? user.email.split('@')[0] : 'Usuário'}</h3>
              <p style="color: var(--text-light); margin-bottom: var(--spacing-lg);">${user.email || 'usuario@manostech.com'}</p>
              <span style="background: var(--primary-color); color: white; padding: 4px 12px; border-radius: 20px; font-size: 12px;">
                ${user.role === 'admin' ? '🔑 Administrador' : '👤 Usuário'}
              </span>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">📝 Informações Pessoais</h3>
            </div>
            <div class="card-body">
              <div class="form-row">
                <div class="form-group">
                  <label>Nome</label>
                  <input type="text" placeholder="Seu nome">
                </div>
                <div class="form-group">
                  <label>Sobrenome</label>
                  <input type="text" placeholder="Seu sobrenome">
                </div>
              </div>
              <div class="form-group">
                <label>Email</label>
                <input type="email" value="${user.email || ''}" readonly style="background: var(--light-bg);">
              </div>
              <div class="form-group">
                <label>Telefone</label>
                <input type="tel" placeholder="(11) 99999-9999">
              </div>
              <div class="form-group">
                <label>Cargo</label>
                <input type="text" placeholder="Seu cargo">
              </div>
              <button class="btn btn-primary" onclick="alert('Perfil atualizado com sucesso!')">Salvar Alterações</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default perfilModule;
