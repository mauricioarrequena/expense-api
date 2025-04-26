import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column('decimal', { precision: 10, scale: 2 })
  amount!: number;

  @Column()
  date!: Date;

  @Column({ nullable: true })
  note!: string;
}