// ======================================================
// Manos Tech Platform
// Portal Widget
// ======================================================

import BaseWidget from "./base.widget.js";

class PortalWidget extends BaseWidget {

    constructor() {

        super("portalWidget");

    }

    // ==================================================
    // Render
    // ==================================================

    render(dashboard) {

        this.data = dashboard;

        if (!this.container) return;

        const portal = dashboard.portal || {};

        this.container.innerHTML = `

            <div class="widget">

                <div class="widget-header">

                    🌐 Portal Cativo

                </div>

                <div class="widget-body">

                    ${this.item(
                        "Status",
                        portal.ativo ? "Ativo" : "Inativo"
                    )}

                    ${this.item(
                        "LGPD",
                        portal.aceite_lgpd ? "Obrigatório" : "Desativado"
                    )}

                    ${this.item(
                        "Carrossel",
                        portal.mostrar_carrossel ? "Ativo" : "Desativado"
                    )}

                    ${this.item(
                        "Banner",
                        portal.banner_url ? "Configurado" : "Não configurado"
                    )}

                    ${this.item(
                        "Logo",
                        portal.logo_url ? "Configurada" : "Não configurada"
                    )}

                    ${this.item(
                        "Redirecionamento",
                        portal.link_redirecionamento
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

export default PortalWidget;
