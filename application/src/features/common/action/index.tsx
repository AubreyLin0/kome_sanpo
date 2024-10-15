"use server";
// "use server"上で秘匿情報を絶対にexportしないようにしてください。
// 例: export const SECRET.KEY
// exportしている関数は実質的にはAPIとして公開されることになります。
// https://zenn.dev/moozaru/articles/b0ef001e20baaf

import { parseWithZod } from "@conform-to/zod";
import { REGISTER_RESTAURANT_DATA_SCHEMA } from "../constants";

export const registerRestaurantData = async (
  prevState: unknown,
  formData: FormData
) => {
  const submission = parseWithZod(formData, {
    schema: REGISTER_RESTAURANT_DATA_SCHEMA,
  });
  // データが有効でない場合は、エラーをクライアントに返します。
  if (submission.status !== "success") {
    return submission.reply();
  }
  // データが有効な場合は、データをデータベースに保存します。
};
