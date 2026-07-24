-- ManosTech Platform - Schema PostgreSQL para Supabase
-- Criar todas as tabelas necessárias

-- 1. TABELA: EMPRESAS
CREATE TABLE IF NOT EXISTS empresas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  cnpj VARCHAR(18) UNIQUE NOT NULL,
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

-- 2. TABELA: UNIDADES
CREATE TABLE IF NOT EXISTS unidades (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome VARCHAR(255) NOT NULL,
  tipo VARCHAR(50) DEFAULT 'loja',
  endereco TEXT NOT NULL,
  cidade VARCHAR(100),
  estado VARCHAR(2),
  cep VARCHAR(10),
  telefone VARCHAR(20),
  email VARCHAR(255),
  status VARCHAR(20) DEFAULT 'ativo',
  data_criacao TIMESTAMP DEFAULT NOW()
);

-- 3. TABELA: USUÁRIOS
CREATE TABLE IF NOT EXISTS usuarios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255) UNIQUE NOT NULL,
  telefone VARCHAR(20),
  empresa_id UUID REFERENCES empresas(id) ON DELETE SET NULL,
  role VARCHAR(50) DEFAULT 'user',
  status VARCHAR(20) DEFAULT 'ativo',
  ultimo_acesso TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT NOW()
);

-- 4. TABELA: VISITANTES
CREATE TABLE IF NOT EXISTS visitantes (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  nome VARCHAR(255) NOT NULL,
  email VARCHAR(255),
  telefone VARCHAR(20),
  cpf VARCHAR(14) UNIQUE,
  data_nascimento DATE,
  genero VARCHAR(20),
  endereco TEXT,
  cidade VARCHAR(100),
  estado VARCHAR(2),
  status VARCHAR(20) DEFAULT 'ativo',
  ultima_visita TIMESTAMP,
  data_criacao TIMESTAMP DEFAULT NOW(),
  tags TEXT[] DEFAULT '{}'
);

-- 5. TABELA: EVENTOS
CREATE TABLE IF NOT EXISTS eventos (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  unidade_id UUID NOT NULL REFERENCES unidades(id) ON DELETE CASCADE,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  data_inicio DATE NOT NULL,
  data_fim DATE,
  horario_inicio TIME,
  horario_fim TIME,
  local VARCHAR(255),
  capacidade INTEGER,
  tipo VARCHAR(50) DEFAULT 'evento',
  status VARCHAR(50) DEFAULT 'planejado',
  data_criacao TIMESTAMP DEFAULT NOW()
);

-- 6. TABELA: CAMPANHAS
CREATE TABLE IF NOT EXISTS campanhas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  empresa_id UUID NOT NULL REFERENCES empresas(id) ON DELETE CASCADE,
  nome VARCHAR(255) NOT NULL,
  descricao TEXT,
  data_inicio DATE NOT NULL,
  data_fim DATE NOT NULL,
  tipo VARCHAR(50) DEFAULT 'promocao',
  desconto DECIMAL(5, 2),
  status VARCHAR(50) DEFAULT 'planejado',
  data_criacao TIMESTAMP DEFAULT NOW()
);

-- 7. TABELA: VISITAS
CREATE TABLE IF NOT EXISTS visitas (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  visitante_id UUID NOT NULL REFERENCES visitantes(id) ON DELETE CASCADE,
  unidade_id UUID NOT NULL REFERENCES unidades(id) ON DELETE CASCADE,
  data_visita TIMESTAMP DEFAULT NOW(),
  observacoes TEXT
);

-- 8. TABELA: RELATÓRIOS
CREATE TABLE IF NOT EXISTS relatorios (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  titulo VARCHAR(255) NOT NULL,
  descricao TEXT,
  tipo VARCHAR(50),
  data_inicio DATE,
  data_fim DATE,
  formato VARCHAR(10) DEFAULT 'pdf',
  url_download TEXT,
  status VARCHAR(50) DEFAULT 'gerando',
  criado_por UUID REFERENCES usuarios(id),
  data_criacao TIMESTAMP DEFAULT NOW()
);

-- 9. TABELA: AUDIT LOG
CREATE TABLE IF NOT EXISTS audit_log (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  usuario_id UUID REFERENCES usuarios(id),
  acao VARCHAR(50),
  tabela VARCHAR(50),
  dados_antigos JSONB,
  dados_novos JSONB,
  data_hora TIMESTAMP DEFAULT NOW()
);

-- ÍNDICES
CREATE INDEX idx_empresas_status ON empresas(status);
CREATE INDEX idx_empresas_cnpj ON empresas(cnpj);
CREATE INDEX idx_unidades_empresa_id ON unidades(empresa_id);
CREATE INDEX idx_unidades_status ON unidades(status);
CREATE INDEX idx_usuarios_empresa_id ON usuarios(empresa_id);
CREATE INDEX idx_usuarios_email ON usuarios(email);
CREATE INDEX idx_usuarios_role ON usuarios(role);
CREATE INDEX idx_visitantes_email ON visitantes(email);
CREATE INDEX idx_visitantes_cpf ON visitantes(cpf);
CREATE INDEX idx_visitantes_status ON visitantes(status);
CREATE INDEX idx_eventos_unidade_id ON eventos(unidade_id);
CREATE INDEX idx_eventos_status ON eventos(status);
CREATE INDEX idx_eventos_data_inicio ON eventos(data_inicio);
CREATE INDEX idx_campanhas_empresa_id ON campanhas(empresa_id);
CREATE INDEX idx_campanhas_status ON campanhas(status);
CREATE INDEX idx_visitas_visitante_id ON visitas(visitante_id);
CREATE INDEX idx_visitas_unidade_id ON visitas(unidade_id);
CREATE INDEX idx_visitas_data ON visitas(data_visita);

-- ROW LEVEL SECURITY (RLS)
ALTER TABLE empresas ENABLE ROW LEVEL SECURITY;
ALTER TABLE unidades ENABLE ROW LEVEL SECURITY;
ALTER TABLE usuarios ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitantes ENABLE ROW LEVEL SECURITY;
ALTER TABLE eventos ENABLE ROW LEVEL SECURITY;
ALTER TABLE campanhas ENABLE ROW LEVEL SECURITY;
ALTER TABLE visitas ENABLE ROW LEVEL SECURITY;
ALTER TABLE relatorios ENABLE ROW LEVEL SECURITY;

-- POLÍTICAS DE SEGURANÇA
-- Usuários podem ver suas próprias empresas
CREATE POLICY usuarios_empresa_policy ON empresas
  FOR SELECT USING (
    auth.uid() IN (
      SELECT CAST(id AS UUID) FROM usuarios WHERE empresa_id = empresas.id
    )
  );

-- Usuários podem ver unidades de suas empresas
CREATE POLICY usuarios_unidade_policy ON unidades
  FOR SELECT USING (
    empresa_id IN (
      SELECT empresa_id FROM usuarios WHERE CAST(id AS UUID) = auth.uid()
    )
  );

-- Usuários podem ver visitantes de suas empresas
CREATE POLICY usuarios_visitante_policy ON visitantes
  FOR SELECT USING (
    EXISTS (
      SELECT 1 FROM unidades u 
      WHERE u.empresa_id IN (
        SELECT empresa_id FROM usuarios WHERE CAST(id AS UUID) = auth.uid()
      )
    )
  );

-- DADOS DE EXEMPLO (OPCIONAL)
INSERT INTO empresas (nome, cnpj, email, status) 
VALUES 
  ('Empresa Demo', '12.345.678/0001-90', 'contato@demo.com', 'ativo')
ON CONFLICT (cnpj) DO NOTHING;

INSERT INTO usuarios (nome, email, role, status)
VALUES 
  ('Admin Demo', 'admin@manostech.com', 'admin', 'ativo')
ON CONFLICT (email) DO NOTHING;
