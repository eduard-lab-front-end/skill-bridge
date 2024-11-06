/*
  Warnings:

  - Made the column `teacherId` on table `Course` required. This step will fail if there are existing NULL values in that column.
  - Made the column `role` on table `User` required. This step will fail if there are existing NULL values in that column.

*/
-- DropForeignKey
ALTER TABLE "Course" DROP CONSTRAINT "Course_teacherId_fkey";

-- AlterTable
ALTER TABLE "Course" ALTER COLUMN "teacherId" SET NOT NULL;

-- AlterTable
ALTER TABLE "User" ALTER COLUMN "role" SET NOT NULL;

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
