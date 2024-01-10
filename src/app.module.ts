import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AddressModule } from './address/address.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KafkaModule } from './kafka/kafka.module';
import { UserModule } from './camunda/user/user.module';
import { ProcessModule } from './camunda/process/process.module';
import { GroupModule } from './camunda/group/group.module';
import { ZbcService } from './camunda/zbc.service';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '00000000',
      database: 'mydatabase',
      entities: ['dist/repository/database/**/*.entity{.ts,.js}'],
      synchronize: true,
    }),
    TypeOrmModule.forRoot({
      name: 'camunda',
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '00000000',
      database: 'camunda',
      entities: ['dist/repository/camunda/**/*.entity{.ts,.js}'],
      synchronize: false,
    }),
    AddressModule,
    KafkaModule,
    UserModule,
    ProcessModule,
    GroupModule,
  ],
  exports: [ZbcService],
  controllers: [AppController],
  providers: [AppService, ZbcService],
})
export class AppModule { }
