# API Documentation

## Base URL

```
http://localhost:3000/api
```

## Autenticação

Todas as requisições autenticadas devem incluir o header:

```
Authorization: Bearer {token}
```

## Endpoints

### Autenticação

#### POST /auth/login
Fazer login

**Request:**
```json
{
  "email": "usuario@example.com",
  "password": "senha123"
}
```

**Response:**
```json
{
  "token": "jwt_token",
  "user": {
    "id": "user_id",
    "email": "usuario@example.com",
    "role": "admin"
  }
}
```

### Empresas

#### GET /empresas
Listar todas as empresas

**Response:**
```json
[
  {
    "id": "empresa_id",
    "nome": "Minha Empresa",
    "cnpj": "12.345.678/0001-90",
    "email": "contato@empresa.com",
    "status": "ativo"
  }
]
```

#### POST /empresas
Criar nova empresa

**Request:**
```json
{
  "nome": "Nova Empresa",
  "cnpj": "12.345.678/0001-90",
  "email": "contato@empresa.com"
}
```

#### GET /empresas/:id
Obter detalhes da empresa

#### PUT /empresas/:id
Atualizar empresa

#### DELETE /empresas/:id
Deletar empresa

### Visitantes

#### GET /visitantes
Listar visitantes

**Query Parameters:**
- `limit` - Quantidade de registros (default: 20)
- `offset` - Deslocamento (default: 0)
- `empresa_id` - Filtrar por empresa
- `status` - Filtrar por status

#### POST /visitantes
Criar novo visitante

#### GET /visitantes/:id
Obter detalhes do visitante

#### PUT /visitantes/:id
Atualizar visitante

#### POST /visitantes/:id/visit
Registrar visita do visitante

### Eventos

#### GET /eventos
Listar eventos

#### POST /eventos
Criar novo evento

#### GET /eventos/:id
Obter detalhes do evento

#### PUT /eventos/:id
Atualizar evento

#### DELETE /eventos/:id
Deletar evento

### Campanhas

#### GET /campanhas
Listar campanhas

#### POST /campanhas
Criar nova campanha

#### GET /campanhas/:id
Obter detalhes da campanha

#### PUT /campanhas/:id
Atualizar campanha

### Relatórios

#### POST /relatorios/gerar
Gerar novo relatório

**Request:**
```json
{
  "tipo": "visitantes",
  "data_inicio": "2024-01-01",
  "data_fim": "2024-12-31",
  "formato": "pdf"
}
```

#### GET /relatorios/:id/download
Baixar relatório gerado

## Códigos de Status

- `200` - OK
- `201` - Created
- `400` - Bad Request
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

## Tratamento de Erros

```json
{
  "error": "Descrição do erro",
  "code": "ERROR_CODE",
  "details": {}
}
```
