/*
  Warnings:

  - You are about to drop the column `items` on the `Cart` table. All the data in the column will be lost.
  - You are about to drop the column `total` on the `Cart` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Cart" DROP COLUMN "items",
DROP COLUMN "total",
ADD COLUMN     "itemsId" TEXT[];
