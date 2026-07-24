import { session } from './core/session.js';
import { router } from './core/router.js';
import { auth } from './core/auth.js';

// Import modules
import dashboardModule from './modules/dashboard/dashboard.js';
import eventosModule from './modules/eventos/eventos.js';
import lojasModule from './modules/lojas/lojas.js';
import visitantesModule from './modules/visitantes/visitantes.js';
import marketingModule from './modules/marketing/marketing.js';
import funcionariosModule from './modules/funcionarios/funcionarios.js';
import financeiroModule from './modules/financeiro/financeiro.js';
import relatoriosModule from './modules/relatorios/relatorios.js';
import portalModule from './modules/portal/portal.js';
import configuracoesModule from './modules/configuracoes/configuracoes.js';

// App initialization
const app = {
  modules: {
    dashboard: dashboardModule,
    eventos: eventosModule,
    lojas: lojasModule,
    visitantes: visitantesModule,
    marketing: marketingModule,
    funcionarios: funcionariosModule,
    financeiro: financeiroModule,
    relatorios: relatoriosModule,
    portal: portalModule,
    configuracoes: configuracoesModule,
  },

  async init() {
    console.log('Inicializando ManosTech Platform...');
    
    // Initialize session
    await session.init();

    // Register routes
    this.registerRoutes();

    // Initialize router
    router.init();

    console.log('ManosTech Platform iniciado com sucesso!');
  },

  registerRoutes() {
    // Auth routes
    router.register('/login', this.pages.login);
    router.register('/signup', this.pages.signup);
    router.register('/logout', this.pages.logout);

    // Main routes
    router.register('/', this.pages.dashboard);
    router.register('/dashboard', this.pages.dashboard);
    router.register('/eventos', this.pages.eventos);
    router.register('/lojas', this.pages.lojas);
    router.register('/visitantes', this.pages.visitantes);
    router.register('/marketing', this.pages.marketing);
    router.register('/funcionarios', this.pages.funcionarios);
    router.register('/financeiro', this.pages.financeiro);
    router.register('/relatorios', this.pages.relatorios);
    router.register('/configuracoes', this.pages.configuracoes);
  },

  pages: {
    login() {
      window.location.href = 'pages/login.html';
    },
    signup() {
      window.location.href = 'pages/signup.html';
    },
    logout() {
      auth.logout();
      window.location.href = 'pages/login.html';
    },
    dashboard() {
      document.getElementById('app').innerHTML = '<h1>Dashboard</h1><p>Carregando...</p>';
    },
    eventos() {
      document.getElementById('app').innerHTML = '<h1>Eventos</h1><p>Carregando...</p>';
    },
    lojas() {
      document.getElementById('app').innerHTML = '<h1>Lojas</h1><p>Carregando...</p>';
    },
    visitantes() {
      document.getElementById('app').innerHTML = '<h1>Visitantes</h1><p>Carregando...</p>';
    },
    marketing() {
      document.getElementById('app').innerHTML = '<h1>Marketing</h1><p>Carregando...</p>';
    },
    funcionarios() {
      document.getElementById('app').innerHTML = '<h1>Funcionários</h1><p>Carregando...</p>';
    },
    financeiro() {
      document.getElementById('app').innerHTML = '<h1>Financeiro</h1><p>Carregando...</p>';
    },
    relatorios() {
      document.getElementById('app').innerHTML = '<h1>Relatórios</h1><p>Carregando...</p>';
    },
    configuracoes() {
      document.getElementById('app').innerHTML = '<h1>Configurações</h1><p>Carregando...</p>';
    },
  },
};

// Start app when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => app.init());
} else {
  app.init();
}

export default app;