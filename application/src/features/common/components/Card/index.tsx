"use client";
import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
import { CardDataType } from "../../type";
import { Button } from "../Button";
import { LikeButton } from "../LikeButton";
import sample_soumen from "@/public/sample_soumen.jpeg";
import {
  Card as ShadcnCard,
  CardHeader,
  CardFooter,
  CardContent,
  CardTitle,
} from "@/src/shadcn-ui/card";

type Props = {
  data: CardDataType;
};

export const Card = ({ data }: Props) => {
  return data.map((item, index) => (
    <Link key={index} href={"/list/1"}>
      <ShadcnCard className="border-2 w-[320px] shadow-md grid grid-rows-[240px_] rounded-lg">
        <div className="relative">
          {!item.isOpen && (
            <div className="absolute w-full h-full bg-gray-950/50 flex items-center justify-center">
              <p className="text-white font-semibold text-[20px] tracking-widest">
                営業時間外
              </p>
            </div>
          )}
          <Image
            src={sample_soumen}
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
              <span className="pl-2 text-text font-normal">
                {item.isOpen ? "営業終了" : "営業開始"}：{item.openingTime}
              </span>
            </p>
          </CardFooter>
        </div>
      </ShadcnCard>
    </Link>
  ));
};
