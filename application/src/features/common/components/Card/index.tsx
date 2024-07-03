"use client";
import { clsx } from "clsx";
import Image from "next/image";
import { Button } from "../Button";
import sampleTyahan from "@/public/sample_tyahan.jpeg";
import {
  Card as ShadcnCard,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
} from "@/src/shadcn-ui/card";

// todo:Imageのsrcをpropsで受け取る
export type CardData = {
  title: string;
  category: string;
  distance: string;
  isOpen: boolean;
  openingTime: string;
}[];

type Props = {
  data: CardData;
};

export const Card = ({ data }: Props) => {
  return data.map((item) => (
    <ShadcnCard key={item.title}>
      <div className="relative">
        {!item.isOpen && (
          <>
            <div className="absolute w-full h-full bg-black opacity-50"></div>
            <p className="absolute text-white font-semibold text-[20px] tracking-wider text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
              営業時間外
            </p>
          </>
        )}
        <Image
          src={sampleTyahan}
          alt="sample_tyahan"
          className="h-full object-cover object-center"
        />
      </div>
      <div className="w-[320px] px-3">
        <CardHeader>
          <CardTitle>{item.title}</CardTitle>
        </CardHeader>
        <CardContent className="flex items-center justify-between relative">
          <div className="flex items-center gap-2">
            <Button disabled={true} variant="outline" size="sm">
              {item.category}
            </Button>
            <p className="text-subText">{item.distance}</p>
          </div>
        </CardContent>
        <CardFooter>
          <p
            className={clsx("font-bold", {
              "text-green": item.isOpen,
              "text-red": !item.isOpen,
            })}
          >
            {item.isOpen ? "営業中" : "営業時間外"}
          </p>
          <p className="pl-2 text-text">
            {item.isOpen ? "営業終了" : "営業開始"}：{item.openingTime}
          </p>
        </CardFooter>
      </div>
    </ShadcnCard>
  ));
};
