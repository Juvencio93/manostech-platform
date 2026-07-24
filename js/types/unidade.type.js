export class Unidade {
  constructor(data = {}) {
    this.id = data.id || null;
    this.empresaId = data.empresaId || null;
    this.nome = data.nome || '';
    this.tipo = data.tipo || 'loja'; // loja, restaurante, cafeteria, academia, farmacia
    this.endereco = data.endereco || '';
    this.cidade = data.cidade || '';
    this.estado = data.estado || '';
    this.telefone = data.telefone || '';
    this.email = data.email || '';
    this.cep = data.cep || '';
    this.status = data.status || 'ativo';
    this.dataCriacao = data.dataCriacao || new Date();
  }

  isValid() {
    return this.nome && this.endereco && this.empresaId;
  }
}
