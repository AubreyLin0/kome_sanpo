import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
import { RestaurantDetailDataType } from "../features/common/type";

const prisma = new PrismaClient();

export async function getUser() {
  const users = await prisma.user.findMany();
  return users;
}

// apiの処理はapiフォルダーにまとめます
export const sampleData = [
  {
    id: "1",
    genre: "中華",
  },
  {
    id: "2",
    genre: "イタリアン",
  },
  {
    id: "3",
    genre: "和食",
  },
  {
    id: "4",
    genre: "フレンチ",
  },
];

export const getSearch = async () => {
  // todo:検索処理を実装する
  return sampleData;
};

const sampleDetailData: RestaurantDetailDataType = [
  {
    title: "美味しいカツレツカルボナーラ",
    category: "イタリアン",
    openingTime: "11:00~14:00",
    phone: "000-0000-0000",
    regularHoliday: "水曜日",
    address: "東京都渋谷区1-22アイフルマンション101号室",
    imageSrc: "/pasta.jpg",
    longitude: 139.702473,
    latitude: 35.658581,
  },
];

export const getRestaurantDetailData = async () => {
  //わざと遅延させる
  await new Promise((resolve) => setTimeout(resolve, 1000));
  noStore();
  return sampleDetailData;
};
