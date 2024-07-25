// ここはなぜ配列で型を定義しているのか？
export type RestaurantDetailDataType = {
  title: string;
  category: string;
  openingTime: string;
  longitude: number;
  latitude: number;
  phone: string;
  regularHoliday: string;
  address: string;
  imageSrc: string;
}[];
import { getRestaurants } from "@/src/data/restaurants";

export type Restaurants = Awaited<ReturnType<typeof getRestaurants>>;

export type CardDataType = Pick<
  Restaurants[0],
  | "name"
  | "genre"
  | "address"
  | "openTime"
  | "closeTime"
  | "id"
  | "phoneNumber"
  | "longitude"
  | "latitude"
  | "topBannerImage"
>[];

export type Genre =
  | "JAPANESE"
  | "WESTERN"
  | "CHINESE"
  | "FAST_FOOD"
  | "CURRY"
  | "RAMEN"
  | "SUSHI"
  | "SET_MEAL"
  | "TONKATSU"
  | "OTHER";
