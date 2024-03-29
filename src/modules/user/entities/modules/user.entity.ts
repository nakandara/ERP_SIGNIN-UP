// user.entity.ts

import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn } from 'typeorm';



@Entity()
export class User {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  fullName: string;

  @Column() // Allow empty email values
  email: string;

  @Column()
  password: string;


  @PrimaryGeneratedColumn('uuid') // Auto-generated and unique userId
  userId: string;

}
