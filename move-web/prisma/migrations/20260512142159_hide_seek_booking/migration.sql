/*
  Warnings:

  - You are about to drop the `MoveSession` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "MoveSession";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "BookingInquiry" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "message" TEXT NOT NULL
);
