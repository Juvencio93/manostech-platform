export class Evento {
  constructor(data = {}) {
    this.id = data.id || null;
    this.unidadeId = data.unidadeId || null;
    this.nome = data.nome || '';
    this.descricao = data.descricao || '';
    this.dataInicio = data.dataInicio || null;
    this.dataFim = data.dataFim || null;
    this.horarioInicio = data.horarioInicio || '';
    this.horarioFim = data.horarioFim || '';
    this.local = data.local || '';
    this.capacidade = data.capacidade || 0;
    this.status = data.status || 'planejado'; // planejado, ativo, finalizado, cancelado
    this.tipo = data.tipo || 'evento'; // evento, promocao, workshop
    this.dataCriacao = data.dataCriacao || new Date();
  }

  isValid() {
    return this.nome && this.dataInicio && this.unidadeId;
  }

  isAtivo() {
    const now = new Date();
    return this.status === 'ativo' && new Date(this.dataInicio) <= now && new Date(this.dataFim) >= now;
  }
}
