// ======================================================
// Manos Tech Platform
// Configuração Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class ConfiguracaoService extends BaseService {

    constructor() {

        super("configuracoes");

    }

    // ==================================================
    // Buscar Configuração da Unidade
    // ==================================================

    async buscarPorUnidade(unidadeId) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("unidade_id", unidadeId)
                .single();

        });

    }

    // ==================================================
    // Atualizar Horário de Reinício
    // ==================================================

    async atualizarHorarioReinicio(unidadeId, horario) {

        return api.execute(async () => {

            return await this
                .query()
                .update({

                    horario_reinicio: horario,
                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Política de Retenção
    // ==================================================

    async atualizarRetencao(unidadeId, dias) {

        return api.execute(async () => {

            return await this
                .query()
                .update({

                    dias_retencao: dias,
                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Idioma
    // ==================================================

    async atualizarIdioma(unidadeId, idioma) {

        return api.execute(async () => {

            return await this
                .query()
                .update({

                    idioma,
                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Timezone
    // ==================================================

    async atualizarTimezone(unidadeId, timezone) {

        return api.execute(async () => {

            return await this
                .query()
                .update({

                    timezone,
                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Relatórios Automáticos
    // ==================================================

    async atualizarRelatorios(unidadeId, envioAutomatico, emailRelatorio) {

        return api.execute(async () => {

            return await this
                .query()
                .update({

                    envio_automatico: envioAutomatico,
                    email_relatorio: emailRelatorio,
                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Configuração Completa
    // ==================================================

    async salvar(unidadeId, dados) {

        return api.execute(async () => {

            return await this
                .query()
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
    // Restaurar Configuração Padrão
    // ==================================================

    async restaurarPadrao(unidadeId) {

        return api.execute(async () => {

            return await this
                .query()
                .update({

                    horario_reinicio: "03:00",

                    dias_retencao: 90,

                    envio_automatico: false,

                    email_relatorio: null,

                    idioma: "pt-BR",

                    timezone: "America/Sao_Paulo",

                    updated_at: new Date().toISOString()

                })
                .eq("unidade_id", unidadeId)
                .select()
                .single();

        });

    }

}

export default new ConfiguracaoService();
