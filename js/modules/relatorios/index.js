const relatoriosModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div class="fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
          <h2 style="margin: 0;">Relatórios</h2>
          <button class="btn btn-primary" id="gerarRelatorioBtn">+ Gerar Relatório</button>
        </div>

        <div class="card">
          <div class="card-body">
            <p style="color: var(--text-light);">Módulo de relatórios em desenvolvimento...</p>
          </div>
        </div>
      </div>
    `;
  }
};

export default relatoriosModule;