// ======================================================
// Manos Tech Platform
// Router
// ======================================================

import { ROUTES } from "./constants.js";

class Router {

    go(route) {

        window.location.href = route;

    }

    login() {

        this.go(ROUTES.LOGIN);

    }

    dashboard() {

        this.go(ROUTES.DASHBOARD);

    }

    eventos() {

        this.go(ROUTES.EVENTOS);

    }

    marketing() {

        this.go(ROUTES.MARKETING);

    }

    visitantes() {

        this.go(ROUTES.VISITANTES);

    }

    relatorios() {

        this.go(ROUTES.RELATORIOS);

    }

    configuracoes() {

        this.go(ROUTES.CONFIGURACOES);

    }

    back() {

        window.history.back();

    }

    reload() {

        window.location.reload();

    }

}

const router = new Router();

export default router;
