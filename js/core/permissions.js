// ======================================================
// Manos Tech Platform
// Permissions
// ======================================================

class Permissions {

    constructor() {

        this.permissions = [];

    }

    // ==================================================
    // Define as permissões do usuário
    // ==================================================

    set(permissions = []) {

        this.permissions = Array.isArray(permissions)
            ? permissions
            : [];

    }

    // ==================================================
    // Retorna todas as permissões
    // ==================================================

    get() {

        return this.permissions;

    }

    // ==================================================
    // Verifica uma permissão
    // ==================================================

    has(permission) {

        return this.permissions.includes(permission);

    }

    // ==================================================
    // Verifica se possui todas
    // ==================================================

    hasAll(permissions = []) {

        return permissions.every(permission =>
            this.permissions.includes(permission)
        );

    }

    // ==================================================
    // Verifica se possui pelo menos uma
    // ==================================================

    hasAny(permissions = []) {

        return permissions.some(permission =>
            this.permissions.includes(permission)
        );

    }

    // ==================================================
    // Limpa permissões
    // ==================================================

    clear() {

        this.permissions = [];

    }

}

const permissions = new Permissions();

export default permissions;
