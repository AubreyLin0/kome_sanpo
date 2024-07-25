/*
  Warnings:

  - You are about to drop the `VistedRestaurants` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "VistedRestaurants" DROP CONSTRAINT "VistedRestaurants_restaurantId_fkey";

-- DropForeignKey
ALTER TABLE "VistedRestaurants" DROP CONSTRAINT "VistedRestaurants_userId_fkey";

-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "RestaurantImages" ALTER COLUMN "image" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "SavedRestaurants" ALTER COLUMN "savedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now(),
ALTER COLUMN "profilePicture" SET DATA TYPE TEXT;

-- DropTable
DROP TABLE "VistedRestaurants";

-- CreateTable
CREATE TABLE "VisitedRestaurants" (
    "id" TEXT NOT NULL DEFAULT gen_random_uuid(),
    "userId" TEXT NOT NULL,
    "restaurantId" TEXT NOT NULL,
    "visitedAt" TIMESTAMP(3) NOT NULL DEFAULT now(),

    CONSTRAINT "VisitedRestaurants_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VisitedRestaurants" ADD CONSTRAINT "VisitedRestaurants_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "VisitedRestaurants" ADD CONSTRAINT "VisitedRestaurants_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
