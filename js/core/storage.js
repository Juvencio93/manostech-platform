// ======================================================
// Manos Tech Platform
// Storage
// ======================================================

class Storage {

    constructor() {

        this.prefix = "manostech";

    }

    // ==================================================
    // Chave
    // ==================================================

    key(chave) {

        return `${this.prefix}:${chave}`;

    }

    // ==================================================
    // Local Storage
    // ==================================================

    set(chave, valor) {

        localStorage.setItem(
            this.key(chave),
            JSON.stringify(valor)
        );

    }

    get(chave, padrao = null) {

        const valor = localStorage.getItem(
            this.key(chave)
        );

        if (!valor) {

            return padrao;

        }

        try {

            return JSON.parse(valor);

        }

        catch {

            return padrao;

        }

    }

    remove(chave) {

        localStorage.removeItem(
            this.key(chave)
        );

    }

    clear() {

        Object.keys(localStorage).forEach((item) => {

            if (item.startsWith(this.prefix + ":")) {

                localStorage.removeItem(item);

            }

        });

    }

    // ==================================================
    // Session Storage
    // ==================================================

    sessionSet(chave, valor) {

        sessionStorage.setItem(
            this.key(chave),
            JSON.stringify(valor)
        );

    }

    sessionGet(chave, padrao = null) {

        const valor = sessionStorage.getItem(
            this.key(chave)
        );

        if (!valor) {

            return padrao;

        }

        try {

            return JSON.parse(valor);

        }

        catch {

            return padrao;

        }

    }

    sessionRemove(chave) {

        sessionStorage.removeItem(
            this.key(chave)
        );

    }

    sessionClear() {

        Object.keys(sessionStorage).forEach((item) => {

            if (item.startsWith(this.prefix + ":")) {

                sessionStorage.removeItem(item);

            }

        });

    }

    // ==================================================
    // Utilitários
    // ==================================================

    exists(chave) {

        return localStorage.getItem(
            this.key(chave)
        ) !== null;

    }

    sessionExists(chave) {

        return sessionStorage.getItem(
            this.key(chave)
        ) !== null;

    }

    // ==================================================
    // Atualizar objeto
    // ==================================================

    merge(chave, dados) {

        const atual = this.get(chave, {});

        this.set(chave, {

            ...atual,

            ...dados

        });

    }

    sessionMerge(chave, dados) {

        const atual = this.sessionGet(chave, {});

        this.sessionSet(chave, {

            ...atual,

            ...dados

        });

    }

}

export default new Storage();
