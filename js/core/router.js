// ======================================================
// Manos Tech Platform
// Router
// ======================================================

class Router {

    constructor() {

        this.routes = new Map();

        this.currentRoute = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        this.registrarRotas();

        window.addEventListener(

            "hashchange",

            () => this.navegar()

        );

        this.navegar();

    }

    // ==================================================
    // Registrar Rotas
    // ==================================================

    registrarRotas() {

        this.add("", "pages/dashboard.html");

        this.add("#dashboard", "pages/dashboard.html");

        this.add("#empresas", "pages/empresas.html");

        this.add("#operacoes", "pages/operacoes.html");

        this.add("#portal", "pages/portal.html");

        this.add("#visitantes", "pages/visitantes.html");

        this.add("#campanhas", "pages/campanhas.html");

        this.add("#relatorios", "pages/relatorios.html");

        this.add("#financeiro", "pages/financeiro.html");

        this.add("#configuracoes", "pages/configuracoes.html");

        this.add("#usuarios", "pages/usuarios.html");

    }

    // ==================================================
    // Adicionar Rota
    // ==================================================

    add(hash, page) {

        this.routes.set(hash, page);

    }

    // ==================================================
    // Navegação
    // ==================================================

    async navegar() {

        const hash = location.hash || "";

        const page =

            this.routes.get(hash)

            ||

            this.routes.get("");

        this.currentRoute = hash;

        await this.carregar(page);

    }

    // ==================================================
    // Carregar Página
    // ==================================================

    async carregar(page) {

        const container = document.getElementById("app");

        if (!container) return;

        try {

            const response = await fetch(page);

            if (!response.ok) {

                throw new Error(page);

            }

            container.innerHTML =

                await response.text();

        }

        catch (error) {

            container.innerHTML = `

                <div class="page-error">

                    <h2>Página não encontrada</h2>

                    <p>${page}</p>

                </div>

            `;

            console.error(error);

        }

    }

    // ==================================================
    // Navegar Programaticamente
    // ==================================================

    go(hash) {

        location.hash = hash;

    }

    // ==================================================
    // Página Atual
    // ==================================================

    current() {

        return this.currentRoute;

    }

}

export default new Router();
