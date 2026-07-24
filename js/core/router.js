// Roteador SPA com suporte a modules
import { auth } from './auth.js';
import dashboardModule from '../modules/dashboard/index.js';
import eventosModule from '../modules/eventos/index.js';
import empresasModule from '../modules/empresas/index.js';
import unidadesModule from '../modules/unidades/index.js';
import usuariosModule from '../modules/usuarios/index.js';
import funcionariosModule from '../modules/funcionarios/index.js';
import visitantesModule from '../modules/visitantes/index.js';
import campanhasModule from '../modules/campanhas/index.js';
import relatoriosModule from '../modules/relatorios/index.js';
import financeiroModule from '../modules/financeiro/index.js';
import configuracoesModule from '../modules/configuracoes/index.js';
import perfilModule from '../modules/perfil/index.js';
import marketingLocalModule from '../modules/marketing-local/index.js';

const routes = {
  '/': {
    layout: 'dashboard',
    module: 'dashboard',
    title: 'Dashboard',
    requireAuth: true
  },
  '/dashboard': {
    layout: 'dashboard',
    module: 'dashboard',
    title: 'Dashboard',
    requireAuth: true
  },
  '/eventos': {
    layout: 'dashboard',
    module: 'eventos',
    title: 'Eventos',
    requireAuth: true
  },
  '/empresas': {
    layout: 'dashboard',
    module: 'empresas',
    title: 'Empresas',
    requireAuth: true
  },
  '/unidades': {
    layout: 'dashboard',
    module: 'unidades',
    title: 'Unidades',
    requireAuth: true
  },
  '/usuarios': {
    layout: 'dashboard',
    module: 'usuarios',
    title: 'Usuários',
    requireAuth: true
  },
  '/funcionarios': {
    layout: 'dashboard',
    module: 'funcionarios',
    title: 'Funcionários',
    requireAuth: true
  },
  '/visitantes': {
    layout: 'dashboard',
    module: 'visitantes',
    title: 'Visitantes',
    requireAuth: true
  },
  '/campanhas': {
    layout: 'dashboard',
    module: 'campanhas',
    title: 'Campanhas',
    requireAuth: true
  },
  '/relatorios': {
    layout: 'dashboard',
    module: 'relatorios',
    title: 'Relatórios',
    requireAuth: true
  },
  '/financeiro': {
    layout: 'dashboard',
    module: 'financeiro',
    title: 'Financeiro',
    requireAuth: true
  },
  '/configuracoes': {
    layout: 'dashboard',
    module: 'configuracoes',
    title: 'Configurações',
    requireAuth: true
  },
  '/perfil': {
    layout: 'dashboard',
    module: 'perfil',
    title: 'Meu Perfil',
    requireAuth: true
  },
  '/login': {
    layout: 'auth',
    module: null,
    title: 'Login',
    requireAuth: false
  },
  '/portal': {
    layout: 'portal',
    module: 'marketing-local',
    title: 'Portal',
    requireAuth: false
  }
};

const modules = {
  'dashboard': dashboardModule,
  'eventos': eventosModule,
  'empresas': empresasModule,
  'unidades': unidadesModule,
  'usuarios': usuariosModule,
  'funcionarios': funcionariosModule,
  'visitantes': visitantesModule,
  'campanhas': campanhasModule,
  'relatorios': relatoriosModule,
  'financeiro': financeiroModule,
  'configuracoes': configuracoesModule,
  'perfil': perfilModule,
  'marketing-local': marketingLocalModule
};

export const router = {
  currentLayout: null,

  async loadLayout(layoutName) {
    // Only reload the layout if it changed (avoids duplicate event listeners)
    if (this.currentLayout === layoutName) {
      return;
    }
    try {
      const response = await fetch(`./layouts/${layoutName}.html`);
      if (!response.ok) throw new Error(`Layout ${layoutName} não encontrado`);
      const html = await response.text();
      const appEl = document.getElementById('app');
      appEl.innerHTML = html;

      // Re-execute scripts injected via innerHTML (browser skips them by default)
      for (const oldScript of appEl.querySelectorAll('script')) {
        const newScript = document.createElement('script');
        newScript.type = oldScript.type || 'text/javascript';
        if (oldScript.src) {
          newScript.src = oldScript.src;
        } else {
          newScript.textContent = oldScript.textContent;
        }
        oldScript.parentNode.replaceChild(newScript, oldScript);
      }

      this.currentLayout = layoutName;
      console.log(`✅ Layout ${layoutName} carregado`);
    } catch (error) {
      console.error('Erro ao carregar layout:', error);
      document.getElementById('app').innerHTML = `
        <div style="padding: 20px; color: red;">
          <h2>Erro ao carregar layout</h2>
          <p>${error.message}</p>
        </div>
      `;
    }
  },

  async loadModule(moduleName) {
    try {
      const module = modules[moduleName];
      if (!module) {
        throw new Error(`Módulo ${moduleName} não encontrado`);
      }
      await module.init();
      console.log(`✅ Módulo ${moduleName} carregado`);
    } catch (error) {
      console.error('Erro ao carregar módulo:', error);
      const contentArea = document.getElementById('contentArea');
      if (contentArea) {
        contentArea.innerHTML = `
          <div style="padding: 20px; color: red;">
            <h2>Erro ao carregar módulo</h2>
            <p>${error.message}</p>
          </div>
        `;
      }
    }
  },

  async navigate(path) {
    try {
      console.log(`📍 Navegando para: ${path}`);
      
      const route = routes[path] || routes['/login'];

      // Verificar autenticação para rotas protegidas
      if (route.requireAuth && !auth.checkAuth()) {
        window.location.hash = '#/login';
        return;
      }

      // Redirecionar usuário autenticado que tenta acessar login
      if (path === '/login' && auth.checkAuth()) {
        window.location.hash = '#/dashboard';
        return;
      }
      
      // Carregar layout
      await this.loadLayout(route.layout);
      
      // Carregar módulo se houver
      if (route.module) {
        await this.loadModule(route.module);
      }
      
      // Atualizar título
      document.title = `${route.title} - ManosTech`;
      
    } catch (error) {
      console.error('Erro ao navegar:', error);
    }
  },

  initialize() {
    console.log('🔄 Inicializando roteador...');
    
    // Moniterar mudanças de hash
    window.addEventListener('hashchange', () => {
      const path = window.location.hash.slice(1) || '/';
      this.navigate(path);
    });
    
    // Navegar para rota inicial
    const initialPath = window.location.hash.slice(1) || '/dashboard';
    this.navigate(initialPath);
  }
};
