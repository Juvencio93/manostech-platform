// ======================================================
// Manos Tech Platform
// Session
// ======================================================

import storage from "./storage.js";

class Session {

    constructor() {

        this.CHAVE_USUARIO = "usuario";
        this.CHAVE_EMPRESA = "empresa";
        this.CHAVE_OPERACAO = "operacao";

    }

    // ==================================================
    // Usuário
    // ==================================================

    usuario() {

        return storage.get(this.CHAVE_USUARIO);

    }

    definirUsuario(usuario) {

        storage.set(this.CHAVE_USUARIO, usuario);

    }

    limparUsuario() {

        storage.remove(this.CHAVE_USUARIO);

    }

    // ==================================================
    // Empresa
    // ==================================================

    empresa() {

        return storage.get(this.CHAVE_EMPRESA);

    }

    definirEmpresa(empresa) {

        storage.set(this.CHAVE_EMPRESA, empresa);

    }

    limparEmpresa() {

        storage.remove(this.CHAVE_EMPRESA);

    }

    // ==================================================
    // Operação
    // ==================================================

    operacao() {

        return storage.get(this.CHAVE_OPERACAO);

    }

    definirOperacao(operacao) {

        storage.set(this.CHAVE_OPERACAO, operacao);

    }

    limparOperacao() {

        storage.remove(this.CHAVE_OPERACAO);

    }

    // ==================================================
    // Existe Operação
    // ==================================================

    possuiOperacao() {

        return !!this.operacao();

    }

    // ==================================================
    // Existe Empresa
    // ==================================================

    possuiEmpresa() {

        return !!this.empresa();

    }

    // ==================================================
    // Limpar Sessão
    // ==================================================

    limpar() {

        storage.remove(this.CHAVE_USUARIO);
        storage.remove(this.CHAVE_EMPRESA);
        storage.remove(this.CHAVE_OPERACAO);

    }

}

export default new Session();
