// ======================================================
// Manos Tech Platform
// Supabase Client
// ======================================================

import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2';
import { APP_CONFIG } from './constants.js';

export const supabase = createClient(

    APP_CONFIG.SUPABASE_URL,

    APP_CONFIG.SUPABASE_ANON_KEY,

    {

        auth: {

            autoRefreshToken: true,

            persistSession: true,

            detectSessionInUrl: true

        },

        realtime: {

            params: {

                eventsPerSecond: 10

            }

        },

        global: {

            headers: {

                'X-Client-Info': `${APP_CONFIG.APP_NAME}/${APP_CONFIG.VERSION}`

            }

        }

    }

);
