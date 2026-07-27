// ======================================================
// Manos Tech Platform
// Campanha Service
// ======================================================

import BaseService from "./base.service.js";
import api from "../core/api.js";
import { supabase } from "../core/supabase-client.js";

class CampanhaService extends BaseService {

    constructor() {

        super("campanhas");

    }

    // ==================================================
    // Campanhas da Unidade
    // ==================================================

    async listarPorUnidade(unidadeId) {

        return this.buscarTodos(

            "unidade_id",

            unidadeId,

            {

                orderBy: "ordem",
                ascending: true

            }

        );

    }

    // ==================================================
    // Campanhas Ativas
    // ==================================================

    async listarAtivas(unidadeId) {

        return api.execute(async () => {

            return await this
                .query()
                .select("*")
                .eq("unidade_id", unidadeId)
                .eq("ativo", true)
                .order("ordem");

        });

    }

    // ==================================================
    // Buscar Campanha
    // ==================================================

    async buscar(id) {

        return super.buscar(id);

    }

    // ==================================================
    // Horários da Campanha
    // ==================================================

    async horarios(campanhaId) {

        return api.execute(async () => {

            return await supabase
                .from("campanhas_horarios")
                .select("*")
                .eq("campanha_id", campanhaId)
                .eq("ativo", true);

        });

    }

    // ==================================================
    // Criar Horário
    // ==================================================

    async adicionarHorario(dados) {

        return api.execute(async () => {

            return await supabase
                .from("campanhas_horarios")
                .insert(dados)
                .select()
                .single();

        });

    }

    // ==================================================
    // Atualizar Horário
    // ==================================================

    async atualizarHorario(id, dados) {

        return api.execute(async () => {

            return await supabase
                .from("campanhas_horarios")
                .update(dados)
                .eq("id", id)
                .select()
                .single();

        });

    }

    // ==================================================
    // Excluir Horário
    // ==================================================

    async excluirHorario(id) {

        return api.execute(async () => {

            return await supabase
                .from("campanhas_horarios")
                .delete()
                .eq("id", id);

        });

    }

    // ==================================================
    // Ativar Campanha
    // ==================================================

    async ativar(id) {

        return this.atualizar(id, {

            ativo: true

        });

    }

    // ==================================================
    // Desativar Campanha
    // ==================================================

    async desativar(id) {

        return this.atualizar(id, {

            ativo: false

        });

    }

    // ==================================================
    // Reordenar
    // ==================================================

    async alterarOrdem(id, ordem) {

        return this.atualizar(id, {

            ordem

        });

    }

    // ==================================================
    // Campanhas do Portal
    // ==================================================

    async portal(unidadeId) {

        return api.execute(async () => {

            const agora = new Date();

            const horaAtual = agora.toTimeString().substring(0, 8);

            const dias = [
                "domingo",
                "segunda",
                "terca",
                "quarta",
                "quinta",
                "sexta",
                "sabado"
            ];

            const diaSemana = dias[agora.getDay()];

            return await supabase
                .from("campanhas")
                .select(`
                    *,
                    campanhas_horarios (
                        hora_inicio,
                        hora_fim,
                        domingo,
                        segunda,
                        terca,
                        quarta,
                        quinta,
                        sexta,
                        sabado
                    )
                `)
                .eq("unidade_id", unidadeId)
                .eq("ativo", true);

        });

    }

}

export default new CampanhaService();
