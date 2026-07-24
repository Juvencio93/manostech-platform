# Arquitetura da Plataforma

## Visão Geral

A ManosTech Platform é uma aplicação web SPA (Single Page Application) desenvolvida com:

- **Frontend:** HTML5, CSS3, JavaScript Vanilla (ES6+)
- **Backend:** Node.js + Express (TODO)
- **Banco de Dados:** Supabase (PostgreSQL)
- **Autenticação:** JWT
- **Tempo Real:** Supabase Realtime

## Arquitetura em Camadas

```
┌─────────────────────────────────┐
│         Apresentação            │
│  (Components, Layouts, Styles)  │
├─────────────────────────────────┤
│       Lógica de Aplicação       │
│  (Modules, Router, Services)    │
├─────────────────────────────────┤
│      Camada de Dados            │
│  (API, Storage, Session)        │
├─────────────────────────────────┤
│  Backend / Banco de Dados       │
│  (Supabase, PostgreSQL)         │
└─────────────────────────────────┘
```

## Fluxo de Navegação

```
URL Change (#/rota)
    ↓
Router detecta mudança
    ↓
Carrega layout correto
    ↓
Carrega módulo
    ↓
Módulo inicializa
    ↓
Serviço busca dados
    ↓
Componentes renderizam
    ↓
Userário interage
```

## Padrões de Projeto

### Module Pattern
Cada módulo é um objeto com método `init()`:

```javascript
const meuModulo = {
  async init() {
    // Lógica de inicialização
  }
};
```

### Service Layer
Serviços encapsulam lógica de API:

```javascript
export const meuService = {
  async getDados() { ... },
  async salvarDados(data) { ... }
};
```

### Component Pattern
Componentes são funções que retornam HTML:

```javascript
export const meuComponent = {
  create(options) {
    return `<div>...</div>`;
  }
};
```

## Fluxo de Autenticação

```
Usuário entra email/senha
    ↓
auth.login() chamado
    ↓
API valida credenciais
    ↓
Token JWT retornado
    ↓
Token armazenado em localStorage
    ↓
Session inicializada
    ↓
Redirecionado para dashboard
```

## Gerenciamento de Estado

### Session
Armazena dados do usuário autenticado:

```javascript
session.data = {
  user: { email, role },
  permissions: [],
  preferences: {}
};
```

### Local Storage
Persiste dados entre sessões:

```javascript
storage.set('key', value);
const value = storage.get('key');
```

## Sistema de Permissões

```
Role (admin, manager, user)
    ↓
Permissions.hasPermission(role, permission)
    ↓
Retorna true/false
    ↓
UI renderiza ou esconde elementos
```

## Comunicação com API

```javascript
// Requisição
api.get('/endpoint')
    ↓
// Header com token
Authorization: Bearer {token}
    ↓
// Resposta
{ data, error }
```

## Tempo Real

```
Subscrever evento
    ↓
Server emite mudança
    ↓
Callback executado
    ↓
UI atualiza
```

## Estrutura de Pastas e Responsabilidades

| Pasta | Responsabilidade |
|-------|------------------|
| `js/core` | Sistema core da aplicação |
| `js/services` | Comunicação com API |
| `js/modules` | Lógica de domínio |
| `js/components` | Componentes reutilizáveis |
| `js/types` | Definições de tipos |
| `assets/css` | Estilos modulares |
| `layouts` | Templates HTML |

## Performance

### Otimizações Implementadas

1. **SPA** - Sem reload de página
2. **Lazy Loading** - Módulos carregados sob demanda
3. **CSS Modular** - Apenas estilos necessários
4. **Caching** - localStorage para dados frequentes
5. **Debouncing** - Busca e filtros

## Segurança

### Medidas Implementadas

1. **JWT** - Tokens com expiração
2. **CORS** - Requisições validadas
3. **RLS (Row Level Security)** - Supabase
4. **XSS Protection** - Sanitização de entrada
5. **HTTPS** - Em produção

## Escalabilidade

### Como Escalar

1. **Backend** - Separar em API dedicada
2. **Banco** - Implementar índices e partições
3. **Cache** - Redis para dados frequentes
4. **CDN** - Distribuir assets
5. **Microserviços** - Separar funcionalidades
