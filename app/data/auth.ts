import "server-only";

import { cache } from "react";
import { createClient } from "@/lib/supabase/server";

export const currentUser = cache(async () => {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  console.log(user);

  return user;
});
