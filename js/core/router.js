// Roteador simples para SPA
export const router = {
  routes: {},
  currentRoute: null,

  register(path, handler) {
    this.routes[path] = handler;
  },

  async navigate(path) {
    if (this.routes[path]) {
      this.currentRoute = path;
      await this.routes[path]();
    } else {
      console.warn(`Rota não encontrada: ${path}`);
    }
  },

  init() {
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1) || '/';
      this.navigate(path);
    });

    // Navegar para rota inicial
    const initialPath = window.location.hash.slice(1) || '/';
    this.navigate(initialPath);
  },
};

export default router;