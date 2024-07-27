"use client";
import { MapCameraProps } from "@vis.gl/react-google-maps";
import { clsx } from "clsx";
import Image from "next/image";
import { RESTAURANT_GENRE } from "../../constants";
import { handleCalculateDistance, handleCheckIfOpen } from "../../lib/utils";
import { CardDataType } from "../../type";
import { Button } from "../Button";
import { LikeButton } from "../LikeButton";
import {
  CLOSING_TIME,
  COMMENCEMENT_OF_BUSINESS,
  OPENING,
  OUTSIDE_BUSINESS_HOURS,
} from "./constants";
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
  onClick?: (value: MapCameraProps) => void;
};

export const ResponsiveCard = ({ data, onClick }: Props) => {
  return data.map((item) => {
    const { openTime, closeTime } = item;
    const isOpen = handleCheckIfOpen({ openTime, closeTime });

    // todo:Linkをどうするか
    return (
      <ShadcnCard
        key={item.id}
        className="border-b-2 text-sm"
        onClick={() =>
          onClick &&
          onClick({
            // なぜかnullが入るので、nullの場合は0にする
            // なぜか緯度と経度が逆になっているので、逆に設定
            center: { lat: item.longitude || 0, lng: item.latitude || 0 },
            zoom: 17,
          })
        }
      >
        <CardHeader>
          <CardTitle>{item.name}</CardTitle>
        </CardHeader>
        <div className="grid grid-cols-[1fr_120px] pb-4 gap-4">
          <div className="flex flex-col justify-between">
            <CardContent>
              <div className="flex items-center gap-2">
                <Button disabled={true} variant="outline" size="xs">
                  {RESTAURANT_GENRE.get(item.genre)}
                </Button>
                <p className="text-subText">
                  {`${handleCalculateDistance(
                    item.longitude ?? 0,
                    item.latitude ?? 0
                  )} km`}
                </p>
              </div>
            </CardContent>
            <CardFooter className="w-full pb-0">
              <div className="flex items-center justify-between gap-2 w-full">
                <p
                  className={clsx("font-bold", {
                    "text-green": isOpen,
                    "text-red": !isOpen,
                  })}
                >
                  {isOpen ? OPENING : OUTSIDE_BUSINESS_HOURS}
                  <span className="pl-2 text-text font-normal">
                    {isOpen
                      ? `${CLOSING_TIME}：${item.closeTime}`
                      : `${COMMENCEMENT_OF_BUSINESS}：${item.openTime}`}
                  </span>
                </p>
                {/* userが保存しているレストランid配列から相応のレストランidが存在しているかどうかで判断する */}
                {/* ただ、フェス１はユーザー機能がないので、ここは一旦falseにする */}
                <LikeButton key={item.id} initialIsLiked={false} />
              </div>
            </CardFooter>
          </div>
          <div className="relative h-[120px] w-[120px]">
            {!isOpen && (
              <div className="absolute w-full h-full bg-gray-950/50 flex items-center justify-center">
                <p className="text-white font-semibold text-md tracking-widest">
                  {OUTSIDE_BUSINESS_HOURS}
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
    );
  });
};
