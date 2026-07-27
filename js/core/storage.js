// ======================================================
// Manos Tech Platform
// Storage Core
// ======================================================

import { supabase } from "./supabase-client.js";

class Storage {

    constructor() {

        this.bucket = "manostech";

    }

    // ==================================================
    // Upload
    // ==================================================

    async upload(caminho, arquivo, upsert = true) {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .upload(caminho, arquivo, {

                upsert

            });

        if (error) {

            throw error;

        }

        return data;

    }

    // ==================================================
    // Excluir
    // ==================================================

    async remove(caminho) {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .remove([caminho]);

        if (error) {

            throw error;

        }

        return data;

    }

    // ==================================================
    // URL Pública
    // ==================================================

    getPublicUrl(caminho) {

        return supabase
            .storage
            .from(this.bucket)
            .getPublicUrl(caminho)
            .data
            .publicUrl;

    }

    // ==================================================
    // Download
    // ==================================================

    async download(caminho) {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .download(caminho);

        if (error) {

            throw error;

        }

        return data;

    }

    // ==================================================
    // Listar Arquivos
    // ==================================================

    async listar(pasta = "") {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .list(pasta);

        if (error) {

            throw error;

        }

        return data;

    }

    // ==================================================
    // Mover Arquivo
    // ==================================================

    async mover(origem, destino) {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .move(origem, destino);

        if (error) {

            throw error;

        }

        return data;

    }

    // ==================================================
    // Copiar Arquivo
    // ==================================================

    async copiar(origem, destino) {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .copy(origem, destino);

        if (error) {

            throw error;

        }

        return data;

    }

}

export default new Storage();
