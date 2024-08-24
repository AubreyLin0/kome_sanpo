import { z } from "zod";

import { Genre } from "../type";

export const REGISTER_RESTAURANT_DATA_SCHEMA = z.object({
  name: z.string(),
  businessHours: z.string(),
  genre: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  image: z.instanceof(File, { message: "Profile is required" }),
  openTime: z.string(),
  closeTime: z.string(),
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
