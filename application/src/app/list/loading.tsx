import { CardSkeleton } from "@/src/features/common/components/Card/CardSkeleton";
import { ResponsiveCardSkeleton } from "@/src/features/common/components/Card/ResponsiveCardSkeleton";

export default function Loading() {
  return (
    <>
      {/* 通常 */}
      <div className="hidden sm:grid grid-cols-auto-fill py-6 place-items-center place-content-center">
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
        <CardSkeleton />
      </div>
      {/* レスポンシブ */}
      <div className="block sm:hidden">
        <ResponsiveCardSkeleton />
        <ResponsiveCardSkeleton />
        <ResponsiveCardSkeleton />
      </div>
    </>
  );
}
