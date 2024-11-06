"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const router = require("express").Router();
const userRoutes = require("./user.routes");
const courseRoutes = require("./course.routes");
const blogRoutes = require("./blog.routes");
router.get("/", (req, res, next) => {
    res.json("All good in here");
});
router.use("/auth", userRoutes);
router.use("/courses", courseRoutes);
router.use("/blogs", blogRoutes);
module.exports = router;
