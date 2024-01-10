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
import { Duration, ZBClient } from 'zeebe-node';
import { ZbcService } from '../zbc.service';

@Injectable()
export class ProcessService {
  constructor(
    private zbcService: ZbcService,
    @InjectRepository(ProcessDefinition, 'camunda')
    private readonly ProcessRepository: Repository<ProcessDefinition>,
  ) {
    // this.zbc = new ZBClient({
    //   camundaCloud: {
    //     clusterId: '5dd62ac5-633c-4cb0-aaf4-dc82cbbe3c24',
    //     clientId: 'viLveu6AUfNHQAkw~7CDg-pJbqkW-BKu',
    //     clientSecret:
    //       'SNgpsxiN7yvs0TWy_1ATsGcih1tAdCEATYNdVww0eBspKDVoRynTVHbnqfE6M9Oc',
    //   },
    //   onReady: () => console.log(`Connected!`),
    //   onConnectionError: () => console.log(`Disconnected!`),
    // });
    console.log(this.zbcService.c);

    const bugetWorker = this.zbcService.zbc.createWorker({
      taskType: 'budget',
      taskHandler: (job) => {
        console.log(job, new Date());
        debugger;
        if (job.variables.food === 'KFC') {
          return job.complete({ approved: true });
        } else {
          return job.complete({ approved: false });
        }
      },
      connectionTolerance: Duration.seconds.of(3.5),
    });

    bugetWorker.on('ready', () => console.log(`bugetWorker connected!`));
    bugetWorker.on('connectionError', () =>
      console.log(`bugetWorker disconnected!`),
    );
    bugetWorker.on('close', () => console.log(`bugetWorker close!`));

    const kkndWorker = this.zbcService.zbc.createWorker({
      taskType: 'kknd',
      taskHandler: (job) => {
        console.log(job, new Date());
        debugger;
        return job.complete();
      },
      connectionTolerance: Duration.seconds.of(3.5),
    });

    kkndWorker.on('ready', () => console.log(`kkndWorker connected1!`));
    kkndWorker.on('connectionError', () =>
      console.log(`kkndWorker disconnected!`),
    );
    kkndWorker.on('close', () => console.log(`kkndWorker close!`));
  }

  async getProcessList() {
    const res = this.zbcService.zbc.createProcessInstance({
      bpmnProcessId: 'template-microservice-tutorial-060kxre',
      variables: { msg: '晚上吃啥？' },
    });

    return { errMsg: '', errorCode: '', status: 200, data: res };
  }
}
