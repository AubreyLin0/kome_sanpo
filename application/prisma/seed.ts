import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const usersData = [
  {
    id: "1",
    name: "komekun",
    email: "kome@pj100.biz",
  },
  {
    id: "2",
    name: "sanpo",
    email: "sanpo@pj100.biz",
  },
];

const seedUsers = async () => {
  await prisma.user.deleteMany();
  for (const user of usersData) {
    await prisma.user.create({
      data: user,
    });
  }
};

// 定義されたデータを実際のモデルへ登録する処理
const main = async () => {
  console.log(`Start seeding ...`);

  await seedUsers();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
