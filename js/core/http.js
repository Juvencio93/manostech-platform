// ======================================================
// Manos Tech Platform
// HTTP
// ======================================================

import notifications from "./notifications.js";
import loading from "./loading.js";

class Http {

    constructor() {

        this.timeout = 30000;

        this.retry = 1;

    }

    // ==================================================
    // Executar
    // ==================================================

    async execute(callback, options = {}) {

        const {

            loadingTitle = "Aguarde...",

            loadingMessage = "Processando informações...",

            showLoading = true,

            showError = true,

            retries = this.retry

        } = options;

        let tentativa = 0;

        while (tentativa <= retries) {

            try {

                if (showLoading) {

                    loading.show(
                        loadingTitle,
                        loadingMessage
                    );

                }

                const resultado = await this.withTimeout(

                    callback(),

                    this.timeout

                );

                if (showLoading) {

                    loading.hide();

                }

                return {

                    success: true,

                    data: resultado,

                    error: null

                };

            }

            catch (error) {

                tentativa++;

                if (tentativa > retries) {

                    if (showLoading) {

                        loading.hide();

                    }

                    if (showError) {

                        notifications.error(

                            this.formatError(error)

                        );

                    }

                    return {

                        success: false,

                        data: null,

                        error

                    };

                }

            }

        }

    }

    // ==================================================
    // Timeout
    // ==================================================

    async withTimeout(promise, ms) {

        let timer;

        return Promise.race([

            promise,

            new Promise((_, reject) => {

                timer = setTimeout(() => {

                    reject(

                        new Error(

                            "Tempo limite excedido."

                        )

                    );

                }, ms);

            })

        ]).finally(() => {

            clearTimeout(timer);

        });

    }

    // ==================================================
    // Formatar Erro
    // ==================================================

    formatError(error) {

        if (!error) {

            return "Erro desconhecido.";

        }

        if (typeof error === "string") {

            return error;

        }

        if (error.message) {

            return error.message;

        }

        return "Ocorreu um erro inesperado.";

    }

    // ==================================================
    // Sucesso
    // ==================================================

    success(message) {

        notifications.success(message);

    }

    // ==================================================
    // Informação
    // ==================================================

    info(message) {

        notifications.info(message);

    }

    // ==================================================
    // Aviso
    // ==================================================

    warning(message) {

        notifications.warning(message);

    }

    // ==================================================
    // Erro
    // ==================================================

    error(message) {

        notifications.error(message);

    }

}

export default new Http();
