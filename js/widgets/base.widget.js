// ======================================================
// Manos Tech Platform
// Base Widget
// ======================================================

class BaseWidget {

    constructor(id) {

        this.id = id;

        this.container = document.getElementById(id);

        this.data = null;

    }

    // ==================================================
    // Render
    // ==================================================

    render(data) {

        this.data = data;

    }

    // ==================================================
    // Refresh
    // ==================================================

    refresh(data) {

        this.data = data;

        this.render(data);

    }

    // ==================================================
    // Destroy
    // ==================================================

    destroy() {

        if (!this.container) return;

        this.container.innerHTML = "";

    }

    // ==================================================
    // Show
    // ==================================================

    show() {

        if (!this.container) return;

        this.container.style.display = "";

    }

    // ==================================================
    // Hide
    // ==================================================

    hide() {

        if (!this.container) return;

        this.container.style.display = "none";

    }

    // ==================================================
    // Loading
    // ==================================================

    loading() {

        if (!this.container) return;

        this.container.innerHTML = `

            <div class="widget-loading">

                Carregando...

            </div>

        `;

    }

}

export default BaseWidget;
