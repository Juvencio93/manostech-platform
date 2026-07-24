# Banco de Dados - ManosTech Platform

## Tabelas Principais

### empresas
```sql
CREATE TABLE empresas (
  id UUID PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) UNIQUE,
  razao_social VARCHAR(255),
  endereco TEXT,
  cidade VARCHAR(100),
  estado VARCHAR(2),
  telefone VARCHAR(20),
  email VARCHAR(255),
  website VARCHAR(255),
  status VARCHAR(20) DEFAULT 'ativo',
  data_criacao TIMESTAMP DEFAULT NOW(),
  data_atualizacao TIMESTAMP DEFAULT NOW()
);
```

### unidades
```sql
CREATE TABLE unidades (
  id UUID PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id),
  nome VARCHAR(255) NOT NULL,
  tipo VARCHAR(50), -- loja, restaurante, cafeteria, academia, farmacia
  endereco TEXT NOT NULL,
  cidade VARCHAR(100),
  estado VARCHAR(2),
  cep VARCHAR(10),
  telefone VARCHAR(20),
  email VARCHAR(255),
  status VARCHAR(20) DEFAULT 'ativo',
  data_criacao TIMESTAMP DEFAULT NOW()
);
```

### usuarios
```sql
CREATE TABLE usuarios (
  id UUID PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  empresa_id UUID REFERENCES empresas(id),
  role VARCHAR(50) DEFAULT 'user', -- admin, manager, user
  status VARCHAR(20) DEFAULT 'ativo',
  ultimo_acesso TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT NOW()
);
```

### visitantes
```sql
CREATE TABLE visitantes (
  id UUID PRIMARY KEY,
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20),
  cpf VARCHAR(14),
  data_nascimento DATE,
  genero VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado VARCHAR(2),
  status VARCHAR(20) DEFAULT 'ativo',
  ultima_visita TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT NOW(),
  tags TEXT[] -- array de tags
);
```

### eventos
```sql
CREATE TABLE eventos (
  id UUID PRIMARY KEY,
  unidade_id UUID REFERENCES unidades(id),
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  data_inicio DATE NOT NULL,
  data_fim DATE,
  horario_inicio TIME,
  horario_fim TIME,
  local VARCHAR(255),
  capacidade INTEGER,
  tipo VARCHAR(50) DEFAULT 'evento', -- evento, promocao, workshop
  status VARCHAR(50) DEFAULT 'planejado', -- planejado, ativo, finalizado, cancelado
  data_criacao TIMESTAMP DEFAULT NOW()
);
```

### campanhas
```sql
CREATE TABLE campanhas (
  id UUID PRIMARY KEY,
  empresa_id UUID REFERENCES empresas(id),
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  data_inicio DATE NOT NULL,
  data_fim DATE NOT NULL,
  tipo VARCHAR(50), -- promocao, desconto, fidelizacao
  desconto DECIMAL(5, 2),
  status VARCHAR(50) DEFAULT 'planejado',
  data_criacao TIMESTAMP DEFAULT NOW()
);
```

### visitas
```sql
CREATE TABLE visitas (
  id UUID PRIMARY KEY,
  visitante_id UUID REFERENCES visitantes(id),
  unidade_id UUID REFERENCES unidades(id),
  data_visita TIMESTAMP DEFAULT NOW(),
  observacoes TEXT
);
```

### relatorios
```sql
CREATE TABLE relatorios (
  id UUID PRIMARY KEY,
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  tipo VARCHAR(50), -- visitantes, eventos, campanhas, financeiro
  data_inicio DATE,
  data_fim DATE,
  formato VARCHAR(10), -- pdf, xlsx, csv
  url_download TEXT,
  status VARCHAR(50) DEFAULT 'gerando', -- gerando, gerado, erro
  criado_por UUID REFERENCES usuarios(id),
  data_criacao TIMESTAMP DEFAULT NOW()
);
```

## Índices

```sql
CREATE INDEX idx_empresas_status ON empresas(status);
CREATE INDEX idx_unidades_empresa_id ON unidades(empresa_id);
CREATE INDEX idx_usuarios_empresa_id ON usuarios(empresa_id);
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_visitantes_email ON visitantes(email);
CREATE INDEX idx_eventos_unidade_id ON eventos(unidade_id);
CREATE INDEX idx_campanhas_empresa_id ON campanhas(empresa_id);
CREATE INDEX idx_visitas_visitante_id ON visitas(visitante_id);
CREATE INDEX idx_visitas_unidade_id ON visitas(unidade_id);
```

## RLS (Row Level Security) - Políticas

### Empresas
```sql
ALTER TABLE empresas ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view their own company"
  ON empresas FOR SELECT
  USING (auth.uid() IN (
    SELECT id FROM usuarios WHERE empresa_id = empresas.id
  ));
```

### Visitantes
```sql
ALTER TABLE visitantes ENABLE ROW LEVEL SECURITY;

CREATE POLICY "Users can view company visitantes"
  ON visitantes FOR SELECT
  USING (EXISTS (
    SELECT 1 FROM unidades WHERE unidades.empresa_id IN (
      SELECT empresa_id FROM usuarios WHERE id = auth.uid()
    )
  ));
```

## Configuração Supabase

1. Criar projeto em https://app.supabase.com
2. Copiar URL e chave anon
3. Adicionar em `.env`:

```
SUPABASE_URL=https://seu-projeto.supabase.co
SUPABASE_ANON_KEY=sua-chave-anon
```

## Migrações

Arquivos em `supabase/migrations/`:

```bash
# Executar migrações
supase migration up
```
