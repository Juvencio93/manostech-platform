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
├── api/                    # Edge Functions (opcional)
├── assets/                 # Recursos estáticos
│   ├── css/
│   ├── fonts/
│   ├── icons/
│   ├── images/
│   └── logos/
├── js/                     # Lógica da aplicação
│   ├── core/               # Núcleo (API, auth, router, utils)
│   ├── modules/            # Módulos funcionais
│   └── app.js              # Aplicação principal
├── pages/                  # Páginas HTML
├── portal/                 # Portal público
├── supabase/               # Configuração do BD
│   ├── migrations/         # Migrações SQL
│   ├── functions/          # Funções serverless
│   └── sql/                # Scripts SQL
├── docs/                   # Documentação
└── README.md
```

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