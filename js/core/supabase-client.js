// ======================================================
// Manos Tech Platform
// Supabase Client
// ======================================================

import { createClient } from "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2/+esm";
import { APP_CONFIG } from "./constants.js";

// ======================================================
// Validação das configurações
// ======================================================

if (!APP_CONFIG.SUPABASE_URL) {
    throw new Error("SUPABASE_URL não configurada.");
}

if (!APP_CONFIG.SUPABASE_ANON_KEY) {
    throw new Error("SUPABASE_ANON_KEY não configurada.");
}

// ======================================================
// Cliente Supabase
// ======================================================

export const supabase = createClient(

    APP_CONFIG.SUPABASE_URL,

    APP_CONFIG.SUPABASE_ANON_KEY,

    {

        auth: {

            autoRefreshToken: true,

            persistSession: true,

            detectSessionInUrl: true,

            flowType: "pkce"

        },

        realtime: {

            params: {

                eventsPerSecond: 10

            }

        },

        global: {

            headers: {

                "X-Client-Info": `${APP_CONFIG.APP_NAME}/${APP_CONFIG.VERSION}`

            }

        }

    }

);

export default supabase;
