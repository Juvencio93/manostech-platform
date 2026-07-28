// ======================================================
// Manos Tech Platform
// Campanhas Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class CampanhasWidget extends BaseWidget {

    constructor() {

        super("campanhasWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const total = dashboard.campanhas || 0;

        const portal = dashboard.portal || {};

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    📢 Campanhas

                </div>

                <div class="widget-body">

                    ${this.item(
                        "Campanhas Ativas",
                        total
                    )}

                    ${this.item(
                        "Portal Ativo",
                        portal?.ativo ? "Sim" : "Não"
                    )}

                    ${this.item(
                        "Carrossel",
                        portal?.mostrar_carrossel ? "Ativo" : "Desativado"
                    )}

                    ${this.item(
                        "Redirecionamento",
                        portal?.link_redirecionamento
                            ? "Configurado"
                            : "Não configurado"
                    )}

                </div>

            </div>

        `;

    }

    // ==================================================
    // Item
    // ==================================================

    item(label, value) {

        return `

            <div class="info-row">

                <span>${label}</span>

                <strong>${value}</strong>

            </div>

        `;

    }

    // ==================================================
    // Refresh
    // ==================================================

    refresh(dashboard) {

        this.render(dashboard);

    }

}

export default CampanhasWidget;
