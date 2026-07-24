const empresasModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
          <h1 style="margin: 0;">🏢 Empresas</h1>
          <button class="btn btn-primary">+ Nova Empresa</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--spacing-lg);">
          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">Empresa Demo</h3>
            </div>
            <div class="card-body">
              <p><strong>CNPJ:</strong> 12.345.678/0001-90</p>
              <p><strong>Email:</strong> contato@demo.com</p>
              <p><strong>Telefone:</strong> (11) 3000-0000</p>
              <p><strong>Status:</strong> <span style="color: var(--success-color);">● Ativo</span></p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Deletar</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default empresasModule;
