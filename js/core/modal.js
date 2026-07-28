// ======================================================
// Manos Tech Platform
// Global Modal
// ======================================================

class Modal {

    constructor() {

        this.modal = null;

        this.onConfirm = null;

        this.onCancel = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    init() {

        if (document.getElementById("globalModal")) {

            this.modal = document.getElementById("globalModal");

            return;

        }

        this.modal = document.createElement("div");

        this.modal.id = "globalModal";

        this.modal.className = "modal-overlay hidden";

        this.modal.innerHTML = `

            <div class="modal">

                <div class="modal-header">

                    <h3 id="modalTitle"></h3>

                    <button
                        id="modalClose"
                        class="modal-close">

                        <i class="fa-solid fa-xmark"></i>

                    </button>

                </div>

                <div
                    id="modalBody"
                    class="modal-body">

                </div>

                <div class="modal-footer">

                    <button
                        id="modalCancel"
                        class="btn btn-secondary">

                        Cancelar

                    </button>

                    <button
                        id="modalConfirm"
                        class="btn btn-primary">

                        Confirmar

                    </button>

                </div>

            </div>

        `;

        document.body.appendChild(this.modal);

        this.bind();

    }

    // ==================================================
    // Eventos
    // ==================================================

    bind() {

        this.modal
            .querySelector("#modalClose")
            .addEventListener("click", () => {

                this.close();

            });

        this.modal
            .querySelector("#modalCancel")
            .addEventListener("click", () => {

                if (this.onCancel) {

                    this.onCancel();

                }

                this.close();

            });

        this.modal
            .querySelector("#modalConfirm")
            .addEventListener("click", () => {

                if (this.onConfirm) {

                    this.onConfirm();

                }

                this.close();

            });

        this.modal.addEventListener("click", (e) => {

            if (e.target === this.modal) {

                this.close();

            }

        });

    }

    // ==================================================
    // Abrir
    // ==================================================

    open({

        title = "",

        body = "",

        confirmText = "Confirmar",

        cancelText = "Cancelar",

        showCancel = true,

        onConfirm = null,

        onCancel = null

    }) {

        if (!this.modal) {

            this.init();

        }

        this.onConfirm = onConfirm;

        this.onCancel = onCancel;

        this.modal
            .querySelector("#modalTitle")
            .innerHTML = title;

        this.modal
            .querySelector("#modalBody")
            .innerHTML = body;

        this.modal
            .querySelector("#modalConfirm")
            .textContent = confirmText;

        const cancel = this.modal.querySelector("#modalCancel");

        cancel.textContent = cancelText;

        cancel.style.display =

            showCancel

                ? "inline-flex"

                : "none";

        this.modal.classList.remove("hidden");

    }

    // ==================================================
    // Fechar
    // ==================================================

    close() {

        if (!this.modal) return;

        this.modal.classList.add("hidden");

        this.onConfirm = null;

        this.onCancel = null;

    }

    // ==================================================
    // Confirmação
    // ==================================================

    confirm({

        title,

        message,

        onConfirm,

        onCancel = null

    }) {

        this.open({

            title,

            body: `<p>${message}</p>`,

            onConfirm,

            onCancel

        });

    }

    // ==================================================
    // Alerta
    // ==================================================

    alert({

        title,

        message

    }) {

        this.open({

            title,

            body: `<p>${message}</p>`,

            showCancel: false,

            confirmText: "OK"

        });

    }

}

export default new Modal();
