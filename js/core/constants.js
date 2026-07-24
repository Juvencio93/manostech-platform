// ======================================================
// Manos Tech Platform
// Constantes Globais
// ======================================================

export const APP_CONFIG = {
    APP_NAME: "Manos Tech",
    APP_SLOGAN: "Plataforma de Marketing Inteligente via Wi-Fi",
    VERSION: "1.0.0",

    // Supabase
    SUPABASE_URL: "",
    SUPABASE_ANON_KEY: "",

    // Localização
    DEFAULT_LANGUAGE: "pt-BR",
    DEFAULT_TIMEZONE: "America/Sao_Paulo"
};

// ======================================================
// Rotas
// ======================================================

export const ROUTES = {
    LOGIN: "/pages/login.html",
    DASHBOARD: "/pages/dashboard.html",
    EVENTOS: "/pages/eventos.html",
    MARKETING: "/pages/marketing.html",
    VISITANTES: "/pages/visitantes.html",
    RELATORIOS: "/pages/relatorios.html",
    CONFIGURACOES: "/pages/configuracoes.html"
};

// ======================================================
// Perfis de Usuário
// ======================================================

export const ROLES = {
    ADMIN: "admin",
    GERENTE: "gerente",
    FUNCIONARIO: "funcionario",
    CLIENTE: "cliente"
};

// ======================================================
// Status
// ======================================================

export const STATUS = {
    ATIVO: "ativo",
    INATIVO: "inativo",
    PENDENTE: "pendente",
    CANCELADO: "cancelado"
};

// ======================================================
// Buckets do Storage
// ======================================================

export const STORAGE_BUCKETS = {
    LOGOS: "logos",
    BANNERS: "banners",
    CAMPANHAS: "campanhas",
    EXPORTS: "exports",
    RELATORIOS: "relatorios"
};

// ======================================================
// Chaves de Cache
// ======================================================

export const CACHE_KEYS = {
    PROFILE: "mt_profile",
    COMPANY: "mt_company",
    UNIT: "mt_unit",
    PERMISSIONS: "mt_permissions"
};
