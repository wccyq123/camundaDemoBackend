import { Entity, Column, PrimaryColumn } from 'typeorm';

@Entity({ name: 'ACT_RE_PROCDEF' })
export class ProcessDefinition {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  ID_: string;

  @Column({ type: 'int' })
  REV_: number;

  @Column({ type: 'varchar', length: 255 })
  CATEGORY_: string;

  @Column({ type: 'varchar', length: 255 })
  NAME_: string;

  @Column({ type: 'varchar', length: 255 })
  KEY_: string;

  @Column({ type: 'int' })
  VERSION_: number;

  @Column({ type: 'varchar', length: 64 })
  DEPLOYMENT_ID_: string;

  @Column({ type: 'varchar', length: 4000 })
  RESOURCE_NAME_: string;

  @Column({ type: 'varchar', length: 4000 })
  DGRM_RESOURCE_NAME_: string;

  @Column({ type: 'tinyint' })
  HAS_START_FORM_KEY_: number;

  @Column({ type: 'int' })
  SUSPENSION_STATE_: number;

  @Column({ type: 'varchar', length: 64 })
  TENANT_ID_: string;

  @Column({ type: 'varchar', length: 64 })
  VERSION_TAG_: string;

  @Column({ type: 'int' })
  HISTORY_TTL_: number;

  @Column({ type: 'boolean', default: true })
  STARTABLE_: boolean;
}
