/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:21:19
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 16:02:22
 */
import { Query, Controller, Get } from '@nestjs/common';
import { Result } from './result';
import { AddressService } from './address.service';

@Controller('address')
export class AddressController {
  constructor(private readonly AddressService: AddressService) { }

  @Get('getAdcode')
  async getAdcode(@Query() address: { address: string }): Promise<Result> {
    return { errcode: '200', data: [] };
  }

  @Get('test1')
  test() {
    this.AddressService.findme();
    return 'success2';
  }
  @Get('test2')
  test2() {
    return 'success2333';
  }
}
