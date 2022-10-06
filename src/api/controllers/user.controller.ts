import { Request, Response } from "express";

export const getAll = async (req: Request, res: Response) => {
  res.status(200).send('hello from get all users');
}