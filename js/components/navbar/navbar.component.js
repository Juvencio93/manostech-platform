export const navbar = {
  create(title = 'Dashboard', user = {}) {
    return `
      <nav class="navbar">
        <div class="navbar-brand">
          <button class="btn btn-icon btn-ghost" id="toggleSidebarBtn" style="display: none;">
            ☰
          </button>
          <span id="pageTitle">${title}</span>
        </div>
        <div class="navbar-menu">
          <div style="display: flex; align-items: center; gap: var(--spacing-md);">
            <span id="userEmail" style="color: var(--text-light);">${user.email || 'usuario@example.com'}</span>
            <button class="btn btn-ghost" id="logoutBtn">Sair</button>
          </div>
        </div>
      </nav>
    `;
  }
};
