import { Skeleton } from "@/src/shadcn-ui/skeleton";

export const CardSkeleton = () => {
  return (
    <div className="w-[320px] grid grid-rows-[240px_140px] border rounded-md">
      <Skeleton className="h-full" />
      <div className="flex flex-col space-y-3 px-3 py-4">
        <Skeleton className="h-7 w-full" />
        <div className="flex justify-between items-center">
          <Skeleton className="h-7 w-1/3" />
          <Skeleton className="h-7 w-[28px] rounded-full" />
        </div>
        <Skeleton className="h-7 w-1/3" />
      </div>
    </div>
  );
};
