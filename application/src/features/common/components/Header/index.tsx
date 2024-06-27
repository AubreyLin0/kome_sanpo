import { Plus } from "lucide-react";
import Image from "next/image";

import headerIcon from "../../../../../public/headerIcon.png";
import { Button } from "../Button";
import { Search } from "../Search";
import { UserIcon } from "../UserIcon";

import { getSearch } from "@/lib/data";

type Props = {
  src: string;
};

export const Header = async ({ src }: Props) => {
  const searchDate = await getSearch();
  return (
    <header className="grid grid-cols-2-4-2 justify-items-center items-center h-[65px] shadow">
      <Image src={headerIcon} alt="headerIcon" />
      <Search placeholder="店名・ジャンルで検索" data={searchDate} />
      <div className="flex gap-4">
        <Button className="font-semibold">
          <Plus size="16px" strokeWidth="5px" className="mr-2" />
          お店を追加
        </Button>
        <UserIcon src={src} />
      </div>
    </header>
  );
};
