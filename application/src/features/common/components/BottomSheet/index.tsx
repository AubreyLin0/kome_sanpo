import { ReactNode } from "react";
import { IoIosArrowUp } from "react-icons/io";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/src/shadcn-ui/sheet";

type Props = {
  children: ReactNode;
  isOpen: boolean;
  onOpenChange: () => void;
};

export const BottomSheet = ({ children, isOpen, onOpenChange }: Props) => {
  return (
    <Sheet open={isOpen} onOpenChange={onOpenChange}>
      <SheetTrigger className="w-full h-full">
        <div className="flex justify-center items-center">
          <IoIosArrowUp className="m-2 text-text" />
          <p className="text-text">リストを開く</p>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>リストから選ぶ</SheetTitle>
          <SheetDescription>クリックしたら場所を確認できます</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
