import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function getRestaurants() {
  const restaurants = await prisma.restaurant.findMany({
    include: {
      review: true,
      savedRestaurants: true,
      visitedRestaurants: true,
    },
  });

  // レストランの平均評価を取得
  const restaurantsWithAverage = await Promise.all(
    restaurants.map(async (restaurant) => {
      const averageRatingResult = await prisma.review.aggregate({
        _avg: {
          rating: true,
        },
        where: {
          restaurantId: restaurant.id,
        },
      });

      const averageRating = averageRatingResult._avg.rating
        ? parseFloat(averageRatingResult._avg.rating.toFixed(1))
        : 0;
      return {
        ...restaurant,
        averageRating,
      };
    })
  );
  return restaurantsWithAverage;
}
