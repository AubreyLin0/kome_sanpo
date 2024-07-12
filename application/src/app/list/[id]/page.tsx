import Image from "next/image";
import SampleSoumen from "@/public/matuya.jpg";

export default async function DetailList() {
  return (
    <>
      <div className="relative w-full h-[250px]">
        <Image
          src={"/pasta.jpg"}
          fill
          className="object-cover object-center"
          alt="detailSampleSoumen"
          quality={100}
        />
      </div>
      ああああ
    </>
  );
}
