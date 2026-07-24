export const footer = {
  create(companyName = 'ManosTech Platform', year = 2024) {
    return `
      <footer class="footer">
        <p>&copy; ${year} ${companyName}. Todos os direitos reservados.</p>
        <p style="font-size: 0.8rem; opacity: 0.7;">Versão 1.0.0 | Desenvolvido com ❤️</p>
      </footer>
    `;
  }
};
