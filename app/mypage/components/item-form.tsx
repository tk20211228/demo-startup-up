"use client";

import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";

import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { createItem } from "@/actions/items";
import { useToast } from "@/components/ui/use-toast";
import { Label } from "@/components/ui/label";

const formSchema = z.object({
  amount: z.coerce.number().min(1),
  name: z.string().min(1).max(255),
});
type FormData = z.infer<typeof formSchema>;

export default function ItemForm() {
  const form = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      amount: 0,
    },
  });
  const { toast } = useToast();

  const onSubmit: SubmitHandler<FormData> = async (data) => {
    createItem(data)
      .then(() => {
        toast({
          title: "投稿しました",
          description: "アイテム一覧をご確認ください。",
        });
      })
      .catch(() => {
        toast({
          variant: "destructive",
          title: "エラーが発生しました",
          description: "管理者にお問い合わせください。",
        });
      });

    form.reset();
  };

  return (
    <div>
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit, () => {
            alert("エラーがあります");
          })}
          className="space-y-8"
        >
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>商品名</FormLabel>
                <FormControl>
                  <Input placeholder="コッペパン" {...field} />
                </FormControl>
                <FormDescription>
                  1文字以上255文字以下の商品名を入力してください。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="amount"
            render={({ field }) => (
              <FormItem>
                <FormLabel>値段</FormLabel>
                <FormControl>
                  <Input type="number" {...field} />
                </FormControl>
                <FormDescription>
                  0円以上の値段を入力してください。
                </FormDescription>
                <FormMessage />
              </FormItem>
            )}
          />

          <div className="grid w-full max-w-sm items-center gap-1.5">
            <Label htmlFor="picture">商品画像</Label>
            <Input id="picture" type="file" />
          </div>

          <Button
            disabled={form.formState.isSubmitted || !form.formState.isValid}
            type="submit"
          >
            商品追加
          </Button>
        </form>
      </Form>
    </div>
  );
}
