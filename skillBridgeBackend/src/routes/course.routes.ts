import { Request, Response, NextFunction } from "express";
import { RequestWithPayload } from "../types/requests";

const prisma = require("../db");
const router = require("express").Router();
const { isAuthenticated } = require("../middleware/route-guard-middleware");

router.post(
  "/",
  isAuthenticated,
  async (req: RequestWithPayload, res: Response, next: NextFunction) => {
    const { userId } = req.tokenPayload;
    try {
      const newCourse = await prisma.course.create({
        data: { ...req.body, teacherId: userId },
      });
      res.status(201).json(newCourse);
    } catch (error) {
      next(error);
    }
  }
);

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allCourses = await prisma.course.findMany({
      include: {
        teacher: {
          select: {
            id: true,
            userName: true,
            role: true,
          },
        },
      },
    });
    res.status(200).json(allCourses);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:courseId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { courseId } = req.params;
    try {
      const currentCourse = await prisma.course.findUnique({
        where: {
          id: courseId,
        },
        include: {
          teacher: {
            select: {
              id: true,
              userName: true,
              role: true,
            },
          },
        },
      });
      res.json(currentCourse);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:courseId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { courseId } = req.params;
    try {
      const updatedCourse = await prisma.course.update({
        where: {
          id: courseId,
        },
        data: req.body,
      });
      res.status(202).json(updatedCourse);
    } catch (error) {
      next(error);
    }
  }
);

router.delete(
  "/:courseId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { courseId } = req.params;
    try {
      await prisma.course.delete({
        where: {
          id: courseId,
        },
      });
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
