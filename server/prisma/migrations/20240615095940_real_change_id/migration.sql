/*
  Warnings:

  - The primary key for the `Party` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `organizerId` on the `Party` table. All the data in the column will be lost.
  - Added the required column `adminId` to the `Party` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "Item" DROP CONSTRAINT "Item_partyId_fkey";

-- DropForeignKey
ALTER TABLE "User" DROP CONSTRAINT "User_partyId_fkey";

-- AlterTable
ALTER TABLE "Item" ALTER COLUMN "partyId" SET DATA TYPE TEXT;

-- AlterTable
ALTER TABLE "Party" DROP CONSTRAINT "Party_pkey",
DROP COLUMN "organizerId",
ADD COLUMN     "adminId" INTEGER NOT NULL,
ALTER COLUMN "id" DROP DEFAULT,
ALTER COLUMN "id" SET DATA TYPE TEXT,
ADD CONSTRAINT "Party_pkey" PRIMARY KEY ("id");
DROP SEQUENCE "Party_id_seq";

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "partyId" SET DATA TYPE TEXT;

-- AddForeignKey
ALTER TABLE "User" ADD CONSTRAINT "User_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Item" ADD CONSTRAINT "Item_partyId_fkey" FOREIGN KEY ("partyId") REFERENCES "Party"("id") ON DELETE SET NULL ON UPDATE CASCADE;
