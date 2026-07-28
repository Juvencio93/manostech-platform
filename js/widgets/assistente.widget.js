// ======================================================
// Manos Tech Platform
// Assistente Widget
// ======================================================

import BaseWidget from "./base.widget.js";
import assistenteService from "../assistente/assistente.service.js";

class AssistenteWidget extends BaseWidget {

    constructor() {

        super("assistenteWidget");

        this.mensagens = [];

    }

    // ==================================================
    // Render
    // ==================================================

    async render(dashboard) {

        this.data = dashboard;

        this.loading();

        const resposta = await assistenteService.analisar({

            dashboard

        });

        if (!resposta.success) {

            this.container.innerHTML = `

                <div class="widget">

                    <div class="widget-header">

                        🤖 Assistente Manos

                    </div>

                    <div class="widget-body">

                        Não foi possível carregar o assistente.

                    </div>

                </div>

            `;

            return;

        }

        this.mensagens = resposta.data;

        this.container.innerHTML = `

            <div class="widget widget-assistente">

                <div class="widget-header">

                    🤖 Assistente Manos

                </div>

                <div class="widget-body">

                    ${this.renderMensagens()}

                </div>

            </div>

        `;

    }

    // ==================================================
    // Mensagens
    // ==================================================

    renderMensagens() {

        return this.mensagens.map(mensagem => `

            <div class="assistente-item">

                ${mensagem}

            </div>

        `).join("");

    }

    // ==================================================
    // Refresh
    // ==================================================

    async refresh(dashboard) {

        await this.render(dashboard);

    }

    // ==================================================
    // Destroy
    // ==================================================

    destroy() {

        if (this.container) {

            this.container.innerHTML = "";

        }

    }

}

export default AssistenteWidget;
