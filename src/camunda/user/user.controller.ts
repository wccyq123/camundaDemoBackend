/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:21:19
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 16:02:22
 */
import { Controller, Get, Post, Body, Delete } from '@nestjs/common';
import { UserService } from './user.service';
import { RequestCreateUserDto } from 'src/repository/camunda/dto/user.dto';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }

  @Post('createUser')
  async test(@Body() params: RequestCreateUserDto) {
    const res = await this.userService.createUser(params);
    return res;
  }
  @Get('getUserList')
  async getUserList() {
    const res = await this.userService.getUserList();
    return res;
  }

  @Delete('deleteUser')
  async deleteUser(@Body() params: { id: string }) {
    const res = await this.userService.deleteUser(params.id);
    return res;
  }

  @Get('create')
  test2() {
    return 'success2333';
  }
}
