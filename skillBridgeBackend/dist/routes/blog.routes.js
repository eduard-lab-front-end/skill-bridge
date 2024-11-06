"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const prisma = require("../db");
const router = require("express").Router();
router.post("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const newBlog = yield prisma.blog.create({
            data: req.body,
        });
        res.status(201).json(newBlog);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allBlogs = yield prisma.blog.findMany();
        res.json(allBlogs);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/:blogId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { blogId } = req.params;
    try {
        const currentBlog = yield prisma.blog.findUnique({
            where: {
                id: blogId,
            },
        });
        res.json(currentBlog);
    }
    catch (error) {
        next(error);
    }
}));
router.put("/:blogId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { blogId } = req.params;
    try {
        const updatedBlog = yield prisma.blog.update({
            where: {
                id: blogId,
            },
            data: req.body,
        });
        res.status(202).json(updatedBlog);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/:blogId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { blogId } = req.params;
    try {
        yield prisma.blog.delete({
            where: {
                id: blogId,
            },
        });
        res.status(204).json();
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
