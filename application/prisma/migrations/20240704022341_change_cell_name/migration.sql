-- AlterTable
ALTER TABLE "Restaurant" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "Review" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "SavedRestaurants" ALTER COLUMN "savedAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "createdAt" SET DEFAULT now();

-- AlterTable
ALTER TABLE "VisitedRestaurants" ALTER COLUMN "visitedAt" SET DEFAULT now();
