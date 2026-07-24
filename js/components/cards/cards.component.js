export const card = {
  create(options = {}) {
    const {
      title = '',
      content = '',
      footer = '',
      variant = 'default', // default, stat, primary, success, warning, danger
      className = ''
    } = options;

    let html = `<div class="card ${className}">`;

    if (title) {
      html += `<div class="card-header"><h3 style="margin: 0;">${title}</h3></div>`;
    }

    html += `<div class="card-body">${content}</div>`;

    if (footer) {
      html += `<div class="card-footer">${footer}</div>`;
    }

    html += '</div>';

    return html;
  },

  createStatCard(options = {}) {
    const {
      label = '',
      value = 0,
      footer = '',
      variant = 'default', // default, success, warning, danger
      icon = ''
    } = options;

    return `
      <div class="stat-card ${variant !== 'default' ? variant : ''}">
        <div class="stat-card-label">${icon ? icon + ' ' : ''}${label}</div>
        <div class="stat-card-value">${value}</div>
        ${footer ? `<div class="stat-card-footer">${footer}</div>` : ''}
      </div>
    `;
  }
};
