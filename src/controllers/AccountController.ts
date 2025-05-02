import { request, Request, response, Response } from "express";
import { AppDataSource } from "../data-source";
import { Account } from "../models/Account";
import { json } from "stream/consumers";

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
    res.status(500).json({ error: "fauled to save transaction" });
  }
}

export async function getAccounts(req: Request, res: Response) {
  const accountRepository = AppDataSource.getRepository(Account);
  const accounts = await accountRepository.find();
  res.json(accounts);
}

export async function putAccount(req: Request, res: Response) {
  const { id } = req.params;
  const { name, group, dollar, balance, showOnDashboard } = req.body;

  try {
    const accountRepository = AppDataSource.getRepository(Account);
    const account = await accountRepository.findOneBy({
      id: Number.parseInt(id),
    });

    if (!account) {
      res.status(404).json({ error: "account not fournd" });
    }

    account!.name = name;
    account!.group = group;
    account!.dollar = dollar;
    account!.balance = balance;
    account!.showOnDashboard = showOnDashboard;
    const updatedAccount = await accountRepository.save(account!);
    res.json(updatedAccount);
  } catch (error) {
    res.status(500).json({ error: "falied to update account" });
  }
}

export async function deleteAccount(req: Request, res: Response) {
  const { id } = req.params;
  try {
    const accountRepository = AppDataSource.getRepository(Account);
    const response = await accountRepository.delete(parseInt(id));
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ error: "failed to delete account"});
  }
}
