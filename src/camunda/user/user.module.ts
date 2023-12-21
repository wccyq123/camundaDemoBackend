/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:22:14
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 14:46:22
 */

import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getKafkaConsumer } from 'src/utils/customer';
import { ActIdUser } from 'src/repository/camunda/entity/ACT_ID_USER.entity';
import { UserController } from './user.controller';
import { UserService } from './user.service';

@Module({
  imports: [TypeOrmModule.forFeature([ActIdUser], 'camunda')],
  providers: [UserService],
  controllers: [UserController],
})
export class UserModule { }
