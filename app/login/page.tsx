import { singIn, singOut } from "@/actions/auth";
import { Button } from "@/components/ui/button";
import { currentUser } from "@/app/data/auth";
import { redirect } from "next/navigation";

export default async function Page() {
  const user = await currentUser();
  if (user) {
    redirect("/mypage");
  }
  return (
    <div className="p-6">
      <h1 className="font-bold text-2xl mb-6">LOGIN</h1>
      <p>{JSON.stringify(user)}</p>

      {user && <p>{JSON.stringify(user)}</p>}

      {user ? (
        <form action={singOut}>
          <Button className="bg-red-500 text-white rounded p-2">
            ログアウト
          </Button>
        </form>
      ) : (
        <form action={singIn}>
          <Button className="bg-blue-500 text-white rounded p-2">
            ログイン
          </Button>
        </form>
      )}
    </div>
  );
}
