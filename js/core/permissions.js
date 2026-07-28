// ======================================================
// Manos Tech Platform
// Permissions
// ======================================================

import session from "./session.js";

class Permissions {

    constructor() {

        this.niveis = {

            MASTER: 100,
            ADMIN: 90,
            GERENTE: 70,
            OPERADOR: 50,
            VISUALIZADOR: 10

        };

    }

    // ==================================================
    // Usuário
    // ==================================================

    usuario() {

        return session.usuario();

    }

    // ==================================================
    // Nível
    // ==================================================

    nivel() {

        return this.usuario()?.nivel ?? "VISUALIZADOR";

    }

    valorNivel() {

        return this.niveis[this.nivel()] ?? 0;

    }

    // ==================================================
    // Comparação
    // ==================================================

    pode(minimo) {

        return this.valorNivel() >= (this.niveis[minimo] ?? 0);

    }

    isMaster() {

        return this.nivel() === "MASTER";

    }

    isAdmin() {

        return this.pode("ADMIN");

    }

    isGerente() {

        return this.pode("GERENTE");

    }

    isOperador() {

        return this.pode("OPERADOR");

    }

    // ==================================================
    // Menus
    // ==================================================

    menuDashboard() {

        return this.pode("OPERADOR");

    }

    menuEmpresas() {

        return this.pode("ADMIN");

    }

    menuOperacoes() {

        return this.pode("OPERADOR");

    }

    menuPortal() {

        return this.pode("OPERADOR");

    }

    menuVisitantes() {

        return this.pode("OPERADOR");

    }

    menuCampanhas() {

        return this.pode("GERENTE");

    }

    menuRelatorios() {

        return this.pode("GERENTE");

    }

    menuFinanceiro() {

        return this.pode("ADMIN");

    }

    menuConfiguracoes() {

        return this.pode("ADMIN");

    }

    menuUsuarios() {

        return this.pode("ADMIN");

    }

    // ==================================================
    // Ações
    // ==================================================

    podeCriar() {

        return this.pode("OPERADOR");

    }

    podeEditar() {

        return this.pode("OPERADOR");

    }

    podeExcluir() {

        return this.pode("ADMIN");

    }

    podeFinanceiro() {

        return this.pode("ADMIN");

    }

    podeAdministrar() {

        return this.pode("MASTER");

    }

}

export default new Permissions();
