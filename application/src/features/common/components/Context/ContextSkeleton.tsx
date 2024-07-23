import { Skeleton } from "@/src/shadcn-ui/skeleton";

const SubContextSkeleton = () => {
  return (
    <div className="flex items-center w-fir">
      <Skeleton className="w-6 h-6" />
      <Skeleton className="w-[120px] h-[24px] ml-2" />
    </div>
  );
};

export const ContextSkeleton = () => {
  return (
    <>
      <div className="flex items-center justify-between">
        <Skeleton className="w-[60vw] md:h-[36px] h-[30px]" />
        <div className="flex items-center w-fit">
          <Skeleton className="w-[32px] h-[24px]" />
          <Skeleton className="w-6 h-6 ml-1" />
        </div>
      </div>
      <Skeleton className="h-[25px] px-3 sm:h-[35px] sm:text-sm md:h-[40px] md:px-5 my-2 sm:my-4 w-[100px]" />
      <div className="flex flex-col md:grid grid-cols-[max-content_auto] gap-x-4 gap-y-1">
        <SubContextSkeleton />
        <SubContextSkeleton />
        <SubContextSkeleton />
        <SubContextSkeleton />
      </div>
    </>
  );
};
