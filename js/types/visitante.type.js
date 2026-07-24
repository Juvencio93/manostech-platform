export class Visitante {
  constructor(data = {}) {
    this.id = data.id || null;
    this.nome = data.nome || '';
    this.email = data.email || '';
    this.telefone = data.telefone || '';
    this.cpf = data.cpf || '';
    this.dataNascimento = data.dataNascimento || null;
    this.genero = data.genero || '';
    this.endereco = data.endereco || '';
    this.cidade = data.cidade || '';
    this.estado = data.estado || '';
    this.status = data.status || 'ativo';
    this.ultimaVisita = data.ultimaVisita || null;
    this.dataCriacao = data.dataCriacao || new Date();
    this.tags = data.tags || [];
  }

  isValid() {
    return this.nome && this.email;
  }

  getIdade() {
    if (!this.dataNascimento) return null;
    const today = new Date();
    const birthDate = new Date(this.dataNascimento);
    let age = today.getFullYear() - birthDate.getFullYear();
    const monthDiff = today.getMonth() - birthDate.getMonth();
    if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
      age--;
    }
    return age;
  }
}
