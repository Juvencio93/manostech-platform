// Permissions Module
export const permissions = {
  ROLES: {
    ADMIN: 'admin',
    GERENTE: 'gerente',
    USUARIO: 'usuario',
  },

  canAccess(userRole, requiredRole) {
    const roleHierarchy = {
      admin: 3,
      gerente: 2,
      usuario: 1,
    };
    return roleHierarchy[userRole] >= roleHierarchy[requiredRole];
  },

  canEdit(userRole) {
    return this.canAccess(userRole, this.ROLES.GERENTE);
  },

  canDelete(userRole) {
    return this.canAccess(userRole, this.ROLES.ADMIN);
  },

  canViewReports(userRole) {
    return this.canAccess(userRole, this.ROLES.GERENTE);
  },
};

export default permissions;