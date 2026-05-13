-- CreateTable
CREATE TABLE "MoveSession" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "activity" TEXT NOT NULL,
    "minutes" INTEGER NOT NULL,
    "distanceKm" REAL,
    "note" TEXT
);
