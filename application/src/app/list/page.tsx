import clsx from "clsx";
import { Card } from "@/src/features/common/components/Card";
import { ResponsiveCard } from "@/src/features/common/components/Card/ResponsiveCard";
import { Search } from "@/src/features/common/components/Search";
import { Select } from "@/src/features/common/components/Select";
import { getRestaurantData, getSearch } from "@/src/lib/data";

export default async function List() {
  const data = await getRestaurantData();
  const searchDate = await getSearch();
  const gridStyle = "grid grid-cols-auto-fill place-content-center";
  return (
    <>
      {/* レスポンシブ */}
      <div className="grid grid-cols-[2fr_1fr] gap-4 place-content-center w-full px-3 md:hidden">
        <Search placeholder="店名・ジャンルで検索" data={searchDate} />
        <Select />
      </div>
      {/* 通常 */}
      <div className="hidden sm:block">
        <div className={clsx(gridStyle, "place-items-end")}>
          <div className="grid-column-end--1 mr-4 hidden md:block">
            <Select />
          </div>
        </div>
        <div className={clsx(gridStyle, "place-items-center")}>
          <Card data={data} />
        </div>
      </div>
      {/* レスポンシブ */}
      <div className="block sm:hidden">
        <ResponsiveCard data={data} />
      </div>
    </>
  );
}
