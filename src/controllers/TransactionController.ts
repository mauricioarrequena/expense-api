import { AppDataSource } from "../data-source";
import { Request, Response } from "express";
import { Transaction } from "../models/Transaction";

export const postTransaction = async (req: Request, res: Response) => {
  const transactionRepo = AppDataSource.getRepository(Transaction);
  const { amount, date, note } = req.body;

  try {
    const newTransaction = transactionRepo.create({ amount, date, note });
    const savedTransaction = await transactionRepo.save(newTransaction);
    res.status(201).json(savedTransaction);
  } catch (error) {
    console.error("Error saving transaction:", error);
    res.status(500).json({ error: "Failed to save transaction" });
  }
};

export const getTransactions = async (req: Request, res: Response) => {
  const transactionRepo = AppDataSource.getRepository(Transaction);
  const transactions = await transactionRepo.find();
  res.json(transactions);
};
