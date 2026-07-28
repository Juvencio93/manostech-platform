// ======================================================
// Manos Tech Platform
// Gráfico Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class GraficoWidget extends BaseWidget {

    constructor() {

        super("graficoWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    📈 Fluxo de Visitantes

                </div>

                <div class="widget-body">

                    <canvas
                        id="dashboardChart"
                        height="260">
                    </canvas>

                </div>

            </div>

        `;

        this.desenharGrafico(dashboard);

    }

    // ==================================================
    // Gráfico
    // ==================================================

    desenharGrafico(dashboard) {

        if (typeof Chart === "undefined") {

            return;

        }

        const canvas = document.getElementById(

            "dashboardChart"

        );

        if (!canvas) return;

        const ctx = canvas.getContext("2d");

        if (this.chart) {

            this.chart.destroy();

        }

        const dados = dashboard.fluxo || [];

        this.chart = new Chart(ctx, {

            type: "line",

            data: {

                labels: dados.map(item => item.label),

                datasets: [

                    {

                        label: "Visitantes",

                        data: dados.map(item => item.valor),

                        borderWidth: 2,

                        fill: false,

                        tension: 0.35

                    }

                ]

            },

            options: {

                responsive: true,

                maintainAspectRatio: false,

                plugins: {

                    legend: {

                        display: false

                    }

                },

                scales: {

                    y: {

                        beginAtZero: true

                    }

                }

            }

        });

    }

    // ==================================================
    // Refresh
    // ==================================================

    refresh(dashboard) {

        this.render(dashboard);

    }

    // ==================================================
    // Destroy
    // ==================================================

    destroy() {

        if (this.chart) {

            this.chart.destroy();

        }

        super.destroy();

    }

}

export default GraficoWidget;
