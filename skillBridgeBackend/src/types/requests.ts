import { JwtPayload } from "jsonwebtoken";
import { Request } from "express";

export interface RequestWithPayload extends Request {
  tokenPayload?: JwtPayload & { userId?: string };
}
