import { type ClassValue, clsx } from "clsx";
import dayjs from "dayjs";
import isBetween from "dayjs/plugin/isBetween";
import tz from "dayjs/plugin/timezone";
import utc from "dayjs/plugin/utc";
import { twMerge } from "tailwind-merge";

dayjs.extend(tz);
dayjs.extend(utc);
dayjs.extend(isBetween);

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function handleCalculateDistance(lon2: number, lat2: number): number {
  const defaultPosition = { longitude: 34.9968489, latitude: 135.7593823 }; // アイフル本社
  const { latitude: lat1, longitude: lon1 } = defaultPosition;

  const r = 6371; // km
  const p = Math.PI / 180;

  const a =
    0.5 -
    Math.cos((lat2 - lat1) * p) / 2 +
    (Math.cos(lat1 * p) *
      Math.cos(lat2 * p) *
      (1 - Math.cos((lon2 - lon1) * p))) /
      2;

  return parseFloat((2 * r * Math.asin(Math.sqrt(a))).toFixed(1));
}

export function handleCheckIfOpen({
  openTime,
  closeTime,
}: {
  openTime: string;
  closeTime: string;
}) {
  const currentTime = dayjs().tz("Asia/Tokyo");

  // databaseのopenTime, closeTimeはstring型(ex:'06:00')なので、それをdayjsオブジェクトに変換する
  const openDateTime = dayjs()
    .tz("Asia/Tokyo")
    .hour(Number(openTime.split(":")[0]))
    .minute(Number(openTime.split(":")[1]));
  const closeDateTime = dayjs()
    .tz("Asia/Tokyo")
    .hour(Number(closeTime.split(":")[0]))
    .minute(Number(closeTime.split(":")[1]));

  return currentTime.isBetween(openDateTime, closeDateTime, "hours", "[]");
}
