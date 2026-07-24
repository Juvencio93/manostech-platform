import { empresaService } from '../../services/empresa.service.js';

const empresasModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    try {
      const empresas = await empresaService.getAllEmpresas();
      
      contentArea.innerHTML = `
        <div class="fade-in">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
            <h2 style="margin: 0;">Empresas</h2>
            <button class="btn btn-primary" id="novaEmpresaBtn">+ Nova Empresa</button>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>CNPJ</th>
                      <th>Telefone</th>
                      <th>Email</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody id="empresasBody">
                    <tr><td colspan="6" style="text-align: center; color: var(--text-light);">Nenhuma empresa encontrada</td></tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;

      document.getElementById('novaEmpresaBtn')?.addEventListener('click', () => {
        alert('Implementar modal de nova empresa');
      });
    } catch (error) {
      console.error('Erro ao carregar empresas:', error);
      contentArea.innerHTML = '<p style="color: var(--danger-color);">Erro ao carregar empresas</p>';
    }
  }
};

export default empresasModule;