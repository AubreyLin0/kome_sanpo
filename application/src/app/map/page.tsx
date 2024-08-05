import { getRestaurants } from "@/src/data/restaurants";
import { MapTemplate } from "@/src/features/common/components/Templates/Map";

export default async function Map() {
  const data = await getRestaurants();
  return <MapTemplate data={data} />;
}
