export const form = {
  createFormGroup(options = {}) {
    const {
      label = '',
      name = '',
      type = 'text',
      placeholder = '',
      required = false,
      help = '',
      value = ''
    } = options;

    return `
      <div class="form-group ${required ? 'required' : ''}">
        <label for="${name}">${label}</label>
        <input
          type="${type}"
          id="${name}"
          name="${name}"
          placeholder="${placeholder}"
          value="${value}"
          ${required ? 'required' : ''}
        />
        ${help ? `<span class="form-help">${help}</span>` : ''}
      </div>
    `;
  },

  createFormRow(fields = []) {
    const fieldsHTML = fields.map(field => `
      <div class="form-group">
        <label>${field.label}</label>
        <input type="${field.type || 'text'}" placeholder="${field.placeholder || ''}" />
      </div>
    `).join('');

    return `<div class="form-row">${fieldsHTML}</div>`;
  }
};
