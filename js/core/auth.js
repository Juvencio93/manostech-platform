// ======================================================
// Manos Tech Platform
// Authentication
// ======================================================

import { supabase } from "./supabase-client.js";

class Auth {

    constructor() {

        this.session = null;
        this.user = null;

        supabase.auth.onAuthStateChange((event, session) => {

            this.session = session;
            this.user = session?.user ?? null;

        });

    }

    // ==================================================
    // Inicializa a autenticação
    // ==================================================

    async initialize() {

        const { data, error } = await supabase.auth.getSession();

        if (error) {

            console.error(error);
            return false;

        }

        this.session = data.session;
        this.user = data.session?.user ?? null;

        return this.isAuthenticated();

    }

    // ==================================================
    // Login
    // ==================================================

    async login(email, password) {

        const { data, error } = await supabase.auth.signInWithPassword({

            email,
            password

        });

        if (error) {

            return {

                success: false,
                error

            };

        }

        this.session = data.session;
        this.user = data.user;

        return {

            success: true,
            user: data.user

        };

    }

    // ==================================================
    // Logout
    // ==================================================

    async logout() {

        const { error } = await supabase.auth.signOut();

        if (error) {

            return {

                success: false,
                error

            };

        }

        this.session = null;
        this.user = null;

        return {

            success: true

        };

    }

    // ==================================================
    // Sessão atual
    // ==================================================

    getSession() {

        return this.session;

    }

    // ==================================================
    // Usuário autenticado
    // ==================================================

    getUser() {

        return this.user;

    }

    // ==================================================
    // Está autenticado?
    // ==================================================

    isAuthenticated() {

        return this.user !== null;

    }

    // ==================================================
    // Atualiza a sessão
    // ==================================================

    async refresh() {

        const { data, error } = await supabase.auth.refreshSession();

        if (error) {

            return false;

        }

        this.session = data.session;
        this.user = data.user;

        return true;

    }

}

const auth = new Auth();

export default auth;
