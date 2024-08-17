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
};

export const BottomSheet = ({ children }: Props) => {
  return (
    <Sheet>
      <SheetTrigger className="w-full h-full">
        <div className="flex justify-center items-center">
          <IoIosArrowUp className="m-2 text-text" />
          <p className="text-text">リストを開く</p>
        </div>
      </SheetTrigger>
      <SheetContent side="bottom">
        <SheetHeader>
          <SheetTitle>Are you absolutely sure?</SheetTitle>
          <SheetDescription>リストから選ぶ</SheetDescription>
        </SheetHeader>
        {children}
      </SheetContent>
    </Sheet>
  );
};
