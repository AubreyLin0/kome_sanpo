import { CardSkeleton } from "@/src/features/common/components/Card/CardSkeleton";

export default function Loading() {
  return (
    <div className="grid grid-cols-auto-fill py-6 place-items-center place-content-center">
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
      <CardSkeleton />
    </div>
  );
}
