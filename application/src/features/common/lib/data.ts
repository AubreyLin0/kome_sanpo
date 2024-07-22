import { PrismaClient } from "@prisma/client";
import { unstable_noStore as noStore } from "next/cache";
import { CardType, RestaurantDetailDataType } from "../type";

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

const sampleRestaurantData: CardType = [
  {
    title: "美味しいチャーハンと唐揚げと餃子のお店",
    category: "中華",
    distance: "100m",
    isOpen: true,
    isLiked: false,
    openingTime: "20:00",
  },
  {
    title: "ペペロンチーノ",
    category: "イタリアン",
    distance: "200m",
    isOpen: false,
    isLiked: true,
    openingTime: "10:00",
  },
  {
    title: "カンパチ",
    category: "和食",
    distance: "300m",
    isOpen: true,
    isLiked: true,
    openingTime: "23:00",
  },
  {
    title: "にく",
    category: "フレンチ",
    distance: "400m",
    isOpen: false,
    isLiked: false,
    openingTime: "10:00",
  },
  {
    title: "たい",
    category: "和食",
    distance: "500m",
    isOpen: true,
    isLiked: false,
    openingTime: "23:00",
  },
];

export const getRestaurantData = async () => {
  // todo:listデータ取得処理を実装する
  noStore();
  return sampleRestaurantData;
};

const sampleDetailData: RestaurantDetailDataType = {
  title: "美味しいカツレツカルボナーラ",
  category: "イタリアン",
  openingTime: "11:00~14:00",
  phone: "000-0000-0000",
  regularHoliday: "水曜日",
  address: "東京都渋谷区1-22アイフルマンション101号室",
  imageSrc: "/pasta.jpg",
};

export const getRestaurantDetailData = async () => {
  //わざと遅延させる
  await new Promise((resolve) => setTimeout(resolve, 1000));
  noStore();
  return sampleDetailData;
};
