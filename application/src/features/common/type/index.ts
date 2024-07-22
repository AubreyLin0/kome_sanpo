export type CardType = {
  title: string;
  category: string;
  distance: string;
  isOpen: boolean;
  isLiked: boolean;
  openingTime: string;
}[];

export type RestaurantDetailDataType = {
  title: string;
  category: string;
  openingTime: string;
  phone: string;
  regularHoliday: string;
  address: string;
  imageSrc: string;
};
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
