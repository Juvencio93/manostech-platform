import { eventoService } from '../../services/evento.service.js';

const eventosModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    try {
      const eventos = await eventoService.getAllEventos();
      
      contentArea.innerHTML = `
        <div class="fade-in">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: var(--spacing-lg);">
            <h2 style="margin: 0;">Eventos</h2>
            <button class="btn btn-primary" id="novoEventoBtn">+ Novo Evento</button>
          </div>

          <div class="card">
            <div class="card-body">
              <div class="table-responsive">
                <table class="table table-striped" id="eventosTable">
                  <thead>
                    <tr>
                      <th>Nome</th>
                      <th>Data</th>
                      <th>Unidade</th>
                      <th>Status</th>
                      <th>Ações</th>
                    </tr>
                  </thead>
                  <tbody id="eventosBody">
                    ${eventos.length === 0 ? '<tr><td colspan="5" style="text-align: center; color: var(--text-light);">Nenhum evento encontrado</td></tr>' : ''}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      `;

      // Preencher tabela com eventos
      eventos.forEach(evento => {
        const row = document.createElement('tr');
        row.innerHTML = `
          <td>${evento.nome}</td>
          <td>${new Date(evento.data).toLocaleDateString('pt-BR')}</td>
          <td>${evento.unidade || 'N/A'}</td>
          <td><span style="background-color: var(--success-color); color: white; padding: 4px 8px; border-radius: 4px;">${evento.status}</span></td>
          <td>
            <button class="btn btn-sm" onclick="console.log('Editar evento', ${evento.id})">Editar</button>
            <button class="btn btn-sm btn-danger" onclick="console.log('Deletar evento', ${evento.id})">Deletar</button>
          </td>
        `;
        document.getElementById('eventosBody')?.appendChild(row);
      });

      document.getElementById('novoEventoBtn')?.addEventListener('click', () => {
        alert('Implementar modal de novo evento');
      });
    } catch (error) {
      console.error('Erro ao carregar eventos:', error);
      contentArea.innerHTML = '<p style="color: var(--danger-color);">Erro ao carregar eventos</p>';
    }
  }
};

export default eventosModule;