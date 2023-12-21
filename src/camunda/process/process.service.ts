/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:24:39
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 15:56:06
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { ProcessDefinition } from 'src/repository/camunda/entity/ACT_RE_PROCDEF.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ProcessService {
  constructor(
    @InjectRepository(ProcessDefinition, 'camunda')
    private readonly ProcessRepository: Repository<ProcessDefinition>,
  ) { }

  async getProcessList() {
    const res = await this.ProcessRepository.find();

    return { errMsg: '', errorCode: '', status: 200, data: res };
  }
}
