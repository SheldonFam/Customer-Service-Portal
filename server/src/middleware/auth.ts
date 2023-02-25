import { Response, Request, NextFunction } from "express";

export const requiresAuth = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  //need to check req.session.userId, but get undefined here?
  const authUser = req.session.userId;
  console.log(req.session.userId, "from requiresAuth req session userId");
  if (!authUser) {
    return res.status(401).json({ message: "User not authenticated" });
  } else {
    next();
  }
};
