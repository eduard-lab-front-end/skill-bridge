import { Request, Response, NextFunction } from "express";
import { RequestWithPayload } from "../types/requests";

const prisma = require("../db");
const router = require("express").Router();
const { isAuthenticated } = require("../middleware/route-guard-middleware");
interface CartItem {
  name: string;
  price: number;
  quantity: number;
}
// function calculateTotal(items: CartItem[]) {
//   return items.reduce((acc, item) => acc + item.price * item.quantity, 0);
// }
router.post(
  "/carts",
  isAuthenticated,
  async (req: RequestWithPayload, res: Response, next: NextFunction) => {
    const { items } = req.body;
    const userId = req.tokenPayload.userId;
    try {
      // const total = calculateTotal(items);
      const cart = await prisma.cart.findUnique({
        where: { userId },
        include: { user: true },
      });
      if (!cart) {
        const newCart = await prisma.cart.create({
          data: {
            userId,
            itemsId: items,
          },
        });
        res.status(201).json(newCart);
      } else {
        const currentCart = await prisma.cart.update({
          where: { userId },
          include: {
            select: {
              userName: true,
              email: true,
              role: true,
            },
          },
          data: {
            itemsId: {
              push: [...items],
            },
          },
        });
        res.status(202).json(currentCart);
      }
    } catch (error) {
      next(error);
    }
  }
);

router.get(
  "/carts",
  isAuthenticated,
  async (req: RequestWithPayload, res: Response, next: NextFunction) => {
    const userId = req.tokenPayload.userId;

    try {
      const cart = await prisma.cart.findUnique({
        where: { userId },
        include: { user: true },
      });

      if (!cart) {
        return res.status(404).json({ error: "Cart not found" });
      }
      const items = await prisma.course.findMany({
        where: { id: { in: cart.itemsId } },
      });
      res.json({ ...cart, items });
    } catch (error) {
      next(error);
    }
  }
);

module.exports = router;
