export const alert = {
  create(options = {}) {
    const {
      message = '',
      type = 'info', // info, success, warning, danger
      dismissible = true,
      id = 'alert-' + Date.now()
    } = options;

    const colors = {
      info: 'var(--primary-color)',
      success: 'var(--success-color)',
      warning: 'var(--warning-color)',
      danger: 'var(--danger-color)'
    };

    return `
      <div id="${id}" style="
        background-color: ${colors[type]}20;
        border: 1px solid ${colors[type]};
        border-radius: var(--radius-lg);
        padding: var(--spacing-lg);
        color: ${colors[type]};
        margin-bottom: var(--spacing-lg);
        display: flex;
        justify-content: space-between;
        align-items: center;
      ">
        <span>${message}</span>
        ${dismissible ? `<button class="btn btn-ghost" onclick="document.getElementById('${id}').remove()">✕</button>` : ''}
      </div>
    `;
  }
};
