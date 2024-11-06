import { Request, Response, NextFunction } from "express";

const prisma = require("../db");
const router = require("express").Router();

router.post("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const newBlog = await prisma.blog.create({
      data: req.body,
    });
    res.status(201).json(newBlog);
  } catch (error) {
    next(error);
  }
});

router.get("/", async (req: Request, res: Response, next: NextFunction) => {
  try {
    const allBlogs = await prisma.blog.findMany();
    res.json(allBlogs);
  } catch (error) {
    next(error);
  }
});

router.get(
  "/:blogId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { blogId } = req.params;
    try {
      const currentBlog = await prisma.blog.findUnique({
        where: {
          id: blogId,
        },
      });
      res.json(currentBlog);
    } catch (error) {
      next(error);
    }
  }
);

router.put(
  "/:blogId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { blogId } = req.params;
    try {
      const updatedBlog = await prisma.blog.update({
        where: {
          id: blogId,
        },
        data: req.body,
      });
      res.status(202).json(updatedBlog);
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/:blogId",
  async (req: Request, res: Response, next: NextFunction) => {
    const { blogId } = req.params;
    try {
      await prisma.blog.delete({
        where: {
          id: blogId,
        },
      });
      res.status(204).json();
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
