// ======================================================
// Manos Tech Platform
// Assistente Prompts
// ======================================================

export default {

    saudacao(nome) {

        return `Bom dia, ${nome}.`;

    },

    visitantes(total) {

        return `Hoje captei ${total} visitantes.`;

    },

    novos(total) {

        return `${total} novos contatos cadastrados.`;

    },

    recorrentes(total) {

        return `${total} visitantes retornaram.`;

    },

    campanhas(total) {

        return `${total} campanhas estão ativas.`;

    },

    economia(valor) {

        return `Hoje economizei aproximadamente R$ ${valor}.`;

    },

    despedida() {

        return "Estou acompanhando sua operação em tempo real.";

    }

};
