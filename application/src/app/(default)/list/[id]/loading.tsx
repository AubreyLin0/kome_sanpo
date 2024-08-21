import { ContentsSkeleton } from "@/src/features/common/components/Contents/ContentsSkeleton";
import { Skeleton } from "@/src/shadcn-ui/skeleton";

export default function Loading() {
  return (
    <>
      <Skeleton className="relative h-[30vh] w-full" />
      <div className="m-4 sm:mx-16 sm:my-8">
        <ContentsSkeleton />
      </div>
    </>
  );
}
