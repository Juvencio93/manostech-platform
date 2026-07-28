// ======================================================
// Manos Tech Platform
// Global Loading
// ======================================================

class Loading {

    constructor() {

        this.element = null;

        this.counter = 0;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        if (document.getElementById("globalLoading")) {

            this.element = document.getElementById("globalLoading");

            return;

        }

        this.element = document.createElement("div");

        this.element.id = "globalLoading";

        this.element.className = "loading-overlay hidden";

        this.element.innerHTML = `

            <div class="loading-box">

                <div class="loading-spinner"></div>

                <h3 id="loadingTitle">

                    Aguarde...

                </h3>

                <small id="loadingMessage">

                    Processando informações.

                </small>

            </div>

        `;

        document.body.appendChild(this.element);

    }

    // ==================================================
    // Mostrar
    // ==================================================

    show(

        title = "Aguarde...",

        message = "Processando informações."

    ) {

        if (!this.element) {

            this.init();

        }

        this.counter++;

        document.getElementById("loadingTitle").textContent = title;

        document.getElementById("loadingMessage").textContent = message;

        this.element.classList.remove("hidden");

    }

    // ==================================================
    // Ocultar
    // ==================================================

    hide() {

        if (!this.element) return;

        this.counter--;

        if (this.counter > 0) return;

        this.counter = 0;

        this.element.classList.add("hidden");

    }

    // ==================================================
    // Reset
    // ==================================================

    reset() {

        this.counter = 0;

        if (this.element) {

            this.element.classList.add("hidden");

        }

    }

    // ==================================================
    // Estado
    // ==================================================

    isVisible() {

        if (!this.element) return false;

        return !this.element.classList.contains("hidden");

    }

}

export default new Loading();
