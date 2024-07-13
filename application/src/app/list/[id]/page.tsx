import Image from "next/image";
import SampleSoumen from "@/public/matuya.jpg";
import { Constants } from "@/src/features/common/components/Constants";

export default async function DetailList() {
  return (
    <>
      <div className="relative w-full h-[30vh]">
        <Image
          src={"/pasta.jpg"}
          fill
          className="object-cover object-center"
          alt="detailSampleSoumen"
          quality={100}
        />
      </div>
      <div className="m-4 sm:mx-16 sm:my-8">
        <Constants
          title="美味しいそうめん"
          category="和食"
          openingTime="11:00~14:00"
          phone="000-0000-0000"
          regularHoliday="水曜日"
          address="東京都渋谷区1-22アイフルマンション101号室"
        />
      </div>
    </>
  );
}
