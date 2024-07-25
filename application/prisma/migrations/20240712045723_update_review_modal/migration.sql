/*
  Warnings:

  - You are about to drop the `RestaurantImages` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "RestaurantImages" DROP CONSTRAINT "RestaurantImages_restaurantId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "images" TEXT,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "SavedRestaurants" ALTER COLUMN "savedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "VisitedRestaurants" ALTER COLUMN "visitedAt" SET DEFAULT now();

-- DropTable
DROP TABLE "RestaurantImages";

-- CreateTable
CREATE TABLE "ReviewImages" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "reviewId" TEXT NOT NULL,
    "imageUrl" TEXT NOT NULL,

    CONSTRAINT "ReviewImages_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "ReviewImages" ADD CONSTRAINT "ReviewImages_reviewId_fkey" FOREIGN KEY ("reviewId") REFERENCES "Review"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
