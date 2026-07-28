// ======================================================
// Manos Tech Platform
// Core App
// ======================================================

import auth from "./auth.js";
import router from "./router.js";
import storage from "./storage.js";

class App {

    constructor() {

        this.usuario = null;
        this.empresa = null;
        this.operacao = null;

    }

    // ==================================================
    // Inicialização
    // ==================================================

    async init() {

        await auth.verificarSessao();

        this.usuario = auth.usuario();

        this.empresa = storage.get("empresa");

        this.operacao = storage.get("operacao");

        this.configurarEventos();

        router.init();

    }

    // ==================================================
    // Eventos Globais
    // ==================================================

    configurarEventos() {

        window.addEventListener("beforeunload", () => {

            storage.set("empresa", this.empresa);

            storage.set("operacao", this.operacao);

        });

    }

    // ==================================================
    // Usuário
    // ==================================================

    usuarioAtual() {

        return this.usuario;

    }

    // ==================================================
    // Empresa
    // ==================================================

    empresaAtual() {

        return this.empresa;

    }

    definirEmpresa(empresa) {

        this.empresa = empresa;

        storage.set("empresa", empresa);

    }

    // ==================================================
    // Operação
    // ==================================================

    operacaoAtual() {

        return this.operacao;

    }

    definirOperacao(operacao) {

        this.operacao = operacao;

        storage.set("operacao", operacao);

    }

    limparOperacao() {

        this.operacao = null;

        storage.remove("operacao");

    }

    // ==================================================
    // Logout
    // ==================================================

    async logout() {

        storage.clear();

        await auth.logout();

    }

}

export default new App();
