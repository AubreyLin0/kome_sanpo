"use client";
import { clsx } from "clsx";
import Image from "next/image";
import { Button } from "../Button";
import { LikeButton } from "../LikeButton";
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
  isLiked: boolean;
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
            <p className="absolute text-white font-semibold text-[20px] tracking-widest text-center w-full top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
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
        <CardContent>
          <div className="flex items-center gap-2">
            <Button disabled={true} variant="outline" size="sm">
              {item.category}
            </Button>
            <p className="text-subText">{item.distance}</p>
          </div>
          <LikeButton key={item.title} initialIsLiked={item.isLiked} />
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
