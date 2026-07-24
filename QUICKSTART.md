# 🚀 QUICK START - ManosTech Platform

## ⚡ Em 5 Minutos

### 1️⃣ Clonar o Projeto

```bash
git clone https://github.com/Juvencio93/manostech-platform.git
cd manostech-platform
```

### 2️⃣ Iniciar Servidor Local

**Windows/Mac/Linux:**
```bash
python -m http.server 8000
```

Ou com Node.js:
```bash
npx http-server . -p 8000
```

### 3️⃣ Abrir no Navegador

```
http://localhost:8000
```

### 4️⃣ Login (Modo Demo)

Digite qualquer credencial:
- **Email:** admin@manostech.com
- **Senha:** 123456

✅ **Pronto! Você está dentro da plataforma!**

---

## 🔧 Configurar com Supabase (5-10 minutos)

### Passo 1: Criar Projeto Supabase

1. Acesse https://app.supabase.com
2. Clique "New Project"
3. Preencha:
   - Nome: `manostech-platform`
   - Região: `South America - São Paulo`
   - Senha: Use uma forte
4. **Aguarde 5-10 minutos**

### Passo 2: Copiar Credenciais

1. Clique em "Connect"
2. Copie:
   - `Project URL`
   - `Anon Key`
   - `Service Role Key`

### Passo 3: Atualizar .env

Crie arquivo `.env` na raiz:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon
SUPABASE_SERVICE_ROLE_KEY=sua-chave-service
```

### Passo 4: Executar SQL

No Supabase console:
1. Vá para **SQL Editor**
2. Clique **New Query**
3. Cole conteúdo de: `supabase/migrations/001_init.sql`
4. Clique **Run**

### Passo 5: Atualizar supabase-client.js

Edite `js/core/supabase-client.js`:

```javascript
const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon';
```

### Passo 6: Testar

Abra Console (F12) e teste:

```javascript
import { db } from './js/core/database.js';
const empresas = await db.getEmpresas();
console.log(empresas);
```

✅ **Supabase conectado!**

---

## 📚 Documentação Completa

| Documento | Descrição |
|-----------|----------|
| [README.md](./README.md) | Visão geral do projeto |
| [docs/supabase-setup.md](./docs/supabase-setup.md) | Setup Supabase detalhado |
| [docs/auth-setup.md](./docs/auth-setup.md) | Login e autenticação |
| [docs/database-usage.md](./docs/database-usage.md) | Como usar banco de dados |
| [docs/api.md](./docs/api.md) | Endpoints da API |
| [docs/banco.md](./docs/banco.md) | Schema do banco de dados |
| [docs/arquitetura.md](./docs/arquitetura.md) | Design e arquitetura |
| [docs/instalacao.md](./docs/instalacao.md) | Guia de instalação completo |

---

## 🎯 Funcionalidades Principais

✅ **Dashboard** - Estatísticas em tempo real
✅ **Eventos** - CRUD completo de eventos
✅ **Empresas** - Gerenciamento de empresas
✅ **Visitantes** - Database de visitantes
✅ **Campanhas** - Marketing local
✅ **Relatórios** - Exportar em PDF/Excel
✅ **Usuários** - Sistema de permissões
✅ **Configurações** - Painel admin
✅ **Perfil** - Editar dados de usuário

---

## 🗂️ Estrutura de Pastas

```
manostech-platform/
├── index.html              ← Arquivo principal
├── assets/css/            ← Estilos
├── js/
│   ├── app.js            ← Inicialização
│   ├── core/             ← Sistema core
│   ├── services/         ← Serviços API
│   ├── modules/          ← Módulos da app
│   ├── components/       ← Componentes
│   ├── types/            ← Tipos de dados
│   └── layouts/          ← Scripts de layout
├── layouts/              ← Templates HTML
├── docs/                 ← Documentação
├── supabase/            ← SQL migrations
└── .env.example         ← Variáveis de ambiente
```

---

## 💡 Dicas Rápidas

### Adicionar Novo Módulo

1. Crie pasta: `js/modules/meu-modulo/`
2. Crie arquivo `index.js`:

```javascript
const meuModulo = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '<h2>Meu Módulo</h2>';
  }
};
export default meuModulo;
```

3. Adicione rota em `js/core/router.js`

### Usar Componentes

```javascript
import { card } from '../../components/cards/cards.component.js';
const html = card.create({
  title: 'Meu Card',
  content: '<p>Conteúdo</p>'
});
```

### Consultar Banco de Dados

```javascript
import { db } from '../../core/database.js';
const empresas = await db.getEmpresas();
```

---

## 🚨 Troubleshooting

### Tela Branca?

1. Abra **Console** (F12)
2. Veja as mensagens de erro
3. Verifique:
   - Arquivo `index.html` existe?
   - CSS está carregando?
   - JavaScript sem erros?

### Não Consegue Fazer Login?

1. Verifique credenciais Supabase
2. Verifique arquivo `.env`
3. Verifique RLS policies no Supabase
4. Teste modo demo (sem Supabase)

### Erro CORS?

1. Verifique URL em Supabase:
   - **Authentication** > **URL Configuration**
   - Adicione: `http://localhost:8000`

---

## 🔐 Segurança

- ✅ JWT Authentication
- ✅ Row Level Security (RLS)
- ✅ Password Hashing
- ✅ HTTPS em produção
- ✅ LGPD Compliant

---

## 📱 Deploy

### GitHub Pages
```bash
git push origin main
# Site em: https://seu-usuario.github.io/manostech-platform
```

### Vercel
```bash
npm install -g vercel
vercel
```

### Netlify
```bash
npm install -g netlify-cli
netlify deploy
```

---

## 📞 Suporte

- 📧 Email: support@manostech.com
- 🐛 Issues: https://github.com/Juvencio93/manostech-platform/issues
- 💬 Discussions: https://github.com/Juvencio93/manostech-platform/discussions

---

## 📋 Checklist de Setup

- [ ] Clonar repositório
- [ ] Iniciar servidor local
- [ ] Acessar http://localhost:8000
- [ ] Fazer login (modo demo)
- [ ] Explorar modules
- [ ] Criar projeto Supabase
- [ ] Copiar credenciais
- [ ] Executar SQL migration
- [ ] Testar conexão
- [ ] Deploy em produção

---

## 🎉 Pronto!

**Sua plataforma está 100% operacional!**

Próximos passos:
1. Explorar módulos
2. Personalizar cores/logo
3. Adicionar mais features
4. Integrar com seu backend
5. Deploy em produção

**Happy coding! 🚀**
