import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Microservices } from './core/constants/constants';
import { Request, Response } from 'express';
import { Observable, catchError, map } from 'rxjs';
@Injectable()
export class AppService {
  constructor(
    @Inject(Microservices.SERVER) private readonly serverClient: ClientProxy,
    @Inject(Microservices.STORAGE) private readonly storageClient: ClientProxy,
    @Inject(Microservices.EKYC) private readonly ekycClient: ClientProxy,
  ) {}
  getHello(): any {
    this.serverClient.send('Hello', 'Hello from server').subscribe((res) => {
      console.log(res);
    });
  }

  getHi() {
    console.log('Hi World 1');
    this.serverClient.emit('hi', 'Hi World from server');
    console.log('Hi World 2');
  }
}
