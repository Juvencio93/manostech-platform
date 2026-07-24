const marketingLocalModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    const currentHash = window.location.hash;
    
    let view = 'visitantes';
    if (currentHash.includes('campanhas')) view = 'campanhas';
    if (currentHash.includes('portal')) view = 'portal';
    
    let content = '';
    
    if (view === 'visitantes') {
      content = `
        <div class="fade-in">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
            <h2 style="margin: 0;">Visitantes</h2>
            <button class="btn btn-primary" id="novoVisitanteBtn">+ Novo Visitante</button>
          </div>
          
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Email</th>
                      <th>Telefone</th>
                      <th>Última Visita</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td colspan="5" style="text-align: center; color: var(--text-light);">Nenhum visitante encontrado</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (view === 'campanhas') {
      content = `
        <div class="fade-in">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
            <h2 style="margin: 0;">Campanhas</h2>
            <button class="btn btn-primary" id="novaCampanhaBtn">+ Nova Campanha</button>
          </div>
          
          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Data Início</th>
                      <th>Data Fim</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr><td colspan="5" style="text-align: center; color: var(--text-light);">Nenhuma campanha encontrada</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;
    } else if (view === 'portal') {
      content = `
        <div class="fade-in">
          <h2>Portal de Visitantes</h2>
          <div class="card">
            <div class="card-body">
              <p style="color: var(--text-light);">Módulo de portal em desenvolvimento...</p>
            </div>
          </div>
        </div>
      `;
    }
    
    contentArea.innerHTML = content;
  }
};

export default marketingLocalModule;