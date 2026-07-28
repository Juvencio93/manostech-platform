// ======================================================
// Manos Tech Platform
// Dashboard Controller
// ======================================================

import dashboardService from "../services/dashboard.service.js";

class DashboardController {

    constructor() {

        this.operacaoId = null;

        this.dashboard = null;

        this.widgets = [];

        this.refreshTimer = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    async init(operacaoId) {

        this.operacaoId = operacaoId;

        await this.carregar();

        this.renderizar();

        this.iniciarAtualizacaoAutomatica();

    }

    // ==================================================
    // Carregar
    // ==================================================

    async carregar() {

        const response = await dashboardService.obterDashboard(

            this.operacaoId

        );

        if (!response.success) {

            throw new Error("Erro ao carregar Dashboard.");

        }

        this.dashboard = response.data;

    }

    // ==================================================
    // Widgets
    // ==================================================

    registrarWidget(widget) {

        this.widgets.push(widget);

    }

    // ==================================================
    // Render
    // ==================================================

    renderizar() {

        this.widgets.forEach(widget => {

            widget.render(this.dashboard);

        });

    }

    // ==================================================
    // Atualização
    // ==================================================

    async atualizar() {

        await this.carregar();

        this.widgets.forEach(widget => {

            widget.refresh(this.dashboard);

        });

    }

    // ==================================================
    // Auto Refresh
    // ==================================================

    iniciarAtualizacaoAutomatica() {

        this.refreshTimer = setInterval(() => {

            this.atualizar();

        }, 60000);

    }

    // ==================================================
    // Destroy
    // ==================================================

    destroy() {

        clearInterval(this.refreshTimer);

        this.widgets.forEach(widget => {

            if (widget.destroy) {

                widget.destroy();

            }

        });

    }

}

export default new DashboardController();
