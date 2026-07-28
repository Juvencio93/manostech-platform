// ======================================================
// Manos Tech Platform
// Assistente Manos
// Memory
// ======================================================

class AssistenteMemory {

    constructor() {

        this.operacao = null;

        this.dashboard = null;

        this.historico = [];

        this.insights = [];

    }

    // ==================================================
    // Operação
    // ==================================================

    setOperacao(operacao) {

        this.operacao = operacao;

    }

    getOperacao() {

        return this.operacao;

    }

    // ==================================================
    // Dashboard
    // ==================================================

    setDashboard(dashboard) {

        this.dashboard = dashboard;

    }

    getDashboard() {

        return this.dashboard;

    }

    // ==================================================
    // Histórico
    // ==================================================

    adicionarHistorico(texto) {

        this.historico.unshift({

            data: new Date().toISOString(),

            texto

        });

        if (this.historico.length > 100) {

            this.historico.pop();

        }

    }

    getHistorico() {

        return this.historico;

    }

    // ==================================================
    // Insights
    // ==================================================

    adicionarInsight(texto) {

        this.insights.unshift({

            data: new Date().toISOString(),

            texto

        });

        if (this.insights.length > 50) {

            this.insights.pop();

        }

    }

    getInsights() {

        return this.insights;

    }

}

export default new AssistenteMemory();
