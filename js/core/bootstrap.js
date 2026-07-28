// ======================================================
// Manos Tech Platform
// Bootstrap
// ======================================================

import app from "./app.js";
import auth from "./auth.js";
import session from "./session.js";
import router from "./router.js";
import menu from "./menu.js";
import layout from "./layout.js";
import events from "./events.js";

class Bootstrap {

    constructor() {

        this.started = false;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    async start() {

        if (this.started) return;

        this.started = true;

        try {

            await this.initAuth();

            await this.initSession();

            await this.initRouter();

            await this.initLayout();

            await this.initMenu();

            await this.initEvents();

            await this.initApp();

            console.log("✅ Manos Tech iniciada com sucesso.");

        }

        catch (error) {

            console.error("Erro ao iniciar plataforma:", error);

        }

    }

    // ==================================================
    // Auth
    // ==================================================

    async initAuth() {

        if (typeof auth.init === "function") {

            await auth.init();

        }

    }

    // ==================================================
    // Sessão
    // ==================================================

    async initSession() {

        if (typeof session.init === "function") {

            await session.init();

        }

    }

    // ==================================================
    // Router
    // ==================================================

    async initRouter() {

        router.init();

    }

    // ==================================================
    // Layout
    // ==================================================

    async initLayout() {

        layout.init();

    }

    // ==================================================
    // Menu
    // ==================================================

    async initMenu() {

        menu.init();

    }

    // ==================================================
    // Eventos
    // ==================================================

    async initEvents() {

        events.init();

    }

    // ==================================================
    // Aplicação
    // ==================================================

    async initApp() {

        if (typeof app.init === "function") {

            await app.init();

        }

    }

}

const bootstrap = new Bootstrap();

document.addEventListener("DOMContentLoaded", async () => {

    await bootstrap.start();

});

export default bootstrap;
