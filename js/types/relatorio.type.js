export class Relatorio {
  constructor(data = {}) {
    this.id = data.id || null;
    this.titulo = data.titulo || '';
    this.descricao = data.descricao || '';
    this.tipo = data.tipo || 'visitantes'; // visitantes, eventos, campanhas, financeiro
    this.dataInicio = data.dataInicio || null;
    this.dataFim = data.dataFim || null;
    this.unidades = data.unidades || [];
    this.formato = data.formato || 'pdf'; // pdf, xlsx, csv
    this.status = data.status || 'gerado'; // gerando, gerado, erro
    this.urlDownload = data.urlDownload || null;
    this.dataCriacao = data.dataCriacao || new Date();
  }

  isValid() {
    return this.titulo && this.dataInicio && this.dataFim;
  }
}
