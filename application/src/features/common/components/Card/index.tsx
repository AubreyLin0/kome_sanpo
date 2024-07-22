import { clsx } from "clsx";
import Image from "next/image";
import Link from "next/link";
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
};

export const Card = ({ data }: Props) => {
  return data.map((item) => {
    const { openTime, closeTime } = item;
    const isOpen = handleCheckIfOpen({ openTime, closeTime });
    return (
      <Link key={item.name} href={"/list/1"}>
        <ShadcnCard className="border-2 w-[320px] shadow-md grid grid-rows-[240px_] rounded-lg">
          <div className="relative">
            {!isOpen && (
              <div className="absolute w-full h-full bg-gray-950/50 flex items-center justify-center">
                <p className="text-white font-semibold text-[20px] tracking-widest">
                  {OUTSIDE_BUSINESS_HOURS}
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
              <CardTitle>{item.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex items-center gap-2">
                <Button disabled={true} variant="outline" size="sm">
                  {RESTAURANT_GENRE.get(item.genre)}
                </Button>
                <p className="text-subText">
                  {`${handleCalculateDistance(
                    item.longitude ?? 0,
                    item.latitude ?? 0
                  )} km`}
                </p>
              </div>
              {/* userが保存しているレストランid配列から相応のレストランidが存在しているかどうかで判断する */}
              {/* ただ、フェス１はユーザー機能がないので、ここは一旦falseにする */}
              <LikeButton key={item.id} initialIsLiked={false} />
            </CardContent>
            <CardFooter>
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
            </CardFooter>
          </div>
        </ShadcnCard>
      </Link>
    );
  });
};
