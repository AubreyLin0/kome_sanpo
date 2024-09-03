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

export type RegisterRestaurantDataType = {
  name: string;
  genre: Genre;
  openTime_hours: string;
  openTime_minutes: string;
  closeTime_hours: string;
  closeTime_minutes: string;
  address: string;
  image: File;
  phoneNumber: string;
};
