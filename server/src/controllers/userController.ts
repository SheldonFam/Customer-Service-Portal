import { Response, Request, NextFunction } from "express";
import { User } from "../models/userModel";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import env from "../utils/validateEnv";
import { Types } from "mongoose";

//Generate JWT
export const generateToken = (
  id: Types.ObjectId,
  userName: string,
  email: string,
  password: string
) => {
  return jwt.sign({ id, userName, email, password }, env.JWT_SECRET, {
    expiresIn: "30d",
  });
};

//Register new User
export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userName, email, password } = req.body;

  try {
    if (!userName || !email || !password) {
      throw Error("Empty field,parameters missing.");
    }

    const existingUserName = await User.findOne({ userName: userName });

    if (existingUserName) {
      throw Error(
        "Username already taken. Please choose a different one or log in instead."
      );
    }

    const existingEmail = await User.findOne({ email: email });

    if (existingEmail) {
      throw Error(
        "A user with this email address already exists. Please choose a different one or log in instead."
      );
    }

    //Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    const newUser = await User.create({
      userName,
      email,
      password: hashedPassword,
    });
    res.status(200).json({
      _id: newUser._id,
      userName: newUser.userName,
      email: newUser.email,
      token: generateToken(
        newUser._id,
        newUser.userName,
        newUser.password,
        newUser.email
      ),
    });
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const { userName, password } = req.body;
  try {
    if (!userName || !password) {
      throw Error("Parameters missing");
    }

    const user = await User.findOne({ userName }).select("+password");

    if (!user) {
      res.status(401);
      throw Error("Invalid userName!");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw Error("Invalid password!");
    }
    res.status(201).json({
      _id: user._id,
      userName: user.userName,
      email: user.email,
      password: user.password,
      token: generateToken(user._id, user.userName, user.email, user.password),
    });
  } catch (error) {
    next(error);
  }
};

//why applied any in request?
export const authTest = async (req: Request | any, res: Response) => {
  try {
    const foundUser = await User.findById(req.user);
    res.status(200).json(foundUser);
  } catch (error) {
    return res.status(500).json(error);
  }
};
