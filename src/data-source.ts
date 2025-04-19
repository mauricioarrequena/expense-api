import 'reflect-metadata';
import { DataSource } from 'typeorm';
import { Account } from './models/Account';

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'postgres', // your username
  password: 'postgres', // your password
  database: 'expensedb',  // create it in pgAdmin or CLI
  entities: [Account],  
  migrations: ['src/migrations/**/*.ts'], // <- this is key
  synchronize: false, // disable auto-sync when using migrations
  logging: false,
});
