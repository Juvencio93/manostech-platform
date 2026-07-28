// ======================================================
// Manos Tech Platform
// Portal Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class PortalRepository extends BaseRepository {

    constructor() {

        super("portal_config");

    }

    // ==================================================
    // Configuração da Operação
    // ==================================================

    async buscarPorOperacao(operacaoId) {

        const { data, error } = await this
            .query()
            .select(`
                *,
                unidades(
                    id,
                    nome,
                    tipo,
                    logo_url,
                    link_redirecionamento,
                    ativo
                )
            `)
            .eq("unidade_id", operacaoId)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Portal Ativo
    // ==================================================

    async buscarPortalAtivo(operacaoId) {

        const { data, error } = await this
            .query()
            .select("*")
            .eq("unidade_id", operacaoId)
            .eq("ativo", true)
            .maybeSingle();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Atualizar Configuração
    // ==================================================

    async salvarConfiguracao(operacaoId, dados) {

        const portal = await this.buscarPorOperacao(operacaoId);

        if (portal) {

            return await this.atualizar(portal.id, dados);

        }

        return await this.criar({

            unidade_id: operacaoId,

            ...dados,

            ativo: true

        });

    }

    // ==================================================
    // Ativar
    // ==================================================

    async ativar(id) {

        return await this.atualizar(id, {

            ativo: true

        });

    }

    // ==================================================
    // Desativar
    // ==================================================

    async desativar(id) {

        return await this.atualizar(id, {

            ativo: false

        });

    }

    // ==================================================
    // Dashboard
    // ==================================================

    async dashboard(operacaoId) {

        const portal = await this.buscarPortalAtivo(

            operacaoId

        );

        return {

            configurado: !!portal,

            portal

        };

    }

}

export default new PortalRepository();
