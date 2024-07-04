import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const restaurantName = {
  restaurant: {
    select: {
      name: true,
    },
  },
};

export async function getUser() {
  const users = await prisma.user.findMany({
    include: {
      reviews: {
        include: restaurantName,
      },
      savedRestaurants: {
        include: restaurantName,
      },
      visitedRestaurants: {
        include: restaurantName,
      },
    },
  });
  return users;
}
