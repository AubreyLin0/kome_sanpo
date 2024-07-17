import { ResponsiveCard } from "@/src/features/common/components/Card/ResponsiveCard";
import { GoogleMap } from "@/src/features/common/components/Map";
import { getRestaurantData } from "@/src/features/common/lib/data";

export default async function Map() {
  const data = await getRestaurantData();
  return (
    <div className="flex w-[100vw] h-[90vh]">
      <div className="w-[40vw] overflow-y-scroll">
        <ResponsiveCard data={data} />
      </div>
      <GoogleMap data={data} />
    </div>
  );
}
