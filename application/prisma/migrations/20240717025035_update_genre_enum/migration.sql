-- CreateEnum
CREATE TYPE "Genre" AS ENUM ('JAPANESE', 'WESTERN', 'CHINESE', 'FAST_FOOD', 'CURRY', 'RAMEN', 'SUSHI', 'SET_MEAL', 'TONKATSU', 'OTHER');

-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "genre_new" "Genre" NOT NULL DEFAULT 'JAPANESE',
ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "SavedRestaurants" ALTER COLUMN "savedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "VisitedRestaurants" ALTER COLUMN "visitedAt" SET DEFAULT now();
