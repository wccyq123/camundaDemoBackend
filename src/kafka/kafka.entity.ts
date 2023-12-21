import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class KafkaTest {
  @PrimaryGeneratedColumn()
  id?: number;

  @Column('datetime')
  updataDate: Date;

  @Column('varchar', { length: 20 })
  topic: string;

  @Column('int')
  offset?: number;

  @Column('int')
  partition?: number;

  @Column('int')
  highWaterOffset?: number;

  @Column('varchar', { length: 255 })
  message: string;
}
