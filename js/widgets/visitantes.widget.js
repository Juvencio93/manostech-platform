// ======================================================
// Manos Tech Platform
// Visitantes Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class VisitantesWidget extends BaseWidget {

    constructor() {

        super("visitantesWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const cache = dashboard.cache || {};

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    👥 Visitantes

                </div>

                <div class="widget-body">

                    ${this.card("Total", cache.visitantes ?? dashboard.visitantes ?? 0)}

                    ${this.card("Hoje", cache.visitantes_hoje ?? 0)}

                    ${this.card("Novos", cache.novos ?? 0)}

                    ${this.card("Recorrentes", cache.recorrentes ?? 0)}

                    ${this.card("Conectados", cache.conectados ?? 0)}

                </div>

            </div>

        `;

    }

    card(label, value) {

        return `

            <div class="info-row">

                <span>${label}</span>

                <strong>${value}</strong>

            </div>

        `;

    }

    refresh(dashboard) {

        this.render(dashboard);

    }

}

export default VisitantesWidget;
