// =========================================================
// Dr. Reshma Khatun Academic Portal
// Supabase Configuration
// =========================================================

const SUPABASE_URL = "https://uupdkljuuavsxxrefmzr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_GC-wNHVFIGCxNujk7t1XQA_jnXdVqcb";

// Create Supabase client
const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);
