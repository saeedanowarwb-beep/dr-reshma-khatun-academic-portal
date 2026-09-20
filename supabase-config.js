const SUPABASE_URL = "https://uupdkljuuavsxxrefmzr.supabase.co";
const SUPABASE_PUBLISHABLE_KEY =
  "sb_publishable_GC-wNHVFIGCxNujgk7t1XQA_jnXdVqcb";

const supabaseClient = window.supabase.createClient(
  SUPABASE_URL,
  SUPABASE_PUBLISHABLE_KEY
);

window.supabaseClient = supabaseClient;
