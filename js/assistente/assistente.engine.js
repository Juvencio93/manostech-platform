// ======================================================
// Manos Tech Platform
// Assistente Engine
// ======================================================

import prompts from "./assistente.prompts.js";
import memory from "./assistente.memory.js";

class AssistenteEngine {

    analisar(dashboard) {

        memory.setDashboard(dashboard);

        const mensagens = [];

        mensagens.push(

            prompts.saudacao("Administrador")

        );

        mensagens.push(

            prompts.visitantes(

                dashboard.visitantes || 0

            )

        );

        mensagens.push(

            prompts.campanhas(

                dashboard.campanhas || 0

            )

        );

        mensagens.push(

            prompts.despedida()

        );

        return mensagens;

    }

}

export default new AssistenteEngine();
