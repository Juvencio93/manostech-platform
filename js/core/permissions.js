export const permissions = {
  // Permissões disponíveis
  ADMIN: 'admin',
  MANAGE_USERS: 'manage_users',
  MANAGE_EMPRESAS: 'manage_empresas',
  MANAGE_UNIDADES: 'manage_unidades',
  MANAGE_EVENTOS: 'manage_eventos',
  MANAGE_CAMPANHAS: 'manage_campanhas',
  VIEW_RELATORIOS: 'view_relatorios',
  EXPORT_DADOS: 'export_dados',
  MANAGE_FINANCEIRO: 'manage_financeiro',
  VIEW_VISITANTES: 'view_visitantes',
  MANAGE_CONFIGURACOES: 'manage_configuracoes',

  // Verificar se usuário tem permissão
  hasPermission(userRole, permission) {
    const rolePermissions = {
      admin: [
        this.ADMIN,
        this.MANAGE_USERS,
        this.MANAGE_EMPRESAS,
        this.MANAGE_UNIDADES,
        this.MANAGE_EVENTOS,
        this.MANAGE_CAMPANHAS,
        this.VIEW_RELATORIOS,
        this.EXPORT_DADOS,
        this.MANAGE_FINANCEIRO,
        this.VIEW_VISITANTES,
        this.MANAGE_CONFIGURACOES
      ],
      manager: [
        this.MANAGE_EVENTOS,
        this.MANAGE_CAMPANHAS,
        this.VIEW_RELATORIOS,
        this.VIEW_VISITANTES,
        this.EXPORT_DADOS
      ],
      user: [
        this.VIEW_VISITANTES,
        this.VIEW_RELATORIOS
      ]
    };

    const permissions = rolePermissions[userRole] || [];
    return permissions.includes(permission);
  },

  // Verificar múltiplas permissões (AND)
  hasAllPermissions(userRole, permissionsToCheck) {
    return permissionsToCheck.every(perm => this.hasPermission(userRole, perm));
  },

  // Verificar múltiplas permissões (OR)
  hasAnyPermission(userRole, permissionsToCheck) {
    return permissionsToCheck.some(perm => this.hasPermission(userRole, perm));
  },

  // Proteger acesso a funcionalidades
  requirePermission(permission, callback) {
    return function(userRole) {
      if (this.hasPermission(userRole, permission)) {
        return callback();
      } else {
        console.warn(`Permissão negada: ${permission}`);
        throw new Error(`Você não tem permissão para acessar: ${permission}`);
      }
    };
  }
};
