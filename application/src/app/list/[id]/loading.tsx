import { ConstantsSkeleton } from "@/src/features/common/components/Constants/ConstantsSkeleton";
import { Skeleton } from "@/src/shadcn-ui/skeleton";

export default function Loading() {
  return (
    <>
      <div className="relative w-full h-[30vh]">
        <Skeleton className="w-full h-full" />
      </div>
      <div className="m-4 sm:mx-16 sm:my-8">
        <ConstantsSkeleton />
      </div>
    </>
  );
}
