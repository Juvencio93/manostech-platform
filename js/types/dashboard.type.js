export class Dashboard {
  constructor(data = {}) {
    this.totalEventos = data.totalEventos || 0;
    this.totalLojas = data.totalLojas || 0;
    this.totalVisitantes = data.totalVisitantes || 0;
    this.totalCampanhas = data.totalCampanhas || 0;
    this.crescimentoVisitantes = data.crescimentoVisitantes || '0%';
    this.crescimentoReceita = data.crescimentoReceita || '0%';
    this.recentVisits = data.recentVisits || [];
    this.proximosEventos = data.proximosEventos || [];
  }
}
