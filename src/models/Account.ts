import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';
import { AccountGroup } from '../enums/AccountGroup.enum';

@Entity()
export class Account {
  @PrimaryGeneratedColumn()
  id!: number;

  @Column()
  name!: string;

  @Column() 
  group!: AccountGroup;

  @Column()
  dollar!: boolean;

  @Column({ type: 'decimal' })
  balance!: number;

  @Column()
  showOnDashboard!: boolean;
}

