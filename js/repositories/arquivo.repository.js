// ======================================================
// Manos Tech Platform
// Arquivo Repository
// ======================================================

import BaseRepository from "./base.repository.js";
import { supabase } from "../core/supabase-client.js";

class ArquivoRepository extends BaseRepository {

    constructor() {

        super("arquivos");

        this.bucket = "arquivos";

    }

    // ==================================================
    // Listar por Operação
    // ==================================================

    async listarPorOperacao(operacaoId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .order("created_at", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Listar por Tipo
    // ==================================================

    async listarPorTipo(operacaoId, tipo) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("tipo", tipo)
            .order("created_at", {
                ascending: false
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Upload
    // ==================================================

    async upload(path, file) {

        const { data, error } = await supabase
            .storage
            .from(this.bucket)
            .upload(path, file, {
                upsert: true
            });

        if (error) throw error;

        return data;

    }

    // ==================================================
    // URL Pública
    // ==================================================

    obterUrl(path) {

        const { data } = supabase
            .storage
            .from(this.bucket)
            .getPublicUrl(path);

        return data.publicUrl;

    }

    // ==================================================
    // Excluir Arquivo
    // ==================================================

    async removerArquivo(path) {

        const { error } = await supabase
            .storage
            .from(this.bucket)
            .remove([path]);

        if (error) throw error;

        return true;

    }

    // ==================================================
    // Salvar Registro
    // ==================================================

    async salvarRegistro(dados) {

        return await this.criar(dados);

    }

}

export default new ArquivoRepository();
