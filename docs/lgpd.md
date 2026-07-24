# LGPD - Conformidade e Privacidade

## Dados Pessoais Coletados

### Visitantes
- Nome
- Email
- Telefone
- CPF (opcional)
- Data de nascimento (opcional)
- Gênero
- Endereço
- Localização

### Usuários
- Nome
- Email
- Telefone
- Dados de acesso (IP, data/hora)

## Princípios LGPD Implementados

### 1. Consentimento
- ✅ Checkbox de consentimento no cadastro de visitantes
- ✅ Termos de uso visíveis
- ✅ Política de privacidade acessível

### 2. Transparência
- ✅ Política de privacidade completa
- ✅ Como dados são usados
- ✅ Informações de contato para dúvidas

### 3. Segurança
- ✅ Criptografia HTTPS
- ✅ JWT para autenticação
- ✅ Passwords hash com bcrypt
- ✅ Row Level Security (RLS) no banco

### 4. Direito do Usuário
- ✅ Acesso aos dados (GET /visitantes/:id)
- ✅ Correção (PUT /visitantes/:id)
- ✅ Exclusão (DELETE /visitantes/:id)
- ✅ Portabilidade (EXPORT)

## Políticas de Retenção

| Dados | Período | Justificativa |
|-------|---------|---------------|
| Visitantes | 2 anos | Relatórios históricos |
| Transações | 5 anos | Conformidade contábil |
| Logs de acesso | 90 dias | Segurança |
| Dados excluídos | 30 dias | Recuperação |

## Processamento Legítimo

### Fins Permitidos
1. Gerenciamento de visitantes e eventos
2. Marketing local e promoções
3. Análises e relatórios
4. Conformidade legal

### Fins Proibidos
1. Venda de dados a terceiros
2. Compartilhamento não autorizado
3. Uso em decisões automatizadas
4. Transferência internacional sem consentimento

## Implementação Técnica

### Criptografia
```javascript
// Passwords - bcrypt
const hash = await bcrypt.hash(password, 10);

// Dados sensíveis - AES-256
const encrypted = encrypt(cpf, encryptionKey);
```

### Anonimização
```javascript
// Remover dados de identificação
const anonymize = (visitor) => ({
  id: generateNewId(),
  tags: visitor.tags,
  visits_count: visitor.visits_count
});
```

### Auditoria
```sql
CREATE TABLE audit_log (
  id UUID PRIMARY KEY,
  usuario_id UUID,
  acao VARCHAR(50),
  tabela VARCHAR(50),
  dados_antigos JSONB,
  dados_novos JSONB,
  data_hora TIMESTAMP DEFAULT NOW()
);
```

## Documentação Exigida

- [x] Política de Privacidade
- [x] Termos de Uso
- [x] Aviso de Cookies
- [x] Mapeamento de Dados
- [x] Registros de Consentimento
- [x] Procedimento de Exclusão

## Dúvidas e Conformidade

Para questões sobre LGPD:
- Email: dpo@manostech.com
- Telefone: (11) 3000-0000
- Site: www.manostech.com/privacidade

## Checklist de Implementação

- [x] Coleta de consentimento
- [x] Criptografia de dados
- [x] Logs de auditoria
- [x] Política de privacidade
- [x] Direito ao esquecimento
- [x] Portabilidade de dados
- [x] Notificação de incidente
- [x] Termos de processamento
