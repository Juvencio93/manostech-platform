const unidadesModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');

    contentArea.innerHTML = `
      <div style="animation: slideInUp 0.3s ease-out;">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-xl);">
          <h1 style="margin: 0;">🏬 Unidades</h1>
          <button class="btn btn-primary">+ Nova Unidade</button>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: var(--spacing-lg);">
          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">Unidade Centro</h3>
            </div>
            <div class="card-body">
              <p><strong>Endereço:</strong> Rua das Flores, 100</p>
              <p><strong>Cidade:</strong> São Paulo / SP</p>
              <p><strong>Responsável:</strong> João Silva</p>
              <p><strong>Status:</strong> <span style="color: var(--success-color);">● Ativa</span></p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Ver Detalhes</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">Unidade Norte</h3>
            </div>
            <div class="card-body">
              <p><strong>Endereço:</strong> Av. Paulista, 500</p>
              <p><strong>Cidade:</strong> São Paulo / SP</p>
              <p><strong>Responsável:</strong> Maria Santos</p>
              <p><strong>Status:</strong> <span style="color: var(--success-color);">● Ativa</span></p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Ver Detalhes</button>
            </div>
          </div>

          <div class="card">
            <div class="card-header">
              <h3 style="margin: 0;">Unidade Sul</h3>
            </div>
            <div class="card-body">
              <p><strong>Endereço:</strong> Rua da Liberdade, 200</p>
              <p><strong>Cidade:</strong> São Paulo / SP</p>
              <p><strong>Responsável:</strong> Carlos Lima</p>
              <p><strong>Status:</strong> <span style="color: var(--warning-color);">● Em manutenção</span></p>
            </div>
            <div class="card-footer">
              <button class="btn btn-sm btn-ghost">Editar</button>
              <button class="btn btn-sm btn-ghost">Ver Detalhes</button>
            </div>
          </div>
        </div>
      </div>
    `;
  }
};

export default unidadesModule;
