// ==========================================================================
// CONFIGURAÇÃO CENTRALIZADA DO SUPABASE CLIENT
// ==========================================================================
// Este arquivo inicializa a conexão com o Supabase de forma centralizada.
// Todas as páginas do SaaS utilizam este cliente único.

const SUPABASE_URL = "https://hohedpulfobsqaiarnit.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_qqfVeMhLb60twRymouvRMQ_L7aI4nmX";

// Garante que o SDK do Supabase foi carregado antes de inicializar
if (!window.supabase) {
    console.error("SDK do Supabase não encontrado. Verifique se o script CDN está incluído.");
}

const supabaseClient = window.supabase ? window.supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY) : null;
