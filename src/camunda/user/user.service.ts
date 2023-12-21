/*
 * @Autor: wcy
 * @Date: 2022-02-07 14:24:39
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 15:56:06
 */
import { Injectable, Post } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection } from 'typeorm';
import { ActIdUser } from 'src/repository/camunda/entity/ACT_ID_USER.entity';
import axios from 'axios';
import { RequestCreateUserDto } from 'src/repository/camunda/dto/user.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(ActIdUser, 'camunda')
    private readonly ActIdUserRepository: Repository<ActIdUser>,
    private connection: Connection,
  ) { }

  async findme(): Promise<string> {
    // const res = await this.connection.getRepository(ActIdUser).find();
    const res = await this.ActIdUserRepository.find();
    console.log(res);

    return '123';
  }

  async createUser(params: RequestCreateUserDto): Promise<any> {
    const res = await axios
      .post('http://localhost:8080/engine-rest/user/create', { ...params })
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
    console.log(res);
    if (res.status === 204) {
      return {
        errorMsg: '',
        status: 204,
        data: 'create user success',
      };
    }
    return res;
  }

  async getUserList() {
    const res = await axios
      .get('http://localhost:8080/engine-rest/user')
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

    return { errMsg: '', errorCode: '', status: res.status, data: res.data };
  }

  async deleteUser(id: string) {
    const res = await axios
      .delete(`http://localhost:8080/engine-rest/user/${id}`)
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
      status: res.status,
      data: res.data || 'delete success',
    };
  }
}
