import { TransactionType } from "../enums/TransactionType.enum";
import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity()
export class TransactionTag {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column()
  transactionType!: TransactionType 
}