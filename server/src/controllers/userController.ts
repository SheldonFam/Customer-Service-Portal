import { Response, Request, NextFunction } from "express";
import { userModel } from "../models/userModel";
import bcrypt from "bcrypt";

export const getAuthenticatedUser = async (
  req: Request,
  res: Response,
  next: NextFunction
): Promise<void> => {
  try {
    const user = await userModel.findById(req.session.userId).select("+email");
    console.log(user, "user from getAuthenticatedUser");
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
      res.status(400).json({ message: "Parameters missing" });
      return;
    }

    const existingUserName = await userModel.findOne({ userName: userName });

    if (existingUserName) {
      res.status(409).json({
        message:
          "Username already taken. Please choose a different one or log in instead.",
      });
      return;
    }
    const existingEmail = await userModel.findOne({ email: email });

    if (existingEmail) {
      res.status(409).json({
        message:
          "A user with this email address already exists. Please log in instead.",
      });
      return;
    }

    const passwordHashed = await bcrypt.hash(passwordRaw, 10);

    const newUser = await userModel.create({
      userName: userName,
      email: email,
      password: passwordHashed,
    });

    req.session.userId = newUser._id;
    console.log(newUser._id, "from signup");
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
      res.status(400).json({ message: "Parameters missing" });
      return;
    }

    const user = await userModel
      .findOne({ userName: userName })
      .select("+password +email");

    if (!user) {
      res.status(401).json({ message: "Invalid credentials,user?" });
      return;
    }

    const passwordMatch = await bcrypt.compare(password, user.password);

    if (!passwordMatch) {
      res.status(401).json({ message: "Invalid credentials,password?" });
      return;
    }
    req.session.userId = user._id;
    console.log(user._id, "from login");
    res.status(201).json(user);
  } catch (error) {
    next(error);
  }
};

export const logout = (req: Request, res: Response, next: NextFunction) => {
  return req.session.destroy((error) => {
    if (error) {
      next(error);
    } else {
      res.send("user logged out successfully");
    }
  });
};
