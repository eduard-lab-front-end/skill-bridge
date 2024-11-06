import { Request, Response, NextFunction } from "express";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import { RequestWithPayload } from "../types/requests";

const prisma = require("../db");
const router = require("express").Router();
const { isAuthenticated } = require("../middleware/route-guard-middleware");

router.get('/', async (req:Request, res:Response, next: NextFunction) => {
  try {
    const allUsers = await prisma.users.findMany({});
    res.json(allUsers)
  } catch (error) {
    next(error)
  }
})
router.post(
  "/signup",
  async (req: Request, res: Response, next: NextFunction) => {
    const userToCreate = req.body;
    const salt = bcrypt.genSaltSync(13);
    userToCreate.passwordHash = bcrypt.hashSync(req.body.password, salt);
    delete userToCreate.password;
    try {
      const newUser = await prisma.user.create({
        data: userToCreate,
      });
      res.status(201).json(newUser); //change later
    } catch (error) {
      next(error);
    }
  }
);

router.post(
  "/login",
  async (req: Request, res: Response, next: NextFunction) => {
    try {
      const potentialUser = await prisma.user.findUnique({
        where: {
          email: req.body.email,
        },
      });
      if (potentialUser) {
        if (bcrypt.compareSync(req.body.password, potentialUser.passwordHash)) {
          const authToken = jwt.sign(
            { userId: potentialUser.id },
            process.env.TOKEN_SECRET,
            {
              algorithm: "HS256",
              expiresIn: "6h",
            }
          );
          res.json({ token: authToken });
        } else {
          res.status(401).json({ message: "Incorrect password" }); // change later
        }
      } else {
        res.status(404).json({ message: "No user with this email" }); // change later
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/verify",
  isAuthenticated,
  async (req: RequestWithPayload, res: Response, next: NextFunction) => {
    try {
      const currentUser = await prisma.user.findUnique({
        where: {
          id: req.tokenPayload.userId, // not sure
        }
      });
      res.json(currentUser);
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
