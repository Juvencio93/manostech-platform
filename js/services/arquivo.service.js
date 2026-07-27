// ======================================================
// Manos Tech Platform
// Arquivo Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class ArquivoService extends BaseService {

    constructor() {

        super("arquivos");

        this.bucket = "manostech";

    }

    // ==================================================
    // Upload
    // ==================================================

    async upload({

        unidadeId,

        arquivo,

        tipo,

        referencia

    }) {

        return api.execute(async () => {

            const extensao = arquivo.name.split(".").pop();

            const nomeArquivo = `${crypto.randomUUID()}.${extensao}`;

            const caminho = `${unidadeId}/${tipo}/${nomeArquivo}`;

            const upload = await supabase
                .storage
                .from(this.bucket)
                .upload(caminho, arquivo, {

                    upsert: true

                });

            if (upload.error) {

                throw upload.error;

            }

            const {

                data: publicUrl

            } = supabase
                .storage
                .from(this.bucket)
                .getPublicUrl(caminho);

            return await this.criar({

                unidade_id: unidadeId,

                tipo,

                referencia,

                arquivo_url: publicUrl.publicUrl,

                tamanho: arquivo.size

            });

        });

    }

    // ==================================================
    // Excluir
    // ==================================================

    async excluirArquivo(id) {

        return api.execute(async () => {

            const registro = await this.buscar(id);

            if (!registro.success) {

                throw new Error("Arquivo não encontrado.");

            }

            const url = registro.data.arquivo_url;

            const bucketIndex = url.indexOf("/object/public/");

            if (bucketIndex !== -1) {

                const caminho = url
                    .split("/object/public/")[1]
                    .replace(`${this.bucket}/`, "");

                await supabase
                    .storage
                    .from(this.bucket)
                    .remove([caminho]);

            }

            return await this.excluir(id);

        });

    }

    // ==================================================
    // Buscar Arquivos
    // ==================================================

    async listarPorUnidade(unidadeId) {

        return this.buscarTodos(

            "unidade_id",

            unidadeId,

            {

                orderBy: "created_at",

                ascending: false

            }

        );

    }

    // ==================================================
    // Buscar por Tipo
    // ==================================================

    async listarPorTipo(unidadeId, tipo) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("unidade_id", unidadeId)
                .eq("tipo", tipo)
                .order("created_at", {

                    ascending: false

                });

        });

    }

    // ==================================================
    // Buscar por Referência
    // ==================================================

    async listarPorReferencia(referencia) {

        return this.buscarTodos(

            "referencia",

            referencia,

            {

                orderBy: "created_at",

                ascending: false

            }

        );

    }

    // ==================================================
    // Logos
    // ==================================================

    async logos(unidadeId) {

        return this.listarPorTipo(

            unidadeId,

            "logo"

        );

    }

    // ==================================================
    // Banners
    // ==================================================

    async banners(unidadeId) {

        return this.listarPorTipo(

            unidadeId,

            "banner"

        );

    }

    // ==================================================
    // Promoções
    // ==================================================

    async promocoes(unidadeId) {

        return this.listarPorTipo(

            unidadeId,

            "promocao"

        );

    }

    // ==================================================
    // Relatórios
    // ==================================================

    async relatorios(unidadeId) {

        return this.listarPorTipo(

            unidadeId,

            "relatorio"

        );

    }

}

export default new ArquivoService();
