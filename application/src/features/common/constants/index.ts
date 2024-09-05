import { z } from "zod";

import { Genre } from "../type";

const REQUIRED_MESSAGE = "必須項目です";
const DOUBLE_CHARACTERS_MESSAGE = "全角文字で入力してください";
const SINGLE_BYTE_NUMBER_ZERO_MESSAGE = "半角数字で入力してください";
const VALID_CHARACTERS_MESSAGE = "使用できない文字が含まれています";
const IMAGE_REQUIRED_MESSAGE = "画像を選択してください";
const SELECT_REQUIRED_MESSAGE = "選択してください";

const DOUBLE_CHARACTERS = /^[ぁ-ゖゝゞァ-ヷー一-龥丑-響々﨑㟢]+$/;
const SINGLE_BYTE_NUMBER_ZERO = /^[0-9]+$/;
const VALID_CHARACTERS =
  /^(?![\s　]*$)([ぁ-ゖゝゞァ-ヷｱ-ﾝー一-龥丑-響々０-９ａ-ｚＡ-Ｚ　！＂＃＄％＆＇（）＊＋，－．／：；＜＝＞？＠［￥＼］＾＿｀｛｜｝〜。、・「」0-9a-zA-Z !\"#$%&'()*+,-.\/:;<=>?@\[¥\]^_`{|}~｡､･｢｣])+$/;

export const REGISTER_RESTAURANT_DATA_SCHEMA = z.object({
  name: z
    .string({ required_error: REQUIRED_MESSAGE })
    .regex(DOUBLE_CHARACTERS, { message: DOUBLE_CHARACTERS_MESSAGE }),
  genre: z
    .string({ required_error: REQUIRED_MESSAGE })
    .regex(DOUBLE_CHARACTERS, { message: DOUBLE_CHARACTERS_MESSAGE }),
  phoneNumber: z
    .string({ required_error: REQUIRED_MESSAGE })
    .max(11)
    .regex(SINGLE_BYTE_NUMBER_ZERO, {
      message: SINGLE_BYTE_NUMBER_ZERO_MESSAGE,
    }),
  address: z
    .string({ required_error: REQUIRED_MESSAGE })
    .regex(VALID_CHARACTERS, { message: VALID_CHARACTERS_MESSAGE }),
  image: z.instanceof(File, { message: IMAGE_REQUIRED_MESSAGE }),
  openTime_hours: z.string({ required_error: SELECT_REQUIRED_MESSAGE }),
  openTime_minutes: z.string({ required_error: SELECT_REQUIRED_MESSAGE }),
  closeTime_hours: z.string({ required_error: SELECT_REQUIRED_MESSAGE }),
  closeTime_minutes: z.string({ required_error: SELECT_REQUIRED_MESSAGE }),
});

export const RESTAURANT_GENRE = new Map<Genre, string>([
  ["JAPANESE", "和食"],
  ["WESTERN", "洋食"],
  ["CHINESE", "中華"],
  ["FAST_FOOD", "ファーストフード"],
  ["CURRY", "カレー"],
  ["RAMEN", "ラーメン"],
  ["SUSHI", "お寿司"],
  ["SET_MEAL", "定食"],
  ["TONKATSU", "とんかつ"],
  ["OTHER", "その他"],
]);

export const HOURS = Array.from({ length: 24 }, (_, item) =>
  `${item}`.padStart(2, "0")
);
export const MINUTES = Array.from({ length: 60 }, (_, item) =>
  `${item}`.padStart(2, "0")
);
