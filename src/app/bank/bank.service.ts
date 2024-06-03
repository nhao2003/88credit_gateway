import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class BankService {
  constructor(
    @Inject(Microservices.SERVER) private readonly client: ClientProxy,
  ) {}
  getBank(data: RpcPayload) {
    return this.client.send('get-bank', data);
  }

  getBanks(data: RpcPayload) {
    return this.client.send('get-banks', data);
  }
}
