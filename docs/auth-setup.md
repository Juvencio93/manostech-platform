# Configuração Login/Senha - Teste Local

## 🚀 Como Fazer Login

### Via Supabase Auth (Recomendado)

1. Acesse http://localhost:8000
2. Você será redirecionado para #/login
3. Use credenciais criadas no Supabase:
   - Email: admin@manostech.com
   - Senha: Sua senha do Supabase

---

## 🧪 Teste Local SEM Supabase

Para testar SEM conectar ao Supabase, edite `js/core/auth.js`:

```javascript
// Modo demo/teste
const DEMO_MODE = true; // Mudar para true

export const auth = {
  async login(email, password) {
    if (DEMO_MODE) {
      // Aceitar qualquer email/senha em modo demo
      localStorage.setItem('supabase_token', 'demo-token-' + Date.now());
      localStorage.setItem('user', JSON.stringify({
        id: 'demo-user',
        email: email,
        role: 'admin'
      }));
      return {
        success: true,
        user: { email, id: 'demo-user' },
        token: 'demo-token'
      };
    }
    // Resto do código...
  }
};
```

Depois:

```bash
# Fazer login com qualquer credencial
Email: qualquer@coisa.com
Senha: 123456
```

---

## 📋 Criar Usuário via SQL

No Supabase, vá para **Authentication** > **Users**:

1. Clique em "Create new user"
2. Preencha:
   - Email: admin@manostech.com
   - Password: SenhaForte123!
3. Clique "Create user"

Ou via SQL Console:

```sql
INSERT INTO usuarios (nome, email, role, status)
VALUES ('Admin', 'admin@manostech.com', 'admin', 'ativo')
ON CONFLICT (email) DO NOTHING;
```

---

## 🔑 Reset de Senha

### No Supabase

1. Vá para **Authentication** > **Users**
2. Clique no usuário
3. Clique em "Reset password"
4. Nova senha será enviada por email

### No App (TODO)

Implementar endpoint:
```javascript
await auth.resetPassword('admin@manostech.com');
```

---

## 📧 Email de Confirmação

Por padrão, em desenvolvimento:
- Auto-confirm está **habilitado**
- Usuários não precisam confirmar email

Em produção:
- Desabilitar auto-confirm
- Enviar email de confirmação

---

## 🔓 Logout

```javascript
import { auth } from './js/core/auth.js';

await auth.logout();
// Redireciona para #/login
```

---

## ⚠️ Troubleshooting Login

### Erro: "CORS error"

**Solução:** Adicionar URL em Supabase:
```
Authentication > URL Configuration > Authorized redirect URLs
- http://localhost:8000
- http://localhost:8000/#/login
```

### Erro: "Invalid credentials"

**Solução:** Verificar:
- Email existe no Supabase
- Senha está correta
- Usuário está com status 'ativo'

### Erro: "Network error"

**Solução:** Verificar:
- SUPABASE_URL correto
- SUPABASE_ANON_KEY válida
- Internet conectada

---

## 🔐 Segurança

### ✅ Implementado
- JWT tokens com expiration
- Passwords hashed
- HTTPS em produção
- RLS (Row Level Security)

### 🛠️ TODO
- 2FA (Two-Factor Authentication)
- OAuth (Google, GitHub)
- Magic Links (email auth)
- Session timeout

---

## 📱 Como Funciona

```
1. Usuário entra email/senha
   ↓
2. auth.login() chamado
   ↓
3. Supabase valida credenciais
   ↓
4. JWT token retornado
   ↓
5. Token armazenado em localStorage
   ↓
6. Sessão inicializada
   ↓
7. Redirecionado para /dashboard
```

---

## ✅ Próximos Passos

1. [x] Setup Supabase
2. [x] Criar usuário
3. [x] Testar login
4. [x] Ver dados no dashboard
5. [ ] Implementar cadastro
6. [ ] Implementar 2FA
7. [ ] Deploy em produção

**Pronto para usar! 🚀**
