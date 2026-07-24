# ManosTech Platform

## 🎯 Visão Geral

Plataforma web completa de gerenciamento para ManosTech com:
- 📱 Interface responsiva (HTML, CSS, JavaScript)
- 🔐 Autenticação com Supabase
- 🗄️ Banco de dados PostgreSQL via Supabase
- 📊 Dashboard e relatórios
- 🛍️ Gerenciamento de lojas, eventos e visitantes
- 💰 Módulo financeiro
- 👥 Gestão de funcionários

## 🏗️ Estrutura do Projeto

```
manostech-platform/
│
├── index.html                          → Entrada da aplicação
│
├── .env
├── .gitignore
├── README.md
│
├── assets/
│   │
│   ├── css/
│   │   ├── base/
│   │   ├── layouts/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── themes/
│   │   │
│   │   ├── variables.css
│   │   ├── animations.css
│   │   ├── utilities.css
│   │   └── app.css
│   │
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   ├── logos/
│   └── uploads/
│
├── js/
│   │
│   ├── app.js
│   │
│   ├── core/
│   │   │
│   │   ├── api.js
│   │   ├── auth.js
│   │   ├── session.js
│   │   ├── permissions.js
│   │   ├── router.js
│   │   ├── storage.js
│   │   ├── realtime.js
│   │   ├── notifications.js
│   │   ├── constants.js
│   │   ├── helpers.js
│   │   └── utils.js
│   │
│   ├── services/
│   │   │
│   │   ├── supabase.service.js
│   │   ├── auth.service.js
│   │   ├── dashboard.service.js
│   │   ├── empresa.service.js
│   │   ├── unidade.service.js
│   │   ├── visitante.service.js
│   │   ├── evento.service.js
│   │   ├── campanha.service.js
│   │   ├── portal.service.js
│   │   ├── relatorio.service.js
│   │   └── upload.service.js
│   │
│   ├── components/
│   │   │
│   │   ├── navbar/
│   │   ├── sidebar/
│   │   ├── footer/
│   │   ├── cards/
│   │   ├── charts/
│   │   ├── tables/
│   │   ├── forms/
│   │   ├── uploader/
│   │   ├── modal/
│   │   ├── toast/
│   │   ├── loading/
│   │   └── pagination/
│   │
│   ├── modules/
│   │   │
│   │   ├── dashboard/
│   │   │
│   │   ├── eventos/
│   │   │
│   │   ├── marketing-local/
│   │   │   ├── dashboard/
│   │   │   ├── visitantes/
│   │   │   ├── campanhas/
│   │   │   ├── portal/
│   │   │   ├── relatorios/
│   │   │   └── configuracoes/
│   │   │
│   │   ├── empresas/
│   │   ├── unidades/
│   │   ├── usuarios/
│   │   ├── funcionarios/
│   │   ├── financeiro/
│   │   ├── relatorios/
│   │   ├── configuracoes/
│   │   └── perfil/
│   │
│   └── types/
│       │
│       ├── empresa.type.js
│       ├── unidade.type.js
│       ├── usuario.type.js
│       ├── visitante.type.js
│       ├── campanha.type.js
│       ├── evento.type.js
│       ├── dashboard.type.js
│       └── relatorio.type.js
│
├── layouts/
│   │
│   ├── auth.html
│   ├── dashboard.html
│   ├── portal.html
│   └── erro.html
│
├── pages/
│   │
│   ├── login.html
│   ├── dashboard.html
│   │
│   ├── eventos.html
│   │
│   ├── empresas.html
│   ├── unidades.html
│   ├── usuarios.html
│   ├── funcionarios.html
│   │
│   ├── marketing.html
│   ├── visitantes.html
│   ├── campanhas.html
│   ├── portal.html
│   │
│   ├── relatorios.html
│   ├── financeiro.html
│   ├── configuracoes.html
│   └── perfil.html
│
├── portal/
│   │
│   ├── evento/
│   │
│   ├── marketing/
│   │
│   └── templates/
│       ├── default/
│       ├── restaurante/
│       ├── cafeteria/
│       ├── academia/
│       ├── farmacia/
│       └── loja/
│
├── supabase/
│   │
│   ├── migrations/
│   │   ├── 001_*.sql
│   │   ├── 002_*.sql
│   │   ├── ...
│   │   └── 999_*.sql
│   │
│   ├── functions/
│   │   ├── registrar_visitante.sql
│   │   ├── dashboard.sql
│   │   ├── campanha_ativa.sql
│   │   ├── reiniciar_dashboard.sql
│   │   ├── arquivar_dados.sql
│   │   └── exportar_relatorios.sql
│   │
│   ├── storage/
│   │   ├── buckets.sql
│   │   └── policies.sql
│   │
│   ├── seeds/
│   │   ├── admin.sql
│   │   ├── modulos.sql
│   │   └── empresa_demo.sql
│   │
│   └── sql/
│       ├── views.sql
│       ├── triggers.sql
│       ├── rls.sql
│       ├── indexes.sql
│       └── functions.sql
│
├── api/
│   │
│   ├── send-email/
│   ├── export-report/
│   ├── scheduler/
│   ├── webhook/
│   └── whatsapp/
│
├── docs/
│   │
│   ├── arquitetura.md
│   ├── banco.md
│   ├── api.md
│   ├── roadmap.md
│   ├── changelog.md
│   ├── lgpd.md
│   └── instalacao.md
│
└── scripts/
    │
    ├── backup.sql
    ├── restore.sql
    └── deploy.sh

## 🚀 Instalação

1. Clone o repositório
2. Configure as variáveis de ambiente (Supabase)
3. Abra `pages/login.html` no navegador

## 📚 Documentação

- `docs/arquitetura.md` - Estrutura da aplicação
- `docs/banco.md` - Schema do banco de dados
- `docs/api.md` - Endpoints e funções
- `docs/roadmap.md` - Roadmap do projeto

## 🛠️ Tecnologias

- **Frontend**: HTML5, CSS3, JavaScript Vanilla
- **Backend**: Supabase (PostgreSQL + Auth + Functions)
- **Hosting**: Vercel/Netlify (opcional)

## 📝 Licença

ISC

## 👤 Autor

Juvencio93
