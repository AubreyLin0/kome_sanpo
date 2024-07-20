import { MapTemplate } from "./MapTemplate";
import { getRestaurantData } from "@/src/features/common/lib/data";

export default async function Map() {
  const data = await getRestaurantData();
  return <MapTemplate data={data} />;
}
