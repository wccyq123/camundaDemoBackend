/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:24:39
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 15:56:06
 */
import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { Address } from './address.entity';
import { Client, logger, Variables } from 'camunda-external-task-client-js';
import { ActIdUser } from 'src/repository/camunda/entity/ACT_ID_USER.entity';

@Injectable()
export class AddressService {
  constructor(
    @InjectRepository(Address)
    private readonly AddressRepository: Repository<Address>,
    @InjectRepository(ActIdUser, 'camunda')
    private readonly ActIdUserRepository: Repository<ActIdUser>,
    private connection: Connection,
  ) {
    // const config = {
    //   baseUrl: 'http://localhost:8080/engine-rest',
    //   use: logger,
    // };

    // // create a Client instance with custom configuration
    // const client = new Client(config);

    // // susbscribe to the topic: 'creditScoreChecker'
    // client.subscribe('charge-card', async function ({ task, taskService }) {
    //   // Put your business logic
    //   // complete the task
    //   console.log(task.variables.getAll(), 'charge-card', new Date().getTime());
    //   // const variables = new Variables();
    //   // variables.set('amount', 1400);
    //   await taskService.complete(task);
    // });

    // client.subscribe('payment-result', async function ({ task, taskService }) {
    //   // Put your business logic
    //   // complete the task
    //   console.log(
    //     task.variables.getAll(),
    //     'payment-result',
    //     new Date().getTime(),
    //   );
    //   await taskService.complete(task);
    // });

    // client.subscribe('get-range', async function ({ task, taskService }) {
    //   // Put your business logic
    //   // complete the task
    //   console.log(task.variables.getAll(), 'get-range', new Date().getTime());
    //   await taskService.complete(task);
    // });
  }

  async findme(): Promise<string> {
    // const res = await this.connection.getRepository(ActIdUser).find();
    const res = await this.ActIdUserRepository.find();
    console.log(res);

    return '123';
  }

  async saveMsg(params: Address): Promise<Address> {
    const result = this.connection.getRepository(Address).save(params);
    return result;
  }
}
