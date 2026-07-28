// ======================================================
// Manos Tech Platform
// Layout
// ======================================================

import session from "./session.js";
import menu from "./menu.js";
import router from "./router.js";

class Layout {

    constructor() {

        this.sidebar = null;
        this.content = null;
        this.header = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        this.sidebar = document.getElementById("sidebar");

        this.header = document.getElementById("header");

        this.content = document.getElementById("app");

        this.render();

        this.bind();

    }

    // ==================================================
    // Render
    // ==================================================

    render() {

        this.renderHeader();

        menu.init();

    }

    // ==================================================
    // Header
    // ==================================================

    renderHeader() {

        if (!this.header) return;

        const usuario = session.usuario();

        const empresa = session.empresa();

        const operacao = session.operacao();

        this.header.innerHTML = `

            <div class="layout-header-left">

                <button
                    id="btnMenu"
                    class="btn-menu">

                    <i class="fa-solid fa-bars"></i>

                </button>

                <div>

                    <h2 id="pageTitle">

                        ${this.pageTitle()}

                    </h2>

                    <small>

                        ${empresa?.nome_fantasia ?? ""}

                        ${operacao ? " / " + operacao.nome : ""}

                    </small>

                </div>

            </div>

            <div class="layout-header-right">

                <button
                    id="btnIA"
                    class="btn-icon">

                    <i class="fa-solid fa-robot"></i>

                </button>

                <button
                    id="btnNotification"
                    class="btn-icon">

                    <i class="fa-solid fa-bell"></i>

                </button>

                <div class="layout-user">

                    <div class="avatar">

                        ${(usuario?.nome || "?").substring(0,1).toUpperCase()}

                    </div>

                    <div>

                        <strong>

                            ${usuario?.nome ?? ""}

                        </strong>

                        <small>

                            ${usuario?.nivel ?? ""}

                        </small>

                    </div>

                </div>

            </div>

        `;

    }

    // ==================================================
    // Eventos
    // ==================================================

    bind() {

        document.addEventListener("click", (e) => {

            if (e.target.closest("#btnMenu")) {

                this.toggleSidebar();

            }

        });

    }

    // ==================================================
    // Sidebar
    // ==================================================

    toggleSidebar() {

        if (!this.sidebar) return;

        this.sidebar.classList.toggle("collapsed");

    }

    abrirSidebar() {

        if (!this.sidebar) return;

        this.sidebar.classList.remove("collapsed");

    }

    fecharSidebar() {

        if (!this.sidebar) return;

        this.sidebar.classList.add("collapsed");

    }

    // ==================================================
    // Página
    // ==================================================

    pageTitle() {

        switch (router.current()) {

            case "#dashboard":
                return "Dashboard";

            case "#empresas":
                return "Empresas";

            case "#operacoes":
                return "Operações";

            case "#portal":
                return "Portal Cativo";

            case "#visitantes":
                return "Visitantes";

            case "#campanhas":
                return "Campanhas";

            case "#relatorios":
                return "Relatórios";

            case "#financeiro":
                return "Financeiro";

            case "#usuarios":
                return "Usuários";

            case "#configuracoes":
                return "Configurações";

            default:
                return "Dashboard";

        }

    }

    // ==================================================
    // Atualizar
    // ==================================================

    atualizar() {

        this.render();

    }

}

export default new Layout();
