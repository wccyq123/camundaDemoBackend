/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:22:14
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 14:46:22
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { GroupService } from './Group.service';
import { ActIdGroup } from 'src/repository/camunda/entity/ACT_ID_GROUP.entity';
import { GroupController } from './group.controller';
import { GroupMembership } from 'src/repository/database/entity/Merbership.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ActIdGroup], 'camunda'),
    TypeOrmModule.forFeature([GroupMembership]),
  ],
  providers: [GroupService],
  controllers: [GroupController],
})
export class GroupModule { }
