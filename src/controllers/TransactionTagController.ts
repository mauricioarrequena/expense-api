import { Request, Response } from "express";
import { AppDataSource } from "../data-source";
import { TransactionTag } from "../models/TransactionTag";

export const getTransactionTags = async (req: Request, res: Response) => {
  const transactionTagRepository = AppDataSource.getRepository(TransactionTag);
  const transactionTags = await transactionTagRepository.find();
  res.json(transactionTags);
};
