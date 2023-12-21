/*
 * @Autor: wcy
 * @Date: 2022-02-07 15:56:17
 * @LastEditors: wcy
 * @LastEditTime: 2022-02-07 16:02:12
 * @description:
 */
export interface Result {
  errcode: string;
  data: Array<Address>;
}

export interface Address {
  addressName: string;
  adcode: string;
  citycode: number;
}
