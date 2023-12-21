/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:21:19
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 16:02:22
 */
import { Controller, Get, Post, Body, Delete, Query } from '@nestjs/common';
import { GroupService } from './Group.service';

@Controller('group')
export class GroupController {
  constructor(private readonly groupService: GroupService) { }

  @Get('getGroupList')
  getGroupList() {
    const res = this.groupService.getGroupList();
    return res;
  }

  @Get('getGroupDetail')
  getGroupDetail(@Query() params: { id: string }) {
    const res = this.groupService.getGroupDetail(params.id);
    return res;
  }

  @Post('postAddGroupMember')
  addGroupMember(@Body() body: { id: string; userId: string }) {
    const res = this.groupService.addGroupMember(body.id, body.userId);
    return res;
  }

  @Delete('deleteRemoveGroupMember')
  removeGroupMember(@Query() params: { id: string; userId: string }) {
    const res = this.groupService.removeGroupMember(params.id, params.userId);
    return res;
  }

  @Post('postAddGroup')
  addGroup(@Body() body: { id: string; name: string; type: string }) {
    const res = this.groupService.addGroup(body.id, body.name, body.type);
    return res;
  }
}
