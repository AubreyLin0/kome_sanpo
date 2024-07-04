import clsx from "clsx";
import { Card } from "@/src/features/common/components/Card";
import { Select } from "@/src/features/common/components/Select";
import { getRestaurantData } from "@/src/lib/data";

export default async function List() {
  const data = await getRestaurantData();
  const gridStyle = "grid grid-cols-auto-fill place-content-center";
  return (
    <>
      <div className={clsx(gridStyle, "place-items-end")}>
        <Select />
      </div>
      <div className={clsx(gridStyle, "place-items-center")}>
        <Card data={data} />
      </div>
    </>
  );
}
