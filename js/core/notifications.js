export const toast = {
  show(message, type = 'info', duration = 3000) {
    const toastContainer = document.getElementById('toastContainer') || this.createContainer();
    
    const toast = document.createElement('div');
    toast.className = `toast toast-${type} fade-in`;
    toast.style.cssText = `
      background-color: ${this.getColor(type)};
      color: white;
      padding: var(--spacing-lg);
      border-radius: var(--radius-lg);
      margin-bottom: var(--spacing-md);
      box-shadow: var(--shadow-lg);
      animation: slideInUp var(--transition-base) ease-out;
    `;
    toast.textContent = message;
    
    toastContainer.appendChild(toast);
    
    if (duration) {
      setTimeout(() => {
        toast.remove();
      }, duration);
    }
  },

  success(message, duration = 3000) {
    this.show(message, 'success', duration);
  },

  error(message, duration = 5000) {
    this.show(message, 'error', duration);
  },

  warning(message, duration = 4000) {
    this.show(message, 'warning', duration);
  },

  info(message, duration = 3000) {
    this.show(message, 'info', duration);
  },

  getColor(type) {
    const colors = {
      success: 'var(--success-color)',
      error: 'var(--danger-color)',
      warning: 'var(--warning-color)',
      info: 'var(--primary-color)'
    };
    return colors[type] || colors.info;
  },

  createContainer() {
    const container = document.createElement('div');
    container.id = 'toastContainer';
    container.style.cssText = `
      position: fixed;
      top: var(--spacing-lg);
      right: var(--spacing-lg);
      z-index: 1000;
      max-width: 400px;
    `;
    document.body.appendChild(container);
    return container;
  }
};
