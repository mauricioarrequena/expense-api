import express from "express";
import { AppDataSource } from "./data-source";
import cors from "cors";
import {
  deleteAccount,
  getAccounts,
  postAccount,
  putAccount,
} from "./controllers/AccountController";
import { getTransactionTags } from "./controllers/TransactionTagController";
import {
  getTransactions,
  postTransaction,
} from "./controllers/TransactionController";
import "reflect-metadata";

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established successfully!");

    //acccount controller
    app.post("/accounts", postAccount);
    app.get("/accounts", getAccounts);
    app.put("/accounts/:id", putAccount);
    app.delete("/accounts/:id", deleteAccount);

    //transactiontag controller
    app.get("/transactionTags", getTransactionTags);

    //transaction controller
    app.post("/transactions", postTransaction);
    app.get("/transactions", getTransactions);

    const PORT = 3000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
