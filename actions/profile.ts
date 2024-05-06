"use server";

import { createClient } from "@/lib/supabase/server";

export const uploadAvatar = async (formData: FormData) => {
  const image = formData.get("avatar") as File;

  const supabase = createClient();

  const { data, error } = await supabase.storage
    .from("avatars")
    .upload(image.name, image);

  console.log(data, error);

  // pubilc url get
  const {
    data: { publicUrl },
  } = supabase.storage.from("avatars").getPublicUrl(image.name);

  // profile table update
  // const { data. error } = await supabase.from("profile").update({avatarURL: publicUrl});

  return publicUrl;
};
