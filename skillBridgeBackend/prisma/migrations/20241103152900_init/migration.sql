-- CreateEnum
CREATE TYPE "CourseLevel" AS ENUM ('Beginner', 'Intermediate', 'Advanced');

-- CreateTable
CREATE TABLE "Course" (
    "id" TEXT NOT NULL,
    "title" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "createdBy" TEXT NOT NULL,
    "durationWeeks" INTEGER NOT NULL,
    "studentCount" INTEGER NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,
    "discount" DOUBLE PRECISION NOT NULL,
    "category" TEXT NOT NULL,
    "overview" TEXT NOT NULL,
    "curriculum" JSONB NOT NULL,
    "level" "CourseLevel" NOT NULL,
    "lessonCount" INTEGER NOT NULL,
    "quizCount" INTEGER NOT NULL,
    "faqs" JSONB NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Course_pkey" PRIMARY KEY ("id")
);
