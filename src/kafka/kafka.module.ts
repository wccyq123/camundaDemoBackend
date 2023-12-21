import { Module, OnApplicationBootstrap } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { getKafkaConsumer } from 'src/utils/customer';
import { KafkaController } from './kafka.controller';
import { KafkaTest } from './kafka.entity';
import { KafkaTestService } from './kafka.service';

@Module({
  imports: [TypeOrmModule.forFeature([KafkaTest])],
  providers: [KafkaTestService],
  controllers: [KafkaController],
})
export class KafkaModule implements OnApplicationBootstrap {
  constructor(private readonly KafkaTestService: KafkaTestService) { }
  async handleListenerKafkaMessage() {
    const kafkaConsumer = getKafkaConsumer(0);
    kafkaConsumer.on('message', async (message) => {
      this.KafkaTestService.saveMsg1({
        updataDate: new Date(),
        message: message.value as string,
        topic: message.topic,
        partition: message.partition,
        offset: message.offset,
        highWaterOffset: message.highWaterOffset,
      });
    });
  }
  async onApplicationBootstrap() {
    // this.handleListenerKafkaMessage();
  }
}
