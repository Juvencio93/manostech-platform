// ======================================================
// Manos Tech Platform
// Session Manager
// ======================================================

import auth from "./auth.js";

class Session {

    constructor() {

        this.initialized = false;

    }

    // ==================================================
    // Inicializa a sessão
    // ==================================================

    async initialize() {

        if (this.initialized) {
            return true;
        }

        const authenticated = await auth.initialize();

        this.initialized = true;

        return authenticated;

    }

    // ==================================================
    // Sessão atual
    // ==================================================

    get() {

        return auth.getSession();

    }

    // ==================================================
    // Usuário atual
    // ==================================================

    getUser() {

        return auth.getUser();

    }

    // ==================================================
    // Está autenticado?
    // ==================================================

    isAuthenticated() {

        return auth.isAuthenticated();

    }

    // ==================================================
    // Encerra sessão
    // ==================================================

    async destroy() {

        await auth.logout();

    }

}

const session = new Session();

export default session;
