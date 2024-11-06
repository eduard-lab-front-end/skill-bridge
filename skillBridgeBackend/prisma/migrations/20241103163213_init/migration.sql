-- CreateEnum
CREATE TYPE "UserRole" AS ENUM ('Student', 'Teacher', 'Admin');

-- AlterTable
ALTER TABLE "Course" ADD COLUMN     "teacherId" TEXT,
ALTER COLUMN "curriculum" SET DEFAULT '[{"modules": []}]',
ALTER COLUMN "faqs" SET DEFAULT '[{"question": "", "answer": ""}]';

-- AlterTable
ALTER TABLE "User" ADD COLUMN     "role" "UserRole";

-- AddForeignKey
ALTER TABLE "Course" ADD CONSTRAINT "Course_teacherId_fkey" FOREIGN KEY ("teacherId") REFERENCES "User"("id") ON DELETE SET NULL ON UPDATE CASCADE;
