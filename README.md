# ManosTech Platform 🚀

Plataforma completa para gerenciamento de eventos, marketing local e visitantes.

## 🎯 Características

- **SPA (Single Page Application)** - Navegação fluida sem recarregar página
- **Gerenciamento de Eventos** - Criar, editar e monitorar eventos
- **Marketing Local** - Campanhas, visitantes e promoções
- **Administração** - Gerenciar empresas, unidades e usuários
- **Relatórios** - Gerar relatórios completos em PDF, Excel e CSV
- **Financeiro** - Controlar receitas e despesas
- **Interface Responsiva** - Mobile-first design
- **Segurança** - Autenticação e autorização integradas

## 📁 Estrutura do Projeto

```
manostech-platform/
├── index.html                  # Entry point
├── assets/                     # Recursos estáticos
│   ├── css/                    # Estilos modulares
│   ├── fonts/                  # Fontes customizadas
│   ├── images/                 # Imagens
│   ├── icons/                  # Ícones
│   └── logos/                  # Logos
├── js/
│   ├── app.js                  # Inicialização principal
│   ├── core/                   # Sistema core
│   │   ├── router.js           # Roteamento SPA
│   │   ├── auth.js             # Autenticação
│   │   ├── session.js          # Gerenciamento de sessão
│   │   ├── storage.js          # LocalStorage
│   │   ├── api.js              # Cliente HTTP
│   │   ├── permissions.js      # Controle de permissões
│   │   ├── realtime.js         # Sistema realtime
│   │   ├── helpers.js          # Funções auxiliares
│   │   ├── utils.js            # Utilitários
│   │   ├── constants.js        # Constantes
│   │   ├── notifications.js    # Sistema de notificações
│   │   └── layout-loader.js    # Carregador de layouts
│   ├── services/               # Serviços de API
│   │   ├── dashboard.service.js
│   │   ├── empresa.service.js
│   │   ├── visitante.service.js
│   │   ├── evento.service.js
│   │   ├── campanha.service.js
│   │   ├── relatorio.service.js
│   │   └── supabase.service.js
│   ├── modules/                # Módulos da aplicação
│   │   ├── dashboard/
│   │   ├── eventos/
│   │   ├── empresas/
│   │   ├── unidades/
│   │   ├── usuarios/
│   │   ├── funcionarios/
│   │   ├── marketing-local/
│   │   ├── relatorios/
│   │   ├── financeiro/
│   │   ├── configuracoes/
│   │   └── perfil/
│   ├── components/             # Componentes reutilizáveis
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── cards/
│   │   ├── tables/
│   │   ├── forms/
│   │   ├── modal/
│   │   ├── buttons/
│   │   ├── pagination/
│   │   ├── loading/
│   │   └── alert/
│   ├── types/                  # Tipos de dados
│   └── layouts/                # Inicializadores de layout
├── layouts/                    # Templates HTML
│   ├── dashboard.html
│   ├── auth.html
│   └── portal.html
├── docs/                       # Documentação
├── supabase/                   # Configurações Supabase
├── scripts/                    # Scripts utilitários
├── .env.example                # Variáveis de ambiente
├── .gitignore
└── README.md
```

## 🚀 Quick Start

### Pré-requisitos
- Node.js 16+
- Git
- Conta Supabase (opcional)

### Instalação

```bash
# Clone o repositório
git clone https://github.com/Juvencio93/manostech-platform.git
cd manostech-platform

# Configure as variáveis de ambiente
cp .env.example .env

# Abra no navegador
open index.html
# ou use um servidor local
python -m http.server 8000
```

### Acesso Inicial

**URL:** `http://localhost:8000`

**Login Demo:**
- Email: `admin@manostech.com`
- Senha: `123456`

## 🔧 Desenvolvimento

### Adicionar Novo Módulo

1. Criar pasta em `js/modules/seu-modulo/`
2. Criar arquivo `index.js`:

```javascript
const seu_modulo = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = `<h2>Seu Módulo</h2>`;
  }
};

export default seu_modulo;
```

3. Adicionar rota em `js/core/router.js`:

```javascript
const routes = {
  '/seu-modulo': {
    layout: 'dashboard',
    module: 'seu-modulo',
    title: 'Seu Módulo'
  }
};
```

### Usar Componentes

```javascript
import { card } from '../../components/cards/cards.component.js';

const html = card.create({
  title: 'Meu Card',
  content: '<p>Conteúdo aqui</p>'
});

contentArea.innerHTML = html;
```

### Usar Serviços

```javascript
import { empresaService } from '../../services/empresa.service.js';

const empresas = await empresaService.getAllEmpresas();
```

## 🗄️ Banco de Dados (Supabase)

Ver documentação em `docs/banco.md` para:
- Configurar Supabase
- Executar migrações
- Estrutura de tabelas
- Políticas de segurança (RLS)

## 🔐 Autenticação

### Fluxo de Autenticação

1. Usuário faz login em `#/login`
2. Credenciais são validadas (Supabase)
3. Token JWT é armazenado no localStorage
4. Sessão é inicializada
5. Usuário é redirecionado para dashboard

### Proteger Rotas

```javascript
import { permissions } from '../../core/permissions.js';

if (!permissions.hasPermission(userRole, 'manage_usuarios')) {
  throw new Error('Acesso negado');
}
```

## 📊 Tipos de Dados

### Empresa
```javascript
import { Empresa } from '../../types/empresa.type.js';

const empresa = new Empresa({
  nome: 'Minha Empresa',
  cnpj: '12.345.678/0001-90',
  email: 'contato@empresa.com'
});
```

### Visitante
```javascript
import { Visitante } from '../../types/visitante.type.js';

const visitante = new Visitante({
  nome: 'João Silva',
  email: 'joao@email.com',
  telefone: '(11) 99999-9999'
});
```

## 🎨 Estilos

### Cores e Variáveis

Definidas em `assets/css/variables.css`:

```css
--primary-color: #1e40af;
--success-color: #16a34a;
--danger-color: #dc2626;
--warning-color: #ea580c;
```

### Classes Utilitárias

```html
<!-- Flexbox -->
<div class="d-flex align-center justify-between">

<!-- Espaçamento -->
<div class="mt-lg mb-md p-lg">

<!-- Texto -->
<p class="text-center font-bold text-primary">
```

## 📱 Responsividade

Mobile-first design com breakpoints:
- Mobile: < 576px
- Tablet: 576px - 768px
- Desktop: > 768px

## 🔔 Sistema de Notificações

```javascript
import { toast } from '../../core/notifications.js';

toast.success('Operação realizada!');
toast.error('Erro ao salvar');
toast.warning('Atenção!');
toast.info('Informação');
```

## 🔄 Tempo Real

```javascript
import { realtime } from '../../core/realtime.js';

// Escutar novos visitantes
const unsubscribe = realtime.onVisitanteAdded((visitante) => {
  console.log('Novo visitante:', visitante);
});

// Parar de escutar
unsubscribe();
```

## 📚 Documentação Adicional

- [API](./docs/api.md) - Endpoints da API
- [Banco de Dados](./docs/banco.md) - Estrutura do BD
- [Arquitetura](./docs/arquitetura.md) - Decisões arquiteturais
- [LGPD](./docs/lgpd.md) - Conformidade LGPD
- [Instalação](./docs/instalacao.md) - Guia de instalação
- [Roadmap](./docs/roadmap.md) - Planos futuros
- [Changelog](./docs/changelog.md) - Histórico de versões

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para dúvidas e suporte:
- Email: support@manostech.com
- GitHub Issues: [Abrir issue](https://github.com/Juvencio93/manostech-platform/issues)
- Discussões: [GitHub Discussions](https://github.com/Juvencio93/manostech-platform/discussions)

---

**Desenvolvido com ❤️ pela ManosTech** | Versão 1.0.0
