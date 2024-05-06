import Link from "next/link";
import { searchItems } from "../data/items";

export default async function Page({
  searchParams: { q },
}: {
  searchParams: {
    q: string;
  };
}) {
  const items = await searchItems(q);
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-6">「{q}」検索結果</h1>

      {items?.length === 0 && <p>商品が見つかりませんでした。</p>}

      <div className="grid grid-cols-4 gap-2">
        {items?.map((item) => (
          <div key={item.id} className="border relative p-2 rounded-lg">
            <div className="aspect-video bg-muted border rounded-lg mb-2"></div>
            <Link href={`/items/${item.id}`}>
              {item.name} / {item.amount.toLocaleString()}円
              <span className="absolute inset-0"></span>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
