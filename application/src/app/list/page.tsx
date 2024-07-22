import { getRestaurants } from "@/src/data/restaurants";
import { Card } from "@/src/features/common/components/Card";
import { ResponsiveCard } from "@/src/features/common/components/Card/ResponsiveCard";
import { Search } from "@/src/features/common/components/Search";
import { Select } from "@/src/features/common/components/Select";
import { getSearch } from "@/src/features/common/lib/data";

export default async function List() {
  const data = await getRestaurants();
  const searchDate = await getSearch();
  // HACK: 現状、loading.tsxでローディングを表示しているため、このコンポーネントの全てがスケルトンローディングになる
  // そのため、Suspenseを使用してCard/ResponsiveCardのみスケルトンローディングしたい。
  // ただ、それぞれがClientComponentであるため、Suspenseを使用することができない（useEffectでのローディングは検知できないため）
  // そのため、Card/ResponsiveCardのローディングを別コンポーネントに切り出し、Suspenseを使用する必要がある
  // でもコンポーネントの設計的になんか気持ち悪いし、やる気が出ないので保留。
  return (
    <div className="max-w-[1400px] m-auto py-6 px-3 md:px-0">
      {/* レスポンシブ */}
      <div className="grid grid-cols-[2fr_1fr] gap-4 place-content-center w-full px-3 md:hidden">
        <Search placeholder="店名・ジャンルで検索" data={searchDate} />
        <Select />
      </div>
      {/* 通常 */}
      <div className="hidden sm:block">
        <div className="grid grid-cols-auto-fill place-content-center place-items-end">
          <div className="grid-column-end--1 mr-4 hidden md:block">
            <Select />
          </div>
        </div>
        <div className="grid grid-cols-auto-fill place-content-center place-items-center">
          <Card data={data} />
        </div>
      </div>
      {/* レスポンシブ */}
      <div className="block sm:hidden">
        <ResponsiveCard data={data} />
      </div>
    </div>
  );
}
