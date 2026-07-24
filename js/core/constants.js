// ======================================================
// Manos Tech Platform
// Constantes Globais
// ======================================================

// ------------------------------------------------------
// Configuração da Aplicação
// ------------------------------------------------------

export const APP_CONFIG = {

    APP_NAME: "Manos Tech",

    APP_SLOGAN: "Plataforma de Marketing Inteligente via Wi-Fi",

    VERSION: "1.0.0",

    SUPABASE_URL: "",

    SUPABASE_ANON_KEY: "",

    DEFAULT_LANGUAGE: "pt-BR",

    DEFAULT_TIMEZONE: "America/Sao_Paulo"

};

// ------------------------------------------------------
// Rotas
// ------------------------------------------------------

export const ROUTES = {

    LOGIN: "/pages/login.html",

    DASHBOARD: "/pages/dashboard.html",

    EVENTOS: "/pages/eventos.html",

    MARKETING: "/pages/marketing.html",

    VISITANTES: "/pages/visitantes.html",

    CAMPANHAS: "/pages/campanhas.html",

    RELATORIOS: "/pages/relatorios.html",

    FINANCEIRO: "/pages/financeiro.html",

    CONFIGURACOES: "/pages/configuracoes.html",

    EMPRESAS: "/pages/empresas.html",

    UNIDADES: "/pages/unidades.html",

    USUARIOS: "/pages/usuarios.html"

};

// ------------------------------------------------------
// Módulos
// ------------------------------------------------------

export const MODULES = {

    EVENTOS: "eventos",

    MARKETING_LOCAL: "marketing-local"

};

// ------------------------------------------------------
// Perfis
// ------------------------------------------------------

export const ROLES = {

    ADMIN: "admin",

    GERENTE: "gerente",

    FUNCIONARIO: "funcionario",

    CLIENTE: "cliente"

};

// ------------------------------------------------------
// Status
// ------------------------------------------------------

export const STATUS = {

    ATIVO: "ativo",

    INATIVO: "inativo",

    PENDENTE: "pendente",

    CANCELADO: "cancelado"

};

// ------------------------------------------------------
// Buckets Storage
// ------------------------------------------------------

export const STORAGE_BUCKETS = {

    LOGOS: "logos",

    BANNERS: "banners",

    CAMPANHAS: "campanhas",

    RELATORIOS: "relatorios",

    EXPORTS: "exports"

};

// ------------------------------------------------------
// Cache
// ------------------------------------------------------

export const CACHE_KEYS = {

    PROFILE: "mt_profile",

    COMPANY: "mt_company",

    UNIT: "mt_unit",

    PERMISSIONS: "mt_permissions",

    SETTINGS: "mt_settings"

};

// ------------------------------------------------------
// Mensagens
// ------------------------------------------------------

export const MESSAGES = {

    SUCCESS: {

        SAVE: "Registro salvo com sucesso.",

        UPDATE: "Registro atualizado com sucesso.",

        DELETE: "Registro removido com sucesso."

    },

    ERROR: {

        GENERIC: "Ocorreu um erro inesperado.",

        NETWORK: "Falha de conexão.",

        AUTH: "Sessão expirada. Faça login novamente."

    }

};
