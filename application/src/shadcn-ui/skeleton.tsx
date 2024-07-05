import { cn } from "@/src/features/common/lib/utils";

function Skeleton({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("animate-pulse rounded-md bg-mainGray", className)}
      {...props}
    />
  );
}

export { Skeleton };
