// ======================================================
// Manos Tech Platform
// Dispositivos Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class DispositivosWidget extends BaseWidget {

    constructor() {

        super("dispositivosWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const dispositivos = dashboard.dispositivos ?? 0;

        const cache = dashboard.cache || {};

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    📱 Dispositivos

                </div>

                <div class="widget-body">

                    ${this.item(
                        "Dispositivos Cadastrados",
                        dispositivos
                    )}

                    ${this.item(
                        "Visitantes Online",
                        cache.conectados ?? 0
                    )}

                    ${this.item(
                        "Visitantes Ativos",
                        cache.visitantes ?? dashboard.visitantes ?? 0
                    )}

                    ${this.item(
                        "Novos Hoje",
                        cache.novos ?? 0
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

export default DispositivosWidget;
