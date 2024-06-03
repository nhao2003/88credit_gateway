import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { Microservices } from './core/constants/constants';
import { EkycModule } from './app/ekyc/ekyc.module';
import { AuthModule } from './app/auth/auth.module';
import {
  AccessTokenJwtGuard,
  LoggingInterceptor,
  TransformationInterceptor,
} from './common';
import { ConfigModule } from '@nestjs/config';
import { BankModule } from './app/bank/bank.module';
import { BankCardModule } from './app/bank_card/bank_card.module';
import { BlogModule } from './app/blog/blog.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    ClientsModule.register({
      isGlobal: true,
      clients: [
        {
          name: Microservices.SERVER,
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://localhost:5672'],
            queue: 'server_queue',
          },
        },
        {
          name: Microservices.STORAGE,
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://guest:guest@localhost:5672'],
            queue: 'storage_queue',
          },
        },
        {
          name: Microservices.EKYC,
          transport: Transport.RMQ,
          options: {
            urls: ['amqp://guest:guest@localhost:5672'],
            queue: 'ekyc_queue',
          },
        },
      ],
    }),
    EkycModule,
    AuthModule,
    BankModule,
    BankCardModule,
    BlogModule,
  ],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: 'APP_GUARD',
      useClass: AccessTokenJwtGuard,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: TransformationInterceptor,
    },
    {
      provide: 'APP_INTERCEPTOR',
      useClass: LoggingInterceptor,
    },
  ],
})
export class AppModule {}
