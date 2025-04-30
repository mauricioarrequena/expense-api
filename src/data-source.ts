import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Account } from './models/Account';
import { TransactionTag } from './models/TransactionTag';
import { Transaction } from './models/Transaction';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', 
  password: 'postgres', 
  database: 'expensedb',  
  entities: [Account, TransactionTag, Transaction],  
  migrations: ['src/migrations/**/*.ts'], 
  synchronize: true, 
  logging: false,
});
