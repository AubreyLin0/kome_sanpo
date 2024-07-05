"use client";
import { clsx } from "clsx";
import Image from "next/image";
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

export const ResponsiveCard = ({ data }: Props) => {
  return data.map((item) => (
    <ShadcnCard key={item.title} className="border-b-2 text-sm">
      <CardHeader>
        <CardTitle>{item.title}</CardTitle>
      </CardHeader>
      <div className="grid grid-cols-[1fr_120px] pb-4 gap-4">
        <div className="flex flex-col justify-between">
          <CardContent>
            <div className="flex items-center gap-2">
              <Button disabled={true} variant="outline" size="xs">
                {item.category}
              </Button>
              <p className="text-subText">{item.distance}</p>
            </div>
          </CardContent>
          <CardFooter className="w-full pb-0">
            <div className="flex items-center justify-between gap-2 w-full">
              <p
                className={clsx("font-bold", {
                  "text-green": item.isOpen,
                  "text-red": !item.isOpen,
                })}
              >
                {item.isOpen ? "営業中" : "営業時間外"}
                <br />
                <span className="text-text font-normal">
                  {item.isOpen ? "営業終了" : "営業開始"}：{item.openingTime}
                </span>
              </p>
              <LikeButton key={item.title} initialIsLiked={item.isLiked} />
            </div>
          </CardFooter>
        </div>
        <div className="relative h-[120px] w-[120px]">
          {!item.isOpen && (
            <div className="absolute w-full h-full bg-gray-950/50 flex items-center justify-center">
              <p className="text-white font-semibold text-md tracking-widest">
                営業時間外
              </p>
            </div>
          )}
          <Image
            src={sample_soumen}
            alt="sample_tyahan"
            className="h-full object-cover object-center rounded-xl"
          />
        </div>
      </div>
    </ShadcnCard>
  ));
};
