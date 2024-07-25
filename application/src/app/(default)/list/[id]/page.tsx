import Image from "next/image";
import { getRestaurantDetailData } from "@/src/data/sample";
import { Contents } from "@/src/features/common/components/Contents";

export default async function DetailList() {
  const data = await getRestaurantDetailData();
  return data.map((item) => (
    <div key={item.title}>
      <div className="relative w-full h-[30vh]">
        <Image
          src={item.imageSrc}
          fill
          className="object-cover object-center"
          alt="detailSampleSoumen"
          quality={100}
        />
      </div>
      <div className="m-4 sm:mx-16 sm:my-8">
        <Contents
          title={item.title}
          category={item.category}
          openingTime={item.openingTime}
          phone={item.phone}
          regularHoliday={item.regularHoliday}
          address={item.address}
        />
      </div>
    </div>
  ));
}
