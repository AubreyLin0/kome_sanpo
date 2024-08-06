import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetOverlay,
  SheetPortal,
} from "@/src/shadcn-ui/sheet";

export const BottomSheet = () => {
  return (
    <Sheet>
      <SheetOverlay />
      <SheetTrigger>Open Bottom Sheet</SheetTrigger>
      <SheetPortal>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>This is a bottom sheet.</SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <SheetClose>Close</SheetClose>
          </SheetFooter>
        </SheetContent>
      </SheetPortal>
    </Sheet>
  );
};
