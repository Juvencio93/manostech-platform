# Como Usar o Banco de Dados

## 📡 Importar Database Service

```javascript
import { db } from '../../core/database.js';
```

---

## 📋 Exemplos de Uso

### EMPRESAS

```javascript
// Listar todas
const empresas = await db.getEmpresas();

// Obter uma
const empresa = await db.getEmpresa('uuid-aqui');

// Criar
const novaEmpresa = await db.createEmpresa({
  nome: 'Nova Empresa',
  cnpj: '12.345.678/0001-90',
  email: 'contato@empresa.com',
  status: 'ativo'
});

// Atualizar
await db.updateEmpresa('uuid', {
  nome: 'Nome Atualizado',
  status: 'inativo'
});

// Deletar
await db.deleteEmpresa('uuid');
```

### VISITANTES

```javascript
// Listar
const visitantes = await db.getVisitantes();

// Obter
const visitante = await db.getVisitante('uuid');

// Criar
const novoVisitante = await db.createVisitante({
  nome: 'João Silva',
  email: 'joao@email.com',
  telefone: '(11) 99999-9999',
  status: 'ativo'
});

// Atualizar
await db.updateVisitante('uuid', {
  nome: 'João Updated'
});
```

### EVENTOS

```javascript
// Listar
const eventos = await db.getEventos();

// Criar
const novoEvento = await db.createEvento({
  unidade_id: 'uuid-unidade',
  nome: 'Evento 2024',
  data_inicio: '2024-12-01',
  data_fim: '2024-12-02',
  tipo: 'promocao',
  status: 'planejado'
});
```

### CAMPANHAS

```javascript
// Listar
const campanhas = await db.getCampanhas();

// Criar
const novaCampanha = await db.createCampanha({
  empresa_id: 'uuid-empresa',
  nome: 'Black Friday 2024',
  data_inicio: '2024-11-29',
  data_fim: '2024-12-02',
  desconto: 50.00,
  tipo: 'promocao',
  status: 'planejado'
});
```

### QUERY GENÉRICA

```javascript
// SELECT customizado
const dados = await db.query('visitantes', {
  select: 'id, nome, email',
  where: { status: 'ativo' },
  order: { by: 'data_criacao', ascending: false },
  limit: 10
});
```

---

## 🔍 Usar em Módulos

Exemplo em `js/modules/empresas/index.js`:

```javascript
import { db } from '../../core/database.js';

const empresasModule = {
  async init() {
    const contentArea = document.getElementById('contentArea');
    
    try {
      // Buscar empresas do banco
      const empresas = await db.getEmpresas();
      
      // Renderizar tabela
      contentArea.innerHTML = `
        <h2>Empresas</h2>
        <table>
          <thead>
            <tr>
              <th>Nome</th>
              <th>CNPJ</th>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            ${empresas.map(e => `
              <tr>
                <td>${e.nome}</td>
                <td>${e.cnpj}</td>
                <td>${e.email}</td>
              </tr>
            `).join('')}
          </tbody>
        </table>
      `;
    } catch (error) {
      console.error('Erro:', error);
    }
  }
};

export default empresasModule;
```

---

## 🔐 Autenticação com DB

```javascript
import { auth } from '../../core/auth.js';
import { db } from '../../core/database.js';

const user = auth.getUser();

if (user) {
  // Buscar dados do usuário
  const usuario = await db.getUsuario(user.id);
  console.log('Usuário:', usuario);
}
```

---

## 🔄 Real-time (Supabase)

```javascript
import { supabase } from '../../core/supabase-client.js';

// Escutar mudanças em visitantes
const subscription = supabase
  .from('visitantes')
  .on('*', (payload) => {
    console.log('Mudança:', payload);
    // Atualizar UI
  })
  .subscribe();

// Parar de escutar
subscription.unsubscribe();
```

---

## 📝 Tratamento de Erros

```javascript
try {
  const empresa = await db.getEmpresa('uuid-invalido');
  if (!empresa) {
    console.warn('Empresa não encontrada');
  }
} catch (error) {
  console.error('Erro ao buscar empresa:', error.message);
}
```

---

## ⚡ Performance

### Caching

```javascript
import { storage } from '../../core/storage.js';

let empresas = storage.get('empresas_cache');
if (!empresas) {
  empresas = await db.getEmpresas();
  storage.set('empresas_cache', empresas);
}
```

### Paginação

```javascript
const query = supabase
  .from('visitantes')
  .select('*')
  .range(0, 19); // Primeiros 20 registros

const { data } = await query;
```

---

## ✅ Checklist

- [x] Supabase criado e configurado
- [x] Credenciais em `.env`
- [x] Migração SQL executada
- [x] RLS configurado
- [x] Database service pronto
- [x] Auth funcionando
- [x] Exemplos de uso

**Tudo pronto para usar! 🚀**
