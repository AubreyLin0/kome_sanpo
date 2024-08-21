import { Plus } from "lucide-react";
import Image from "next/image";
import { Button } from "../Button";
import { Search } from "../Search";
import { UserIcon } from "../UserIcon";
import headerIcon from "@/public/headerIcon.png";
import { getSearch } from "@/src/data/sample";

export const Header = async () => {
  const searchDate = await getSearch();
  return (
    <header className="grid grid-cols-2 h-[10vh] gap-3 md:grid-cols-2-4-2 justify-items-center items-center shadow">
      <Image src={headerIcon} alt="headerIcon" className="p-3" />
      <Search
        placeholder="店名・ジャンルで検索"
        data={searchDate}
        className="hidden md:flex"
      />
      <div className="flex items-center justify-end sm:justify-center gap-3 p-3 w-full">
        <Button className="font-semibold">
          <Plus size="16px" strokeWidth="5px" className="sm:mr-2" />
          <p className="hidden sm:block">お店を追加</p>
        </Button>
        {/* とりあえずshadcnのデフォルトを使用 */}
        <UserIcon src={"https://github.com/shadcn.png"} />
      </div>
    </header>
  );
};
