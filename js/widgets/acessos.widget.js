// ======================================================
// Manos Tech Platform
// Acessos Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class AcessosWidget extends BaseWidget {

    constructor() {

        super("acessosWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const cache = dashboard.cache || {};

        const acessos = dashboard.acessos ?? 0;

        const conectados = cache.conectados ?? 0;

        const tempoMedio = cache.tempo_medio ?? 0;

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    📶 Acessos

                </div>

                <div class="widget-body">

                    ${this.item(
                        "Total de Acessos",
                        acessos
                    )}

                    ${this.item(
                        "Conectados Agora",
                        conectados
                    )}

                    ${this.item(
                        "Tempo Médio",
                        this.formatarTempo(tempoMedio)
                    )}

                    ${this.item(
                        "Última Atualização",
                        this.formatarData(
                            cache.ultima_atualizacao
                        )
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
    // Tempo
    // ==================================================

    formatarTempo(minutos) {

        if (!minutos) {

            return "0 min";

        }

        const horas = Math.floor(minutos / 60);

        const mins = minutos % 60;

        if (horas > 0) {

            return `${horas}h ${mins}min`;

        }

        return `${mins} min`;

    }

    // ==================================================
    // Data
    // ==================================================

    formatarData(data) {

        if (!data) {

            return "--";

        }

        return new Date(data).toLocaleString("pt-BR");

    }

    // ==================================================
    // Refresh
    // ==================================================

    refresh(dashboard) {

        this.render(dashboard);

    }

}

export default AcessosWidget;
