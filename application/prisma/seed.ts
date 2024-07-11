import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const usersData = [
  {
    googleId: "google_user_1",
    email: "test@gmail.com",
    name: "test user",
    profilePicture: "https://github.com/shadcn.png",
    reviews: {
      create: [
        {
          restaurantId: "test-restaurant-uuid-1",
          rating: 5,
          content: "This is a good restaurant",
        },
      ],
    },
    savedRestaurants: {
      create: [
        {
          restaurantId: "test-restaurant-uuid-2",
        },
      ],
    },
    visitedRestaurants: {
      create: [
        {
          restaurantId: "test-restaurant-uuid-1",
        },
      ],
    },
  },
  {
    googleId: "google_user_2",
    email: "test2@gmail.com",
    name: "test user2",
    profilePicture: "https://github.com/shadcn.png",
  },
];

const restaurantsData = [
  {
    id: "test-restaurant-uuid-1",
    name: "アイフル食堂",
    address: "京都市下京区烏丸通五条上る高砂町381-1",
    phoneNumber: "0753615566",
    openTime: "11:00",
    closeTime: "21:00",
    genre: "和食",
    createdBy: "admin",
    longitude: 34.9968489,
    latitude: 135.7593823,
    // TODO:image保存の仕方を調査
    // images: {
    //   create: [
    //     {
    //       id: "test-restaurant-image-1",
    //       image:
    //         "https://magazine.tabelog.com/uploads/2022/04/640x640_rect_161835568.jpg",
    //     },
    //   ],
    // },
  },
  {
    id: "test-restaurant-uuid-2",
    name: "マクドナルド烏丸五条店",
    address: "京都府京都市下京区五条通烏丸東入ル松屋町４１１",
    phoneNumber: "0753532225",
    openTime: "06:00",
    closeTime: "24:00",
    genre: "ファーストフード",
    createdBy: "admin",
    longitude: 34.9965159,
    latitude: 135.7573215,
    // images: {
    //   create: [
    //     {
    //       id: "test-restaurant-image-2",
    //       image: "https://cpok.tw/wp-content/uploads/2024/01/2.png",
    //     },
    //   ],
    // },
  },
];

const seedRestaurants = async () => {
  await prisma.restaurant.deleteMany();
  for (const restaurant of restaurantsData) {
    await prisma.restaurant.create({
      data: restaurant,
    });
  }
};

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

  await seedRestaurants();
  await seedUsers();

  console.log(`Seeding finished.`);
};

// 処理開始
main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (event) => {
    console.error(event);
    await prisma.$disconnect();
    process.exit(1);
  });
