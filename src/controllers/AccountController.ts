// src/controllers/AccountController.ts
import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Account } from "../models/Account";

export const getAccounts = async (req: Request, res: Response) => {
  const accountRepository = AppDataSource.getRepository(Account);
  const accounts = await accountRepository.find();
  res.json(accounts);
};    
