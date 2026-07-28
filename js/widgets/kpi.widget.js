// ======================================================
// Manos Tech Platform
// KPI Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class KPIWidget extends BaseWidget {

    constructor() {

        super("kpiWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const cache = dashboard.cache || {};

        const visitantes = cache.visitantes ?? dashboard.visitantes ?? 0;

        const visitantesHoje = cache.visitantes_hoje ?? 0;

        const novos = cache.novos ?? 0;

        const recorrentes = cache.recorrentes ?? 0;

        const conectados = cache.conectados ?? 0;

        const acessos = cache.acessos ?? dashboard.acessos ?? 0;

        const campanhas = dashboard.campanhas ?? 0;

        const dispositivos = dashboard.dispositivos ?? 0;

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    Indicadores

                </div>

                <div class="widget-body">

                    <div class="kpi-grid">

                        ${this.card("👥", "Visitantes", visitantes)}

                        ${this.card("📅", "Hoje", visitantesHoje)}

                        ${this.card("🆕", "Novos", novos)}

                        ${this.card("🔁", "Recorrentes", recorrentes)}

                        ${this.card("🟢", "Online", conectados)}

                        ${this.card("📶", "Acessos", acessos)}

                        ${this.card("📢", "Campanhas", campanhas)}

                        ${this.card("📱", "Dispositivos", dispositivos)}

                    </div>

                </div>

            </div>

        `;

    }

    // ==================================================
    // Card
    // ==================================================

    card(icone, titulo, valor) {

        return `

            <div class="kpi-card">

                <div class="kpi-icon">

                    ${icone}

                </div>

                <div class="kpi-title">

                    ${titulo}

                </div>

                <div class="kpi-value">

                    ${valor}

                </div>

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

export default KPIWidget;
