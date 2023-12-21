import { Entity, PrimaryColumn, Column } from 'typeorm';

@Entity({ database: 'camunda' })
export class ActIdGroup {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  ID_: string;

  @Column({ type: 'int' })
  REV_: number;

  @Column({ type: 'varchar', length: 255 })
  NAME_: string;

  @Column({ type: 'varchar', length: 255 })
  TYPE_: string;
}
