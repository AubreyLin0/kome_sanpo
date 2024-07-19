/*
  Warnings:

  - You are about to drop the column `images` on the `Restaurant` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Restaurant" DROP COLUMN "images",
ADD COLUMN     "topImageURL" TEXT,
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "SavedRestaurants" ALTER COLUMN "savedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "VisitedRestaurants" ALTER COLUMN "visitedAt" SET DEFAULT now();
