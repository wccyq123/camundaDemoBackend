import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ database: 'camunda' })
export class ActIdUser {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  ID_: string;

  @Column({ type: 'int' })
  REV_: number;

  @Column({ type: 'varchar', length: 255 })
  FIRST_: string;

  @Column({ type: 'varchar', length: 255 })
  LAST_: string;

  @Column({ type: 'varchar', length: 255 })
  EMAIL_: string;

  @Column({ type: 'varchar', length: 255 })
  PWD_: string;

  @Column({ type: 'varchar', length: 255 })
  SALT_: string;

  @Column({ type: 'datetime', nullable: true })
  LOCK_EXP_TIME_: Date;

  @Column({ type: 'int' })
  ATTEMPTS_: number;

  @Column({ type: 'varchar', length: 64, nullable: true })
  PICTURE_ID_: string;
}
