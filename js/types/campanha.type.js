export class Campanha {
  constructor(data = {}) {
    this.id = data.id || null;
    this.empresaId = data.empresaId || null;
    this.nome = data.nome || '';
    this.descricao = data.descricao || '';
    this.dataInicio = data.dataInicio || null;
    this.dataFim = data.dataFim || null;
    this.status = data.status || 'planejado'; // planejado, ativo, finalizado, cancelado
    this.tipo = data.tipo || 'promocao'; // promocao, desconto, fidelizacao
    this.desconto = data.desconto || 0;
    this.unidades = data.unidades || [];
    this.dataCriacao = data.dataCriacao || new Date();
  }

  isValid() {
    return this.nome && this.dataInicio && this.dataFim;
  }

  isAtiva() {
    const now = new Date();
    return this.status === 'ativo' && new Date(this.dataInicio) <= now && new Date(this.dataFim) >= now;
  }
}
