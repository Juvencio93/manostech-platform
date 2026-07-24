export class Usuario {
  constructor(data = {}) {
    this.id = data.id || null;
    this.nome = data.nome || '';
    this.email = data.email || '';
    this.telefone = data.telefone || '';
    this.role = data.role || 'user'; // admin, manager, user
    this.empresaId = data.empresaId || null;
    this.status = data.status || 'ativo';
    this.ultimoAcesso = data.ultimoAcesso || null;
    this.dataCriacao = data.dataCriacao || new Date();
  }

  isAdmin() {
    return this.role === 'admin';
  }

  isManager() {
    return this.role === 'manager';
  }

  isValid() {
    return this.nome && this.email;
  }
}
