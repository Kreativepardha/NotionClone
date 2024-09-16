import { Request, Response } from 'express';
import { UserService } from '../services/UserService';

const userService = new UserService();

export const RegisterController = async (req: Request, res: Response) => {
  try {
    const { email, password, name } = req.body;
    const user = await userService.registerUser(email, password, name);
    res.status(201).json({
      message: `Registered succesffullly`,
      user,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

export const LoginController = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const token = await userService.loginUser(email, password);
    res.status(200).json({
      message: 'login successfully',
      token,
    });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
