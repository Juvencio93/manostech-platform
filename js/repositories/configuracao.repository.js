// ======================================================
// Manos Tech Platform
// Configuração Repository
// ======================================================

import BaseRepository from "./base.repository.js";

class ConfiguracaoRepository extends BaseRepository {

    constructor() {

        super("configuracoes");

    }

    // ==================================================
    // Buscar Configuração da Operação
    // ==================================================

    async buscarPorOperacao(operacaoId) {

        return await this.buscarUm(
            "unidade_id",
            operacaoId
        );

    }

    // ==================================================
    // Atualizar Configuração
    // ==================================================

    async atualizarConfiguracao(operacaoId, dados) {

        const { data, error } = await this
            .query()
            .update({

                ...dados,

                updated_at: new Date().toISOString()

            })
            .eq("unidade_id", operacaoId)
            .select()
            .single();

        if (error) throw error;

        return data;

    }

    // ==================================================
    // Atualizar Horário Reinício
    // ==================================================

    async atualizarHorarioReinicio(operacaoId, horario) {

        return await this.atualizarConfiguracao(
            operacaoId,
            {
                horario_reinicio: horario
            }
        );

    }

    // ==================================================
    // Atualizar Retenção
    // ==================================================

    async atualizarRetencao(operacaoId, dias) {

        return await this.atualizarConfiguracao(
            operacaoId,
            {
                dias_retencao: dias
            }
        );

    }

    // ==================================================
    // Atualizar Idioma
    // ==================================================

    async atualizarIdioma(operacaoId, idioma) {

        return await this.atualizarConfiguracao(
            operacaoId,
            {
                idioma
            }
        );

    }

    // ==================================================
    // Atualizar Timezone
    // ==================================================

    async atualizarTimezone(operacaoId, timezone) {

        return await this.atualizarConfiguracao(
            operacaoId,
            {
                timezone
            }
        );

    }

    // ==================================================
    // Atualizar Email Relatórios
    // ==================================================

    async atualizarEmailRelatorio(operacaoId, email) {

        return await this.atualizarConfiguracao(
            operacaoId,
            {
                email_relatorio: email
            }
        );

    }

    // ==================================================
    // Envio Automático
    // ==================================================

    async atualizarEnvioAutomatico(operacaoId, ativo) {

        return await this.atualizarConfiguracao(
            operacaoId,
            {
                envio_automatico: ativo
            }
        );

    }

}

export default new ConfiguracaoRepository();
