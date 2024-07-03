import { Card } from "@/src/features/common/components/Card";
import { getRestaurantData } from "@/src/lib/data";

export default async function List() {
  const data = await getRestaurantData();
  return (
    <div className="grid grid-cols-auto-fill py-6 place-items-center place-content-center">
      <Card data={data} />
    </div>
  );
}
