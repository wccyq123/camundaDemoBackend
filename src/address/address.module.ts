/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:22:14
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 14:46:22
 */

import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getKafkaConsumer } from 'src/utils/customer';
import { AddressController } from './address.controller';
import { Address } from './address.entity';
import { AddressService } from './address.service';
import { ActIdUser } from 'src/repository/camunda/entity/ACT_ID_USER.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([Address]),
    TypeOrmModule.forFeature([ActIdUser], 'camunda'),
  ],
  providers: [AddressService],
  controllers: [AddressController],
})
export class AddressModule implements OnApplicationBootstrap {
  constructor(private readonly AddressService: AddressService) { }
  async handleListenerKafkaMessage() {
    const kafkaConsumer = getKafkaConsumer(1);
    kafkaConsumer.on('message', async (message) => {
      this.AddressService.saveMsg({
        offset: message.offset,
        message: message.value as string,
      });
    });
  }
  async onApplicationBootstrap() {
    // this.handleListenerKafkaMessage();

  }
}
