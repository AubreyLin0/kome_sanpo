import { Card } from "@/src/features/common/components/Card";
import { getRestaurantData } from "@/src/lib/data";

export default async function List() {
  const data = await getRestaurantData();
  return (
    <div>
      <Card data={data} />
    </div>
  );
}
