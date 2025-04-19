import express from "express";
import "reflect-metadata";
import { AppDataSource } from "./data-source";
import { Account } from "./models/Account";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

AppDataSource.initialize()
  .then(() => {
    console.log("Database connection established successfully!");

    app.get("/accounts", async (req, res) => {
      const accontRepo = AppDataSource.getRepository(Account);
      const accounts = await accontRepo.find();
      res.json(accounts); 
    });

    const PORT = 5000;
    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Error during Data Source initialization:", error);
  });
