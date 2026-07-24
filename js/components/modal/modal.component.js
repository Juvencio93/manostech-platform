export const modal = {
  create(options = {}) {
    const {
      id = 'modal-' + Date.now(),
      title = '',
      content = '',
      footer = '',
      size = 'md' // sm, md, lg, xl
    } = options;

    const widths = {
      sm: '400px',
      md: '600px',
      lg: '800px',
      xl: '1000px'
    };

    return `
      <div id="${id}" class="modal" style="display: none; position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0,0,0,0.5); z-index: 1000; padding: var(--spacing-lg); display: flex; align-items: center; justify-content: center;">
        <div class="modal-content" style="background: white; border-radius: var(--radius-lg); width: 100%; max-width: ${widths[size]}; box-shadow: var(--shadow-xl);">
          <div class="modal-header" style="padding: var(--spacing-lg); border-bottom: 1px solid var(--border-color); display: flex; justify-content: space-between; align-items: center;">
            <h3 style="margin: 0;">${title}</h3>
            <button class="btn btn-icon btn-ghost" onclick="document.getElementById('${id}').style.display='none'" style="cursor: pointer;">✕</button>
          </div>
          <div class="modal-body" style="padding: var(--spacing-lg);">
            ${content}
          </div>
          ${footer ? `<div class="modal-footer" style="padding: var(--spacing-lg); border-top: 1px solid var(--border-color);">${footer}</div>` : ''}
        </div>
      </div>
    `;
  },

  show(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'flex';
  },

  hide(id) {
    const modal = document.getElementById(id);
    if (modal) modal.style.display = 'none';
  }
};
