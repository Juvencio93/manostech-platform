// ======================================================
// Manos Tech Platform
// Portal Service
// ======================================================

import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class PortalService {

    constructor() {

        this.table = "portal_config";

    }

    // ==================================================
    // Buscar Configuração do Portal
    // ==================================================

    async buscar(unidadeId) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

        });

    }

    // ==================================================
    // Atualizar Portal
    // ==================================================

    async salvar(unidadeId, dados) {

        return api.execute(async () => {

            return await supabase
                .from(this.table)
                .update({

                    ...dados,

                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Logo
    // ==================================================

    async atualizarLogo(unidadeId, logoUrl) {

        return this.salvar(unidadeId, {

            logo_url: logoUrl

        });

    }

    // ==================================================
    // Atualizar Banner
    // ==================================================

    async atualizarBanner(unidadeId, bannerUrl) {

        return this.salvar(unidadeId, {

            banner_url: bannerUrl

        });

    }

    // ==================================================
    // Atualizar Cor Primária
    // ==================================================

    async atualizarCorPrimaria(unidadeId, cor) {

        return this.salvar(unidadeId, {

            cor_primaria: cor

        });

    }

    // ==================================================
    // Atualizar Cor Secundária
    // ==================================================

    async atualizarCorSecundaria(unidadeId, cor) {

        return this.salvar(unidadeId, {

            cor_secundaria: cor

        });

    }

    // ==================================================
    // Atualizar Texto Inicial
    // ==================================================

    async atualizarMensagem(unidadeId, mensagem) {

        return this.salvar(unidadeId, {

            mensagem

        });

    }

    // ==================================================
    // Atualizar LGPD
    // ==================================================

    async atualizarLgpd(unidadeId, texto) {

        return this.salvar(unidadeId, {

            lgpd_texto: texto

        });

    }

    // ==================================================
    // Atualizar Link
    // ==================================================

    async atualizarLink(unidadeId, link) {

        return this.salvar(unidadeId, {

            link_redirecionamento: link

        });

    }

    // ==================================================
    // Carregar Portal Completo
    // ==================================================

    async carregarPortal(unidadeId) {

        return api.execute(async () => {

            const [portal, campanhas] = await Promise.all([

                supabase
                    .from("portal_config")
                    .select("*")
                    .eq("unidade_id", unidadeId)
                    .single(),

                supabase
                    .from("campanhas")
                    .select("*")
                    .eq("unidade_id", unidadeId)
                    .eq("ativo", true)
                    .order("ordem")

            ]);

            return {

                portal: portal.data,

                campanhas: campanhas.data

            };

        });

    }

}

export default new PortalService();
