import { MapTemplate } from "./MapTemplate";
import { getRestaurants } from "@/src/data/restaurants";

export default async function Map() {
  const data = await getRestaurants();
  return <MapTemplate data={data} />;
}
