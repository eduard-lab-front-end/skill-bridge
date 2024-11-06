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
const { isAuthenticated } = require("../middleware/route-guard-middleware.ts");
router.post("/", isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { userId } = req.tokenPayload;
    try {
        const newCourse = yield prisma.course.create({
            data: Object.assign(Object.assign({}, req.body), { teacherId: userId }),
        });
        res.status(201).json(newCourse);
    }
    catch (error) {
        next(error);
    }
}));
router.get("/", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allCourses = yield prisma.course.findMany({
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
    }
    catch (error) {
        next(error);
    }
}));
router.get("/:courseId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        const currentCourse = yield prisma.course.findUnique({
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
    }
    catch (error) {
        next(error);
    }
}));
router.put("/:courseId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        const updatedCourse = yield prisma.course.update({
            where: {
                id: courseId,
            },
            data: req.body,
        });
        res.status(202).json(updatedCourse);
    }
    catch (error) {
        next(error);
    }
}));
router.delete("/:courseId", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const { courseId } = req.params;
    try {
        yield prisma.course.delete({
            where: {
                id: courseId,
            },
        });
        res.status(204).json();
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
