import { lojasModule } from '../modules/lojas/lojas.js';

async function initLojas() {
  try {
    const lojas = await lojasModule.getAllLojas();
    const tbody = document.getElementById('lojasBody');
    
    lojas.forEach(loja => {
      const row = document.createElement('tr');
      row.innerHTML = `
        <td>${loja.nome}</td>
        <td>${loja.endereco || 'N/A'}</td>
        <td>${loja.cidade || 'N/A'}</td>
        <td><span class="status status-${loja.status}">${loja.status}</span></td>
        <td>
          <button class="btn btn-sm" onclick="editLoja(${loja.id})">Editar</button>
          <button class="btn btn-sm btn-danger" onclick="deleteLoja(${loja.id})">Deletar</button>
        </td>
      `;
      tbody.appendChild(row);
    });

    document.getElementById('novaLojaBtn').addEventListener('click', () => {
      alert('Implementar modal de nova loja');
    });
  } catch (error) {
    console.error('Erro ao carregar lojas:', error);
  }
}

window.editLoja = (id) => {
  alert('Editar loja ' + id);
};

window.deleteLoja = (id) => {
  if (confirm('Deseja deletar esta loja?')) {
    alert('Loja deletada');
  }
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initLojas);
} else {
  initLojas();
}
