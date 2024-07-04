import { Skeleton } from "@/src/shadcn-ui/skeleton";

export const ResponsiveCardSkeleton = () => {
  return (
    <div className="border-b-2 text-sm px-3 py-4">
      <Skeleton className="h-7 w-full my-3" />
      <div className="grid grid-cols-[1fr_120px] pb-4 gap-4">
        <div className="flex flex-col justify-between">
          <Skeleton className="h-7 w-1/3" />
          <div className="flex justify-between items-center">
            <Skeleton className="h-7 w-1/3" />
            <Skeleton className="h-7 w-[28px] rounded-full" />
          </div>
        </div>
        <Skeleton className="h-[120px]" />
      </div>
    </div>
  );
};
