# Instalação e Configuração

## Pré-requisitos

- Node.js 16+
- Git
- Conta Supabase (grátis em https://app.supabase.com)
- Navegador moderno (Chrome, Firefox, Safari, Edge)

## Passo 1: Clonar o Repositório

```bash
git clone https://github.com/Juvencio93/manostech-platform.git
cd manostech-platform
```

## Passo 2: Configurar Variáveis de Ambiente

```bash
cp .env.example .env
```

Editar `.env` com suas credenciais:

```env
API_URL=http://localhost:3000/api
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon-aqui
SUPABASE_SERVICE_ROLE_KEY=sua-chave-service-aqui
PORTO=8000
```

## Passo 3: Iniciar Servidor Local

### Opção 1: Python (Simples)

```bash
python -m http.server 8000
```

### Opção 2: Node.js (Recomendado)

```bash
npm install -g http-server
http-server . -p 8000
```

### Opção 3: Nginx

```bash
nginx -c $(pwd)/nginx.conf
```

## Passo 4: Acessar a Aplicação

Abrir no navegador:

```
http://localhost:8000
```

## Passo 5: Fazer Login

**Credenciais Demo:**
- Email: `admin@manostech.com`
- Senha: `123456`

## Configuração Supabase (Opcional)

### 1. Criar Projeto Supabase

1. Ir para https://app.supabase.com
2. Clicar em "New project"
3. Preencher dados do projeto
4. Aguardar criação (5-10 minutos)

### 2. Copiar Credenciais

```
Settings → API → URL e chaves
```

Adicionar em `.env`:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

### 3. Executar Migrações

```bash
supase migration up
```

Ou executar SQL em `supabase/migrations/` manualmente via console.

### 4. Configurar Autenticação

1. Ir para "Authentication" no console
2. Adicionar provedores (Email, Google, etc)
3. Configurar redirect URLs

## Desenvolvimento Local

### Estrutura de Pastas

```
manostech-platform/
├── index.html          # Entrada
├── assets/             # CSS, imagens, fonts
├── js/                 # JavaScript
│   ├── app.js          # Inicialização
│   ├── core/           # Sistema core
│   ├── services/       # Serviços API
│   ├── modules/        # Módulos da app
│   ├── components/     # Componentes
│   ├── types/          # Tipos de dados
│   └── layouts/        # Scripts de layout
├── layouts/            # Templates HTML
├── docs/               # Documentação
└── .env                # Variáveis de ambiente
```

### Adicionar Novo Módulo

1. Criar pasta: `js/modules/meu-modulo/`
2. Criar arquivo: `index.js`

```javascript
const meuModulo = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    contentArea.innerHTML = '<h2>Meu Módulo</h2>';
  }
};

export default meuModulo;
```

3. Adicionar rota em `js/core/router.js`:

```javascript
const routes = {
  '/meu-modulo': {
    layout: 'dashboard',
    module: 'meu-modulo',
    title: 'Meu Módulo'
  }
};
```

### Debug

Abrir Console do Navegador (F12) para:
- Ver erros JavaScript
- Verificar Network requests
- Testar API calls

```javascript
// No console
import { api } from './js/core/api.js';
api.get('/empresas').then(console.log);
```

## Deployment

### GitHub Pages

```bash
git push origin main
```

Site publicado em: `https://juvencio93.github.io/manostech-platform`

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

## Troubleshooting

### Erro: CORS

Adicionar headers no servidor:

```javascript
res.header('Access-Control-Allow-Origin', '*');
res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
```

### Erro: Module Not Found

Verificar paths em imports:

```javascript
// ❌ Errado
import { api } from 'js/core/api.js';

// ✅ Correto
import { api } from './js/core/api.js';
```

### Erro: localhost recusou a conexão

1. Verificar se servidor está rodando
2. Tentar porta diferente: `python -m http.server 8001`
3. Limpar cache: Ctrl+Shift+Del

## Próximos Passos

1. Ler documentação em `docs/`
2. Explorar módulos em `js/modules/`
3. Customizar CSS em `assets/css/`
4. Integrar com API real
5. Configurar autenticação

## Suporte

Dúvidas ou problemas?

- 📧 Email: support@manostech.com
- 🐛 Issues: https://github.com/Juvencio93/manostech-platform/issues
- 💬 Discussões: https://github.com/Juvencio93/manostech-platform/discussions
