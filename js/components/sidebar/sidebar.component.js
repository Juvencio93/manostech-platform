export const sidebar = {
  create(menuItems = []) {
    const defaultItems = [
      { label: '📊 Dashboard', href: '#/dashboard', icon: '📊' },
      { label: '🎉 Eventos', href: '#/eventos', icon: '🎉' },
      { label: '🏢 Empresas', href: '#/empresas', icon: '🏢' },
      { label: '🏪 Unidades', href: '#/unidades', icon: '🏪' },
      { label: '👥 Usuários', href: '#/usuarios', icon: '👥' },
      { label: '👔 Funcionários', href: '#/funcionarios', icon: '👔' },
      { label: '👁️ Visitantes', href: '#/visitantes', icon: '👁️' },
      { label: '📢 Campanhas', href: '#/campanhas', icon: '📢' },
      { label: '📊 Relatórios', href: '#/relatorios', icon: '📊' },
      { label: '💰 Financeiro', href: '#/financeiro', icon: '💰' },
      { label: '⚙️ Configurações', href: '#/configuracoes', icon: '⚙️' },
      { label: '👤 Meu Perfil', href: '#/perfil', icon: '👤' }
    ];

    const items = menuItems.length > 0 ? menuItems : defaultItems;
    const menuHTML = items.map(item => `
      <li>
        <a href="${item.href}" class="nav-link" data-module="${item.module || item.label.toLowerCase()}">
          ${item.label}
        </a>
      </li>
    `).join('');

    return `
      <aside class="sidebar">
        <div class="sidebar-logo">ManosTech</div>
        <nav>
          <ul class="sidebar-menu">
            ${menuHTML}
          </ul>
        </nav>
      </aside>
    `;
  }
};
