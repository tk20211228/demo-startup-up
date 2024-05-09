import { getItem } from "@/app/data/items";
import ItemForm from "@/app/mypage/components/item-form";
import { redirect } from "next/navigation";

export default async function Page({
  params: { id },
}: {
  params: {
    id: string;
  };
}) {
  const item = await getItem(id);
  if (!item) {
    redirect("/");
  }

  return (
    <div className="py-6 container">
      <h1>編集</h1>
      <ItemForm id={Number(id)} updateMode defaultValues={item} />
    </div>
  );
}
