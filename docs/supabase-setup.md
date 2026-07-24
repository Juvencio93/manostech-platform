# Guia de Configuração Supabase

## 🚀 Passo 1: Criar Projeto Supabase

1. Acesse https://app.supabase.com
2. Clique em "New project"
3. Preencha os dados:
   - **Nome do projeto:** manostech-platform
   - **Banco de dados:** PostgreSQL
   - **Região:** Escolha a mais próxima (ex: South America - São Paulo)
   - **Senha:** Use uma senha forte

4. Aguarde 5-10 minutos pela criação

---

## 🔑 Passo 2: Copiar Credenciais

1. Na home do projeto, clique em "Connect"
2. Copie:
   - **Project URL**
   - **Anon Key** (chave pública)
   - **Service Role Key** (chave privada)

3. Cole em `.env`:

```env
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...
```

---

## 📊 Passo 3: Executar Migração SQL

### Opção A: Via Console Supabase

1. Vá para "SQL Editor"
2. Clique em "New query"
3. Cole o conteúdo de `supabase/migrations/001_init.sql`
4. Clique em "Run"

### Opção B: Via Supabase CLI

```bash
# Instalar CLI
npm install -g supabase

# Fazer login
supabase login

# Executar migração
supabase migration up
```

---

## 🔐 Passo 4: Configurar Autenticação

### Email/Password

1. Vá para **Authentication** > **Providers**
2. Ative **Email**
3. Configurar:
   - ✅ Enable email confirmations
   - ✅ Enable auto-confirm for new users (dev)

### (Opcional) Redes Sociais

1. Em **OAuth Providers**, ative:
   - Google
   - GitHub
   - Etc.

2. Configure credenciais OAuth

---

## 🌐 Passo 5: Configurar CORS

1. Vá para **Authentication** > **URL Configuration**
2. Em **Authorized redirect URLs**, adicione:
   - `http://localhost:8000`
   - `http://localhost:3000`
   - `https://seu-dominio.com`

---

## ✅ Passo 6: Atualizar arquivo supabase-client.js

Edite `js/core/supabase-client.js` com suas credenciais:

```javascript
const SUPABASE_URL = 'https://seu-projeto.supabase.co';
const SUPABASE_ANON_KEY = 'sua-chave-anon-aqui';
```

Ou use variáveis de ambiente:

```javascript
const SUPABASE_URL = import.meta.env.VITE_SUPABASE_URL;
const SUPABASE_ANON_KEY = import.meta.env.VITE_SUPABASE_ANON_KEY;
```

---

## 🧪 Passo 7: Testar Conexão

Abra o Console do Navegador (F12) e teste:

```javascript
import { supabase, supabaseAuth } from './js/core/supabase-client.js';

// Teste 1: Verificar conexão
const test1 = await supabase.from('empresas').select('*');
console.log('Empresas:', test1);

// Teste 2: Testar autenticação
const test2 = await supabaseAuth.signIn('admin@manostech.com', '123456');
console.log('Login:', test2);
```

---

## 📱 Passo 8: Criar Usuário Demo (Opcional)

No console SQL do Supabase:

```sql
INSERT INTO usuarios (nome, email, role, status)
VALUES ('Admin', 'admin@manostech.com', 'admin', 'ativo')
ON CONFLICT (email) DO NOTHING;
```

Depois, na aba **Authentication** > **Users**, resete a senha manualmente.

---

## 🔒 Passo 9: Row Level Security (RLS)

Já está configurado em `supabase/migrations/001_init.sql`

Para verificar:

1. Vá para **Authentication** > **Policies**
2. Verifique se as políticas foram criadas

---

## 🚨 Troubleshooting

### Erro: "Cannot read properties of undefined"

**Solução:** Verificar se credenciais estão corretas em `supabase-client.js`

### Erro: "CORS error"

**Solução:** Adicionar URL em **Authentication** > **URL Configuration**

### Erro: "Row Level Security denied access"

**Solução:** Verificar RLS policies ou testar sem RLS (development)

### Erro: "Table does not exist"

**Solução:** Executar migração SQL novamente

---

## 📊 Verificar Dados

1. Vá para **Table Editor**
2. Clique em cada tabela para ver dados
3. Use **SQL Editor** para queries customizadas

---

## 🔄 Backups Automáticos

Supabase faz backups automáticos:

1. Vá para **Project Settings** > **Backups**
2. Configure frequência e retenção

---

## 📚 Recursos Adicionais

- [Docs Supabase](https://supabase.com/docs)
- [JavaScript Client](https://supabase.com/docs/reference/javascript/introduction)
- [API Reference](https://supabase.com/docs/guides/api)

---

## ✨ Próximos Passos

1. ✅ Testar login em http://localhost:8000
2. ✅ Criar eventos/campanhas
3. ✅ Verificar dados em **Table Editor**
4. ✅ Deploy em Vercel/Netlify

**Tudo pronto! 🎉**
