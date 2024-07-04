import clsx from "clsx";
import { Card } from "@/src/features/common/components/Card";
import { ResponsiveCard } from "@/src/features/common/components/Card/ResponsiveCard";
import { Select } from "@/src/features/common/components/Select";
import { getRestaurantData } from "@/src/lib/data";

export default async function List() {
  const data = await getRestaurantData();
  const gridStyle = "grid grid-cols-auto-fill place-content-center";
  return (
    <>
      <div className="hidden sm:block">
        <div className={clsx(gridStyle, "place-items-end")}>
          <div className="grid-column-end--1 mr-4">
            <Select />
          </div>
        </div>
        <div className={clsx(gridStyle, "place-items-center")}>
          <Card data={data} />
        </div>
      </div>
      <div className="block sm:hidden">
        <ResponsiveCard data={data} />
      </div>
    </>
  );
}
