import Image from "next/image";
import { Button } from "./ui/button";
import Link from "next/link";
import { currentUser } from "@/app/data/auth";
import { singIn, singOut } from "@/actions/auth";

export default async function Header() {
  const user = await currentUser();
  return (
    <header className="h-16 flex items-center border-b justify-between gap-5 px-5">
      <Button variant="ghost" className="font-bold text-xl">
        <Link href="/">LOGO</Link>
      </Button>
      <span className="flex-1"></span>
      <Button variant="ghost" className="text-md">
        <Link href="/items">商品一覧</Link>
      </Button>
      <Button variant="ghost" className="text-md">
        <Link href="/mypage">MyPage</Link>
      </Button>
      {user ? (
        <form action={singOut}>
          <Button variant="ghost">ログアウト</Button>
        </form>
      ) : (
        <Button className="bg-blue-500 text-white rounded p-2" asChild>
          <Link href="/login">Login</Link>
        </Button>
      )}
    </header>
  );
}
