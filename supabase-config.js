// Dr. Reshma Khatun Academic Portal — Supabase configuration

const SUPABASE_URL = "https://uupdkljuavsxkrefmzr.supabase.co";

const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_GC-wNHVFIGCxNujgk7t1XQA_jnxXdVqcb";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

// Make the same client available to code that uses window.supabaseClient.
window.supabaseClient = supabaseClient;
