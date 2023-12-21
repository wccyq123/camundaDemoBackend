import { Entity, PrimaryColumn, ManyToOne, JoinColumn, Column } from 'typeorm';
import { ActIdUser } from '../../camunda/entity/ACT_ID_USER.entity';

@Entity()
export class GroupMembership {
  @PrimaryColumn({ type: 'varchar', length: 64 })
  Group: string;

  @Column({ type: 'varchar', length: 64 })
  leader: ActIdUser;

  @Column({ type: 'simple-array' })
  admin: string[];
}
