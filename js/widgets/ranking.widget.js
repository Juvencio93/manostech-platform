// ======================================================
// Manos Tech Platform
// Ranking Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class RankingWidget extends BaseWidget {

    constructor() {

        super("rankingWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const ranking = dashboard.ranking || [];

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    🏆 Ranking de Visitantes

                </div>

                <div class="widget-body">

                    ${ranking.length
                        ? ranking.map((item, index) => this.item(index + 1, item)).join("")
                        : this.vazio()
                    }

                </div>

            </div>

        `;

    }

    // ==================================================
    // Item
    // ==================================================

    item(posicao, item) {

        return `

            <div class="ranking-item">

                <div>

                    <strong>#${posicao}</strong>

                    ${item.nome}

                </div>

                <div>

                    ${item.total_visitas}

                </div>

            </div>

        `;

    }

    // ==================================================
    // Sem Dados
    // ==================================================

    vazio() {

        return `

            <div class="widget-empty">

                Nenhum dado disponível.

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

export default RankingWidget;
