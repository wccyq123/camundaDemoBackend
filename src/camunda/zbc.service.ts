import { Injectable } from '@nestjs/common';
import { ZBClient } from 'zeebe-node';

@Injectable()
export class ZbcService {
  public zbc: ZBClient = new ZBClient({
    camundaCloud: {
      clusterId: '5dd62ac5-633c-4cb0-aaf4-dc82cbbe3c24',
      clientId: 'viLveu6AUfNHQAkw~7CDg-pJbqkW-BKu',
      clientSecret:
        'SNgpsxiN7yvs0TWy_1ATsGcih1tAdCEATYNdVww0eBspKDVoRynTVHbnqfE6M9Oc',
    },
    onReady: () => console.log(`Connected!`),
    onConnectionError: () => console.log(`Disconnected!`),
  });
  public c = 111;
  constructor() {
    console.log(this.zbc);

    // this.zbc = new ZBClient({
    //   camundaCloud: {
    //     clusterId: '5dd62ac5-633c-4cb0-aaf4-dc82cbbe3c24',
    //     clientId: 'viLveu6AUfNHQAkw~7CDg-pJbqkW-BKu',
    //     clientSecret:
    //       'SNgpsxiN7yvs0TWy_1ATsGcih1tAdCEATYNdVww0eBspKDVoRynTVHbnqfE6M9Oc',
    //   },
    //   onReady: () => console.log(`Connected!`),
    //   onConnectionError: () => console.log(`Disconnected!`),
    // });
  }
  // sayHello() {
  //   return 'Hello, NestJS!';
  // }
}
