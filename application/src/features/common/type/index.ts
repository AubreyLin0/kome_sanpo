import { getRestaurants } from "@/src/api/restaurants";

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
  | "images"
>[];
