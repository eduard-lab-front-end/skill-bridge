"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const isAuthenticated = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(" ")[1];
        const payload = jsonwebtoken_1.default.verify(token, process.env.TOKEN_SECRET);
        req.tokenPayload = payload;
        next();
    }
    catch (error) {
        console.log(error);
        res.status(401).json("Token not provided or not valid");
    }
};
module.exports = { isAuthenticated };
