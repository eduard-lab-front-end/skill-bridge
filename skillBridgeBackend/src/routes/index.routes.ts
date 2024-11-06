import { Request, Response, NextFunction } from "express";
const router = require("express").Router();
const userRoutes = require("./user.routes");
const courseRoutes = require("./course.routes");
const blogRoutes = require("./blog.routes");

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json("All good in here");
});

router.use("/auth", userRoutes);
router.use("/courses", courseRoutes);
router.use("/blogs", blogRoutes);

module.exports = router;
