import { z } from "zod";

import { Genre } from "../type";

export const REGISTER_RESTAURANT_DATA_SCHEMA = z.object({
  name: z.string(),
  businessHours: z.string(),
  genre: z.string(),
  phoneNumber: z.string(),
  address: z.string(),
  image: z.instanceof(File, { message: "Profile is required" }),
  openTime_hours: z.string(),
  openTime_minutes: z.string(),
  closeTime_hours: z.string(),
  closeTime_minutes: z.string(),
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
