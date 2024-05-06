"use server";

import { createClient } from "@/lib/supabase/server";

export const singIn = async () => {
  const supabase = createClient();
  await supabase.auth.signInAnonymously();
};
export const singOut = async () => {
  const supabase = createClient();
  await supabase.auth.signOut();
};
