export class Empresa {
  constructor(data = {}) {
    this.id = data.id || null;
    this.nome = data.nome || '';
    this.cnpj = data.cnpj || '';
    this.razaoSocial = data.razaoSocial || '';
    this.endereco = data.endereco || '';
    this.cidade = data.cidade || '';
    this.estado = data.estado || '';
    this.telefone = data.telefone || '';
    this.email = data.email || '';
    this.website = data.website || '';
    this.status = data.status || 'ativo';
    this.dataCriacao = data.dataCriacao || new Date();
  }

  isValid() {
    return this.nome && this.cnpj && this.email;
  }

  toJSON() {
    return {
      id: this.id,
      nome: this.nome,
      cnpj: this.cnpj,
      razaoSocial: this.razaoSocial,
      endereco: this.endereco,
      cidade: this.cidade,
      estado: this.estado,
      telefone: this.telefone,
      email: this.email,
      website: this.website,
      status: this.status,
      dataCriacao: this.dataCriacao
    };
  }
}
