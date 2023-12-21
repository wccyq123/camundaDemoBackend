/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:21:19
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 16:02:22
 */
import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { ProcessService } from './process.service';

@Controller('process')
export class ProcessController {
  constructor(private readonly processService: ProcessService) { }


  @Get('getProcessList')
  test2() {
    const res = this.processService.getProcessList()
    return res;
  }
}
