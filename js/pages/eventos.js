import { eventosModule } from '../modules/eventos/eventos.js';

async function initEventos() {
  try {
    const eventos = await eventosModule.getAllEventos();
    const tbody = document.getElementById('eventosBody');
    
    eventos.forEach(evento => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${evento.nome}</td>
        <td>${new Date(evento.data).toLocaleDateString('pt-BR')}</td>
        <td>${evento.unidade || 'N/A'}</td>
        <td><span class="status status-${evento.status}">${evento.status}</span></td>
        <td>
          <button class="btn btn-sm" onclick="editEventos(${evento.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="deleteEventos(${evento.id})">Deletar</button>
        </td>
      `;
      tbody.appendChild(row);
    });

    document.getElementById('novoEventoBtn').addEventListener('click', () => {
      alert('Implementar modal de novo evento');
    });
  } catch (error) {
    console.error('Erro ao carregar eventos:', error);
  }
}

window.editEventos = (id) => {
  alert('Editar evento ' + id);
};

window.deleteEventos = (id) => {
  if (confirm('Deseja deletar este evento?')) {
    alert('Evento deletado');
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initEventos);
} else {
  initEventos();
}
