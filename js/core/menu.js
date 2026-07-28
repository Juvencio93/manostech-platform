// ======================================================
// Manos Tech Platform
// Menu
// ======================================================

import permissions from "./permissions.js";
import session from "./session.js";
import router from "./router.js";

class Menu {

    constructor() {

        this.container = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        this.container = document.getElementById("menu");

        if (!this.container) return;

        this.render();

    }

    // ==================================================
    // Render
    // ==================================================

    render() {

        this.container.innerHTML = "";

        this.adicionarCabecalho();

        this.adicionarItem(
            permissions.menuDashboard(),
            "Dashboard",
            "#dashboard",
            "fa-solid fa-chart-line"
        );

        this.adicionarItem(
            permissions.menuEmpresas(),
            "Empresas",
            "#empresas",
            "fa-solid fa-building"
        );

        this.adicionarItem(
            permissions.menuOperacoes(),
            "Operações",
            "#operacoes",
            "fa-solid fa-sitemap"
        );

        this.adicionarItem(
            permissions.menuPortal(),
            "Portal",
            "#portal",
            "fa-solid fa-wifi"
        );

        this.adicionarItem(
            permissions.menuVisitantes(),
            "Visitantes",
            "#visitantes",
            "fa-solid fa-users"
        );

        this.adicionarItem(
            permissions.menuCampanhas(),
            "Campanhas",
            "#campanhas",
            "fa-solid fa-bullhorn"
        );

        this.adicionarItem(
            permissions.menuRelatorios(),
            "Relatórios",
            "#relatorios",
            "fa-solid fa-chart-column"
        );

        this.adicionarItem(
            permissions.menuFinanceiro(),
            "Financeiro",
            "#financeiro",
            "fa-solid fa-wallet"
        );

        this.adicionarItem(
            permissions.menuUsuarios(),
            "Usuários",
            "#usuarios",
            "fa-solid fa-user-gear"
        );

        this.adicionarItem(
            permissions.menuConfiguracoes(),
            "Configurações",
            "#configuracoes",
            "fa-solid fa-gear"
        );

    }

    // ==================================================
    // Cabeçalho
    // ==================================================

    adicionarCabecalho() {

        const usuario = session.usuario();

        const empresa = session.empresa();

        const operacao = session.operacao();

        const header = document.createElement("div");

        header.className = "menu-header";

        header.innerHTML = `

            <div class="menu-logo">

                <h2>Manos Tech</h2>

                <small>Plataforma de Marketing Inteligente</small>

            </div>

            <div class="menu-user">

                <strong>${usuario?.nome ?? ""}</strong>

                <small>${usuario?.nivel ?? ""}</small>

            </div>

            <div class="menu-context">

                <div>${empresa?.nome_fantasia ?? ""}</div>

                <div>${operacao?.nome ?? ""}</div>

            </div>

        `;

        this.container.appendChild(header);

    }

    // ==================================================
    // Item
    // ==================================================

    adicionarItem(visivel, titulo, rota, icone) {

        if (!visivel) return;

        const ativo = router.current() === rota;

        const item = document.createElement("a");

        item.href = rota;

        item.className = ativo

            ? "menu-item active"

            : "menu-item";

        item.innerHTML = `

            <i class="${icone}"></i>

            <span>${titulo}</span>

        `;

        this.container.appendChild(item);

    }

    // ==================================================
    // Atualizar
    // ==================================================

    atualizar() {

        this.render();

    }

}

export default new Menu();
