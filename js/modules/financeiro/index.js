const financeiroModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    contentArea.innerHTML = `
      <div class="fade-in">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
          <h2 style="margin: 0;">Financeiro</h2>
          <button class="btn btn-primary" id="novaTransacaoBtn">+ Nova Transação</button>
        </div>

        <div class="card">
          <div class="card-body">
            <p style="color: var(--text-light);">Módulo de financeiro em desenvolvimento...</p>
          </div>
        </div>
      </div>
    `;
  }
};

export default financeiroModule;