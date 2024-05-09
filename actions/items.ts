"use server";

import { currentUser } from "@/app/data/auth";
import { createClient } from "@/lib/supabase/server";
import { TablesInsert, TablesUpdate } from "@/types/database";

export const createItem = async (
  formData: // {
  // amount: number;
  // name: string;
  // }
  TablesInsert<"items">
) => {
  const supabase = createClient();

  const user = await currentUser();
  if (!user) {
    throw new Error("ログインしていません");
  }

  const { error } = await supabase.from("items").insert(formData);

  if (error) {
    throw new Error(error.message);
  }
};

export const updateItem = async (
  id: number,
  formData: TablesUpdate<"items">
) => {
  const supabase = createClient();

  const user = await currentUser();
  if (!user) {
    throw new Error("ログインしていません");
  }

  const { error } = await supabase.from("items").update(formData).eq("id", id);

  if (error) {
    throw new Error(error.message);
  }
};

export const deleteItem = async (id: number) => {
  const supabase = createClient();

  const user = await currentUser();
  if (!user) {
    throw new Error("ログインしていません");
  }

  const { error } = await supabase.from("items").delete().eq("id", id);

  console.log(error);
};
