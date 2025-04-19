import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  accountName!: string;

  @Column()
  balance!: number;

  @Column()
  accountType!: string; // You can change this to match your schema
}

