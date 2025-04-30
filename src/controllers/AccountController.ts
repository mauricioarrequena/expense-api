import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { Account } from "../models/Account";

export async function postAccount(req: Request, res: Response) {
  try {
    const { name, group, dollar, balance, showOnDashboard } = req.body;
    const accountRepository = AppDataSource.getRepository(Account);
    const newAccount = accountRepository.create({
      name,
      group,
      dollar,
      balance,
      showOnDashboard,
    });
    const savedAccount = await accountRepository.save(newAccount);
    res.status(201).json(savedAccount);
  } catch (error) {
    console.error(error);
    res.status(500).json({error: "fauled to save transaction"});
  }
}

export async function getAccounts(req: Request, res: Response) {
  const accountRepository = AppDataSource.getRepository(Account);
  const accounts = await accountRepository.find();
  res.json(accounts);
}
