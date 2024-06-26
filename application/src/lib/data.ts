import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getUser() {
  const users = await prisma.user.findMany();
  return users;
}

export const getSearch = async () => {
  // todo:検索処理を実装する
  return [
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
};
