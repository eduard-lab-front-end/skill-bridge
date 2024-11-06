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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const prisma = require("../db");
const router = require("express").Router();
const { isAuthenticated } = require("../middleware/route-guard-middleware");
router.get('/', (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const allUsers = yield prisma.users.findMany({});
        res.json(allUsers);
    }
    catch (error) {
        next(error);
    }
}));
router.post("/signup", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const userToCreate = req.body;
    const salt = bcrypt_1.default.genSaltSync(13);
    userToCreate.passwordHash = bcrypt_1.default.hashSync(req.body.password, salt);
    delete userToCreate.password;
    try {
        const newUser = yield prisma.user.create({
            data: userToCreate,
        });
        res.status(201).json(newUser); //change later
    }
    catch (error) {
        next(error);
    }
}));
router.post("/login", (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const potentialUser = yield prisma.user.findUnique({
            where: {
                email: req.body.email,
            },
        });
        if (potentialUser) {
            if (bcrypt_1.default.compareSync(req.body.password, potentialUser.passwordHash)) {
                const authToken = jsonwebtoken_1.default.sign({ userId: potentialUser.id }, process.env.TOKEN_SECRET, {
                    algorithm: "HS256",
                    expiresIn: "6h",
                });
                res.json({ token: authToken });
            }
            else {
                res.status(401).json({ message: "Incorrect password" }); // change later
            }
        }
        else {
            res.status(404).json({ message: "No user with this email" }); // change later
        }
    }
    catch (error) {
        next(error);
    }
}));
router.get("/verify", isAuthenticated, (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const currentUser = yield prisma.user.findUnique({
            where: {
                id: req.tokenPayload.userId, // not sure
            }
        });
        res.json(currentUser);
    }
    catch (error) {
        next(error);
    }
}));
module.exports = router;
