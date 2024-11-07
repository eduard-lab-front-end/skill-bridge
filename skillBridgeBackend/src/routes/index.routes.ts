import { Request, Response, NextFunction } from "express";
const router = require("express").Router();
const userRoutes = require("./user.routes");
const courseRoutes = require("./course.routes");
const blogRoutes = require("./blog.routes");
const cartRoutes = require("./cart.routes");

router.get("/", (req: Request, res: Response, next: NextFunction) => {
  res.json("All good in here");
});

router.use("/auth", userRoutes);
router.use("/courses", courseRoutes);
router.use("/blogs", blogRoutes);
router.use("/cart", cartRoutes);

module.exports = router;
