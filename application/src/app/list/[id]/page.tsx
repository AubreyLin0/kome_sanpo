import Image from "next/image";
import { getRestaurantDetailData } from "@/src/data/sample";
import { Contents } from "@/src/features/common/components/Contents";

export default async function DetailList() {
  const data = await getRestaurantDetailData();
  return (
    <>
      <div className="relative w-full h-[30vh]">
        <Image
          src={data.imageSrc}
          fill
          className="object-cover object-center"
          alt="detailSampleSoumen"
          quality={100}
        />
      </div>
      <div className="m-4 sm:mx-16 sm:my-8">
        <Contents
          title={data.title}
          category={data.category}
          openingTime={data.openingTime}
          phone={data.phone}
          regularHoliday={data.regularHoliday}
          address={data.address}
        />
      </div>
    </>
  );
}
