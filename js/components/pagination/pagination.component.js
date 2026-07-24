export const pagination = {
  create(options = {}) {
    const {
      currentPage = 1,
      totalPages = 10,
      onPageChange = 'onPageChange'
    } = options;

    let html = '<div class="pagination" style="display: flex; gap: var(--spacing-sm); align-items: center;">';

    // Previous
    html += `<button class="btn btn-sm" ${currentPage === 1 ? 'disabled' : ''} onclick="${onPageChange}(${currentPage - 1})">← Anterior</button>`;

    // Pages
    for (let i = 1; i <= totalPages; i++) {
      if (i === currentPage) {
        html += `<span style="padding: var(--spacing-sm) var(--spacing-md); background: var(--primary-color); color: white; border-radius: var(--radius-md);">${i}</span>`;
      } else if (i >= currentPage - 2 && i <= currentPage + 2) {
        html += `<button class="btn btn-sm" onclick="${onPageChange}(${i})">${i}</button>`;
      }
    }

    // Next
    html += `<button class="btn btn-sm" ${currentPage === totalPages ? 'disabled' : ''} onclick="${onPageChange}(${currentPage + 1})">Próximo →</button>`;

    html += '</div>';
    return html;
  }
};
