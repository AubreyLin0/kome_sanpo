/*
  Warnings:

  - You are about to drop the `ReviewImages` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `SavedRestaurants` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `VisitedRestaurants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ReviewImages" DROP CONSTRAINT "ReviewImages_reviewId_fkey";

-- DropForeignKey
ALTER TABLE "SavedRestaurants" DROP CONSTRAINT "SavedRestaurants_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "SavedRestaurants" DROP CONSTRAINT "SavedRestaurants_userId_fkey";

-- DropForeignKey
ALTER TABLE "VisitedRestaurants" DROP CONSTRAINT "VisitedRestaurants_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "VisitedRestaurants" DROP CONSTRAINT "VisitedRestaurants_userId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- DropTable
DROP TABLE "ReviewImages";

-- DropTable
DROP TABLE "SavedRestaurants";

-- DropTable
DROP TABLE "VisitedRestaurants";

-- CreateTable
CREATE TABLE "FavoriteRestaurant" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT now(),
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "FavoriteRestaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VisitedRestaurant" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "VisitedRestaurant_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "ReviewImage" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "reviewId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "ReviewImage_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "FavoriteRestaurant" ADD CONSTRAINT "FavoriteRestaurant_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "FavoriteRestaurant" ADD CONSTRAINT "FavoriteRestaurant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitedRestaurant" ADD CONSTRAINT "VisitedRestaurant_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitedRestaurant" ADD CONSTRAINT "VisitedRestaurant_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ReviewImage" ADD CONSTRAINT "ReviewImage_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
