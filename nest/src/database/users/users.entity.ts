import { Entity, Column, PrimaryGeneratedColumn, Index } from 'typeorm'

/* Структура таблицы USER в БД */

@Entity()
export class Users {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "varchar", length: 10 })
  name: string;

  @Column({ type: "varchar", length: 9 })
  surname: string;

  @Column({ type: "tinyint" })
  age: number;

  @Column({ type: "tinyint" })
  sex: number;

  @Index()
  @Column({ default: false })
  problem: boolean;

}