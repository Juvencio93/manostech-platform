// ======================================================
// Manos Tech Platform
// Financeiro Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class FinanceiroWidget extends BaseWidget {

    constructor() {

        super("financeiroWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const financeiro = dashboard.financeiro || {};

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    💰 Financeiro

                </div>

                <div class="widget-body">

                    ${this.item(
                        "Plano",
                        financeiro.plano || "--"
                    )}

                    ${this.item(
                        "Status",
                        financeiro.status || "--"
                    )}

                    ${this.item(
                        "Mensalidade",
                        this.moeda(financeiro.valor)
                    )}

                    ${this.item(
                        "Vencimento",
                        this.data(financeiro.vencimento)
                    )}

                </div>

            </div>

        `;

    }

    // ==================================================
    // Item
    // ==================================================

    item(label, valor) {

        return `

            <div class="info-row">

                <span>${label}</span>

                <strong>${valor}</strong>

            </div>

        `;

    }

    // ==================================================
    // Moeda
    // ==================================================

    moeda(valor) {

        if (valor === undefined || valor === null) {

            return "R$ 0,00";

        }

        return Number(valor).toLocaleString("pt-BR", {

            style: "currency",

            currency: "BRL"

        });

    }

    // ==================================================
    // Data
    // ==================================================

    data(data) {

        if (!data) {

            return "--";

        }

        return new Date(data).toLocaleDateString("pt-BR");

    }

    // ==================================================
    // Refresh
    // ==================================================

    refresh(dashboard) {

        this.render(dashboard);

    }

}

export default FinanceiroWidget;
