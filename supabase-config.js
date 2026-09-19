// =====================================================
// Dr. Reshma Khatun Academic Portal
// Supabase Configuration
// =====================================================

const SUPABASE_URL = "https://uupdkljuavsxkrefmzr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_GC-wNHVFIGCxNujgk7t1XQA_jnxXdVqcb";

// Create Supabase client
window.supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
