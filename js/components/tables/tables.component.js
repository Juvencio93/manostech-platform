export const table = {
  create(options = {}) {
    const {
      columns = [],
      rows = [],
      striped = true,
      bordered = false,
      compact = false,
      responsive = true
    } = options;

    let className = 'table';
    if (striped) className += ' table-striped';
    if (bordered) className += ' table-bordered';
    if (compact) className += ' table-compact';

    let html = responsive ? '<div class="table-responsive">' : '';
    html += `<table class="${className}">`;
    html += '<thead><tr>';

    columns.forEach(col => {
      html += `<th>${col.label || col}</th>`;
    });

    html += '</tr></thead><tbody>';

    rows.forEach(row => {
      html += '<tr>';
      columns.forEach(col => {
        const key = col.key || col;
        html += `<td>${row[key] || ''}</td>`;
      });
      html += '</tr>';
    });

    html += '</tbody></table>';
    if (responsive) html += '</div>';

    return html;
  }
};
