// Constantes da aplicação
export const CONSTANTS = {
  // Status
  STATUS: {
    ATIVO: 'ativo',
    INATIVO: 'inativo',
    PENDENTE: 'pendente',
  },

  // Tipos de evento
  TIPO_EVENTO: {
    WORKSHOP: 'workshop',
    PALESTRA: 'palestra',
    MEETUP: 'meetup',
    CONFERENCIA: 'conferencia',
  },

  // Permissões
  PERMISSIONS: {
    ADMIN: 'admin',
    GERENTE: 'gerente',
    USUARIO: 'usuario',
  },

  // Mensagens
  MESSAGES: {
    SUCESSO: 'Operação realizada com sucesso!',
    ERRO: 'Erro ao processar requisição',
    NENHUM_DADO: 'Nenhum dado encontrado',
  },

  // URLs
  API_BASE_URL: import.meta.env.VITE_API_BASE_URL || '',
};

export default CONSTANTS;