/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:24:39
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 15:56:06
 */
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import axios from 'axios';
import { ActIdGroup } from 'src/repository/camunda/entity/ACT_ID_GROUP.entity';
import { GroupMembership } from 'src/repository/database/entity/Merbership.entity';
import { Repository } from 'typeorm';

@Injectable()
export class GroupService {
  constructor(
    @InjectRepository(ActIdGroup, 'camunda')
    private readonly GroupRepository: Repository<ActIdGroup>,
    @InjectRepository(GroupMembership)
    private readonly GroupDetailRepository: Repository<GroupMembership>,
  ) { }

  async getGroupList() {
    const res = await this.GroupRepository.find();

    return { errMsg: '', errorCode: '', status: 200, data: res };
  }

  async getGroupDetail(id: string) {
    const groupDetail = await this.GroupDetailRepository.findOne({
      where: { Group: id },
    });
    const member = await axios
      .get(`http://localhost:8080/engine-rest/user?memberOfGroup=${id}`)
      .catch((err) => {
        if (err.response) {
          return {
            errorMsg: err.response.data.message,
            errorCode: err.response.status,
            status: 400,
            data: '',
          };
        } else if (err.request) {
          return {
            errorMsg: 'something error',
            errorCode: 400,
            status: 400,
            data: '',
          };
        } else {
          // 发送请求时出了点问题
          console.log('Error', err.message);
          return {
            errorMsg: err.message,
            errorCode: 400,
            status: 400,
            data: '',
          };
        }
      });
    const res = { ...groupDetail, member: member.data };
    return { errMsg: '', errorCode: '', status: 200, data: res };
  }

  async addGroupMember(id: string, userId: string) {
    const res = await axios
      .put(`http://localhost:8080/engine-rest/group/${id}/members/${userId}`)
      .catch((err) => {
        if (err.response) {
          return {
            errorMsg: err.response.data.message,
            errorCode: err.response.status,
            status: 400,
            data: '',
          };
        } else if (err.request) {
          return {
            errorMsg: 'something error',
            errorCode: 400,
            status: 400,
            data: '',
          };
        } else {
          // 发送请求时出了点问题
          console.log('Error', err.message);
          return {
            errorMsg: err.message,
            errorCode: 400,
            status: 400,
            data: '',
          };
        }
      });
    return {
      errMsg: '',
      errorCode: '',
      status: 200,
      data: res.data ? res : 'add member success',
    };
  }

  async removeGroupMember(id: string, userId: string) {
    const res = await axios
      .delete(`http://localhost:8080/engine-rest/group/${id}/members/${userId}`)
      .catch((err) => {
        if (err.response) {
          return {
            errorMsg: err.response.data.message,
            errorCode: err.response.status,
            status: 400,
            data: '',
          };
        } else if (err.request) {
          return {
            errorMsg: 'something error',
            errorCode: 400,
            status: 400,
            data: '',
          };
        } else {
          // 发送请求时出了点问题
          console.log('Error', err.message);
          return {
            errorMsg: err.message,
            errorCode: 400,
            status: 400,
            data: '',
          };
        }
      });
    return {
      errMsg: '',
      errorCode: '',
      status: 200,
      data: res.data ? res : 'remove member success',
    };
  }

  async addGroup(id: string, name: string, type: string) {
    const res: any = await axios
      .post(`http://localhost:8080/engine-rest/group/create`, {
        id,
        name,
        type,
      })
      .catch((err) => {
        if (err.response) {
          return {
            errorMsg: err.response.data.message,
            errorCode: err.response.status,
            status: 400,
            data: '',
          };
        } else if (err.request) {
          return {
            errorMsg: 'something error',
            errorCode: 400,
            status: 400,
            data: '',
          };
        } else {
          // 发送请求时出了点问题
          console.log('Error', err.message);
          return {
            errorMsg: err.message,
            errorCode: 400,
            status: 400,
            data: '',
          };
        }
      });
    return {
      errMsg: res.errorMsg ? res.errorMsg : '',
      errorCode: '',
      status: 200,
      data: res.data ? res : 'add group success',
    };
  }
}
