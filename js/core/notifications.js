// ======================================================
// Manos Tech Platform
// Notifications
// ======================================================

class Notifications {

    constructor() {

        this.container = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        this.container = document.getElementById("notifications");

        if (this.container) return;

        this.container = document.createElement("div");

        this.container.id = "notifications";

        this.container.className = "notifications";

        document.body.appendChild(this.container);

    }

    // ==================================================
    // Criar Toast
    // ==================================================

    create(type, title, message, duration = 4000) {

        if (!this.container) {

            this.init();

        }

        const toast = document.createElement("div");

        toast.className = `toast toast-${type}`;

        toast.innerHTML = `

            <div class="toast-icon">

                ${this.icon(type)}

            </div>

            <div class="toast-content">

                <strong>${title}</strong>

                <span>${message}</span>

            </div>

            <button class="toast-close">

                <i class="fa-solid fa-xmark"></i>

            </button>

        `;

        this.container.appendChild(toast);

        toast
            .querySelector(".toast-close")
            .addEventListener("click", () => {

                this.remove(toast);

            });

        if (duration > 0) {

            setTimeout(() => {

                this.remove(toast);

            }, duration);

        }

    }

    // ==================================================
    // Remover
    // ==================================================

    remove(toast) {

        if (!toast) return;

        toast.classList.add("hide");

        setTimeout(() => {

            toast.remove();

        }, 250);

    }

    // ==================================================
    // Ícones
    // ==================================================

    icon(type) {

        switch (type) {

            case "success":
                return '<i class="fa-solid fa-circle-check"></i>';

            case "error":
                return '<i class="fa-solid fa-circle-xmark"></i>';

            case "warning":
                return '<i class="fa-solid fa-triangle-exclamation"></i>';

            default:
                return '<i class="fa-solid fa-circle-info"></i>';

        }

    }

    // ==================================================
    // Métodos
    // ==================================================

    success(message, title = "Sucesso") {

        this.create(
            "success",
            title,
            message
        );

    }

    error(message, title = "Erro") {

        this.create(
            "error",
            title,
            message,
            6000
        );

    }

    warning(message, title = "Atenção") {

        this.create(
            "warning",
            title,
            message,
            5000
        );

    }

    info(message, title = "Informação") {

        this.create(
            "info",
            title,
            message
        );

    }

    // ==================================================
    // Loading
    // ==================================================

    loading(message = "Processando...") {

        this.create(
            "info",
            "Aguarde",
            message,
            0
        );

    }

}

export default new Notifications();
