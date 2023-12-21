/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:24:56
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 14:28:15
 */
import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Address {
  @PrimaryGeneratedColumn()
  id?: string;

  @Column('int')
  offset: number;

  @Column('varchar', { length: 255 })
  message: string;
}
