import { uploadAvatar } from "@/actions/profile";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Page() {
  return (
    <div>
      <form action={uploadAvatar}>
        <div className="grid w-full max-w-sm items-center gap-1.5">
          <Label htmlFor="picture">Picture</Label>
          <Input name="avatar" type="file" />
          <Button>アップロード</Button>
        </div>
      </form>
    </div>
  );
}
