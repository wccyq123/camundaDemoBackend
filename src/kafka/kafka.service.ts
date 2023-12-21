import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { KafkaTest } from './kafka.entity';
import * as kafka from 'kafka-node';

// const kafkaClient = new kafka.KafkaClient({ kafkaHost: 'localhost:9092' });
// // 创建kafka生产者
// const producer = new kafka.Producer(kafkaClient, {
//   requireAcks: 1,
//   ackTimeoutMs: 100,
//   partitionerType: 2,
// });

@Injectable()
export class KafkaTestService {
  constructor(
    @InjectRepository(KafkaTest)
    private readonly KafkaTestRepository: Repository<KafkaTest>,
    private connection: Connection,
  ) { }

  async findme(): Promise<string> {
    return '123';
  }

  async kafkaTest(params: string): Promise<Promise<any>> {
    const partition = new Date().getTime() % 2;
    const payload = [
      {
        topic: 'test',
        partition: partition,
        messages: [JSON.stringify(params)],
      },
    ];

    return new Promise((resolve, reject) => {
      // producer.send(payload, (err, kafkaProducerResponse) => {
      //   if (err) {
      //     reject(err);
      //     return err;
      //   }
      //   resolve({ payload, kafkaProducerResponse });
      // });
    });
  }

  async saveMsg1(params: KafkaTest): Promise<KafkaTest> {
    const result = this.connection.getRepository(KafkaTest).save(params);
    return result;
  }
}
