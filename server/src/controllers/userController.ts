import { Response, Request, NextFunction } from "express";
import { userModel } from "../models/userModel";
import createHttpError from "http-errors";
import bcrypt from "bcrypt";
import { throws } from "assert";

export const getAuthenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const authUser = req.session.userId;
  try {
    if (!authUser) {
      throw createHttpError("User not authenticated");
    }
    const user = await userModel.findById(req.session.userId).select("+email");
    res.status(200).json(user);
  } catch (error) {
    next(error);
  }
};

export const signUp = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userName = req.body.userName;
  const email = req.body.email;
  const passwordRaw = req.body.password;

  try {
    if (!userName || !email || !passwordRaw) {
      throw createHttpError(400, "Parameters missing");
    }

    const existingUserName = await userModel.findOne({ userName: userName });

    if (existingUserName) {
      throw createHttpError(
        409,
        "Username already taken. Please choose a different one or log in instead."
      );
    }
    const existingEmail = await userModel.findOne({ email: email });

    if (existingEmail) {
      throw createHttpError(
        409,
        "A user with this email address already exists. Please choose a different one or log in instead."
      );
    }

    const passwordHashed = await bcrypt.hash(passwordRaw, 10);

    const newUser = await userModel.create({
      userName: userName,
      email: email,
      password: passwordHashed,
    });

    req.session.userId = newUser._id;

    res.status(200).json(newUser);
  } catch (error) {
    next(error);
  }
};

export const login = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  const userName = req.body.userName;
  const password = req.body.password;

  try {
    if (!userName || !password) {
      throw createHttpError(400, "Parameters missing");
    }

    const user = await userModel
      .findOne({ userName: userName })
      .select("+password +email");

    if (!user) {
      throw createHttpError(401, "Invalid credentials");
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      throw createHttpError(401, "Invalid credentials");
    }

    req.session.userId = user._id;
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.sendStatus(200);
    }
  });
};
