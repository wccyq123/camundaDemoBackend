/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:22:14
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 14:46:22
 */

import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProcessDefinition } from 'src/repository/camunda/entity/ACT_RE_PROCDEF.entity';
import { ProcessController } from './process.controller';
import { ProcessService } from './process.service';
import { ZbcService } from '../zbc.service';

@Module({
  imports: [TypeOrmModule.forFeature([ProcessDefinition], 'camunda')],
  providers: [ProcessService, ZbcService],
  controllers: [ProcessController],
})
export class ProcessModule { }
