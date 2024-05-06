import { createClient } from "@/lib/supabase/server";
import "server-only";

export const getItems = async () => {
  const supabase = createClient();

  const { data, error } = await supabase.from("items").select();

  console.log(error, data);

  return data?.map((item) => ({
    id: item.id,
    name: item.name,
    amount: item.amount,
  }));
  // return data;
};

export const searchItems = async (keyword: string) => {
  const supabase = createClient();
  let query = supabase.from("items").select();

  if (keyword.match(" and ")) {
    const keywords = keyword.split(" and ").map((keyword) => `%${keyword}%`);
    query = query.ilikeAllOf("name", keywords);
  }
  if (keyword.match(" or ")) {
    const keywords = keyword.split(" or ").map((keyword) => `%${keyword}%`);
    query = query.ilikeAnyOf("name", keywords);
  }
  const { data, error } = await query;

  // const { data, error } = await supabase
  //   .from("items")
  //   .select()
  //   // .like("name", `%${keyword}%`); // 大文字小文字を区別する
  //   .ilike("name", `%${keyword}%`); // 大文字小文字を区別しない

  console.log(error, data, keyword);

  return data;
};

export const getItem = async (id: string) => {
  const supabase = createClient();

  const { data, error } = await supabase
    .from("items")
    .select()
    .eq("id", id)
    .single();

  console.log(error, data);

  return data;
};
