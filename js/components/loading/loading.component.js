export const loading = {
  create(message = 'Carregando...') {
    return `
      <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; padding: var(--spacing-2xl);">
        <div style="
          width: 40px;
          height: 40px;
          border: 4px solid var(--gray-200);
          border-top: 4px solid var(--primary-color);
          border-radius: 50%;
          animation: spin 1s linear infinite;
          margin-bottom: var(--spacing-md);
        "></div>
        <p style="color: var(--text-light);">${message}</p>
      </div>
    `;
  },

  spinner() {
    return `
      <div style="
        display: inline-block;
        width: 20px;
        height: 20px;
        border: 3px solid var(--gray-200);
        border-top: 3px solid var(--primary-color);
        border-radius: 50%;
        animation: spin 1s linear infinite;
      "></div>
    `;
  }
};
