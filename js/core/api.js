// ======================================================
// Manos Tech Platform
// API Helper
// ======================================================

class Api {

    /**
     * Executa uma operação assíncrona e padroniza o retorno.
     * @param {Function} callback
     * @returns {Promise<{success:boolean,data:any,error:any}>}
     */
    async execute(callback) {

        try {

            const result = await callback();

            if (result?.error) {
                throw result.error;
            }

            return {
                success: true,
                data: result?.data ?? result,
                error: null
            };

        } catch (error) {

            console.error("[API]", error);

            return {
                success: false,
                data: null,
                error
            };

        }

    }

}

const api = new Api();

export default api;
