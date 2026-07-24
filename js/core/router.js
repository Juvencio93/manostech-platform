import { loadLayout } from './layout-loader.js';

const routes = {
  '/login': {
    layout: 'auth',
    title: 'Login - ManosTech Platform'
  },
  '/dashboard': {
    layout: 'dashboard',
    module: 'dashboard',
    title: 'Dashboard - ManosTech Platform'
  },
  '/eventos': {
    layout: 'dashboard',
    module: 'eventos',
    title: 'Eventos - ManosTech Platform'
  },
  '/empresas': {
    layout: 'dashboard',
    module: 'empresas',
    title: 'Empresas - ManosTech Platform'
  },
  '/unidades': {
    layout: 'dashboard',
    module: 'unidades',
    title: 'Unidades - ManosTech Platform'
  },
  '/usuarios': {
    layout: 'dashboard',
    module: 'usuarios',
    title: 'Usuários - ManosTech Platform'
  },
  '/funcionarios': {
    layout: 'dashboard',
    module: 'funcionarios',
    title: 'Funcionários - ManosTech Platform'
  },
  '/marketing': {
    layout: 'dashboard',
    module: 'marketing-local',
    title: 'Marketing Local - ManosTech Platform'
  },
  '/visitantes': {
    layout: 'dashboard',
    module: 'marketing-local',
    title: 'Visitantes - ManosTech Platform'
  },
  '/campanhas': {
    layout: 'dashboard',
    module: 'marketing-local',
    title: 'Campanhas - ManosTech Platform'
  },
  '/portal': {
    layout: 'portal',
    module: 'marketing-local',
    title: 'Portal - ManosTech Platform'
  },
  '/relatorios': {
    layout: 'dashboard',
    module: 'relatorios',
    title: 'Relatórios - ManosTech Platform'
  },
  '/financeiro': {
    layout: 'dashboard',
    module: 'financeiro',
    title: 'Financeiro - ManosTech Platform'
  },
  '/configuracoes': {
    layout: 'dashboard',
    module: 'configuracoes',
    title: 'Configurações - ManosTech Platform'
  },
  '/perfil': {
    layout: 'dashboard',
    module: 'perfil',
    title: 'Perfil - ManosTech Platform'
  }
};

export const router = {
  initialize() {
    // Escutar mudanças de hash
    window.addEventListener('hashchange', () => this.handleRoute());
    
    // Lidar com rota inicial
    this.handleRoute();
  },

  async handleRoute() {
    const hash = window.location.hash.slice(1) || '/dashboard';
    const route = routes[hash] || routes['/dashboard'];

    // Atualizar título
    document.title = route.title;

    // Carregar layout
    const layout = await loadLayout(route.layout);
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = layout;

    // Carregar módulo se existir
    if (route.module) {
      this.loadModule(route.module);
    }
  },

  async loadModule(moduleName) {
    try {
      const module = await import(`../modules/${moduleName}/index.js`);
      if (module.default && typeof module.default.init === 'function') {
        module.default.init();
      }
    } catch (error) {
      console.error(`Erro ao carregar módulo ${moduleName}:`, error);
    }
  },

  navigate(path) {
    window.location.hash = path;
  }
};