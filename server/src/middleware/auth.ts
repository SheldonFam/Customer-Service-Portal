import jwt from "jsonwebtoken";
import { Response, Request, NextFunction } from "express";
import env from "../utils/validateEnv";
import { User } from "../models/userModel";

export const authorize = async (
  req: Request | any,
  res: Response,
  next: NextFunction
) => {
  try {
    //get the token from the authorization header
    const token = req.headers.authorization.split(" ")[1];

    //check if the token matches the supposed origin
    const decodedToken: any = jwt.verify(token, env.JWT_SECRET);

    //retrieve the user details of the logged in user
    const user = await User.findById(decodedToken.id).select("-password");

    //pass the user down to the endpoints here
    req.user = user;

    //pass down functionality to the endpoint
    next();
  } catch (err) {
    res.status(401).send("Please authenticate");
  }
};

// export const authorize = async (
//   req: Request | any,
//   res: Response,
//   next: NextFunction
// ) => {
//   let token;

//   if (
//     req.headers.authorization &&
//     req.headers.authorization.startsWith("Bearer")
//   ) {
//     try {
//       //Get token from header
//       token = req.headers.authorization.split(" ")[1];

//       //Verify token
//       const decoded: any = jwt.verify(token, env.JWT_SECRET);

//       //Get user from token
//       req.user = await User.findById(decoded.id).select("-password");

//       next();
//     } catch (error: any) {
//       console.log(error.message);
//       res.status(401);
//       throw new Error("no token, no auth");
//     }
//   }
// };
