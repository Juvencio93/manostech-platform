export const button = {
  create(options = {}) {
    const {
      label = 'Button',
      type = 'primary',
      size = 'md',
      disabled = false,
      onClick = '',
      id = '',
      className = ''
    } = options;

    let btnClass = `btn btn-${type}`;
    if (size !== 'md') btnClass += ` btn-${size}`;
    if (className) btnClass += ` ${className}`;

    return `
      <button
        class="${btnClass}"
        ${disabled ? 'disabled' : ''}
        ${onClick ? `onclick="${onClick}"` : ''}
        ${id ? `id="${id}"` : ''}
      >
        ${label}
      </button>
    `;
  }
};
