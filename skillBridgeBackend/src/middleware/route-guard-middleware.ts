import { Response, NextFunction } from "express";
import jwt, { JwtPayload } from "jsonwebtoken";
import { RequestWithPayload } from "../types/requests";

const isAuthenticated = (
  req: RequestWithPayload,
  res: Response,
  next: NextFunction
) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    const payload = jwt.verify(token, process.env.TOKEN_SECRET) as JwtPayload;
    req.tokenPayload = payload;
    next();
  } catch (error) {
    console.log(error);
    res.status(401).json("Token not provided or not valid");
  }
};

module.exports = { isAuthenticated };
