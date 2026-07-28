// ======================================================
// Manos Tech Platform
// Global Events
// ======================================================

import layout from "./layout.js";
import router from "./router.js";
import session from "./session.js";

class Events {

    constructor() {

        this.initialized = false;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        if (this.initialized) return;

        this.initialized = true;

        this.bindClicks();

        this.bindForms();

        this.bindKeyboard();

        this.bindRouter();

        this.bindVisibility();

        this.bindResize();

    }

    // ==================================================
    // Cliques
    // ==================================================

    bindClicks() {

        document.addEventListener("click", (e) => {

            const logout = e.target.closest("[data-action='logout']");

            if (logout) {

                session.limpar();

                location.href = "index.html";

                return;

            }

            const menu = e.target.closest("[data-action='toggle-menu']");

            if (menu) {

                layout.toggleSidebar();

                return;

            }

        });

    }

    // ==================================================
    // Formulários
    // ==================================================

    bindForms() {

        document.addEventListener("submit", (e) => {

            const form = e.target;

            if (!form.checkValidity()) {

                e.preventDefault();

                form.reportValidity();

            }

        });

    }

    // ==================================================
    // Atalhos
    // ==================================================

    bindKeyboard() {

        document.addEventListener("keydown", (e) => {

            if (e.key === "Escape") {

                layout.fecharSidebar();

            }

            if (e.ctrlKey && e.key.toLowerCase() === "h") {

                e.preventDefault();

                router.go("#dashboard");

            }

        });

    }

    // ==================================================
    // Navegação
    // ==================================================

    bindRouter() {

        window.addEventListener("hashchange", () => {

            layout.atualizar();

        });

    }

    // ==================================================
    // Visibilidade
    // ==================================================

    bindVisibility() {

        document.addEventListener("visibilitychange", () => {

            if (document.hidden) return;

            layout.atualizar();

        });

    }

    // ==================================================
    // Resize
    // ==================================================

    bindResize() {

        window.addEventListener("resize", () => {

            if (window.innerWidth < 992) {

                layout.fecharSidebar();

            }

        });

    }

}

export default new Events();
