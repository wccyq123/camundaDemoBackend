import { Body, Controller, Get, Post, Query } from '@nestjs/common';
import { KafkaTestService } from './kafka.service';
import { Result } from './result';

@Controller('kafka')
export class KafkaController {
  constructor(private readonly KafkaTestService: KafkaTestService) { }
  @Post('test')
  async getAdcode(@Body() address: { address: string }): Promise<Result> {
    const adcode = await this.KafkaTestService.findme();
    return { errcode: '200', data: address.address + adcode };
  }
  @Get('test1')
  async test(@Query() param: { a: string }): Promise<Result> {
    const adcode = await this.KafkaTestService.findme();

    return { errcode: '200', data: param.a + adcode };
  }
  @Get('kafkaTest')
  async test1(@Query() param: { a: string }): Promise<Result> {
    const adcode = await this.KafkaTestService.kafkaTest(param.a);
    console.log(param);

    return { errcode: '200', data: param + adcode };
  }
}
