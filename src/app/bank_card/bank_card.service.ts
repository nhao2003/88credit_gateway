import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class BankCardService {
  constructor(
    @Inject(Microservices.SERVER) private readonly client: ClientProxy,
  ) {}

  createBankCard(data: RpcPayload) {
    return this.client.send('create-bank-card', data);
  }

  getBankCard(data: RpcPayload) {
    return this.client.send('get-bank-card', data);
  }

  getBankCards(data: RpcPayload) {
    return this.client.send('get-bank-cards', data);
  }

  markPrimaryBankCard(data: RpcPayload) {
    return this.client.send('mark-primary-bank-card', data);
  }

  getPrimaryBankCard(data: RpcPayload) {
    return this.client.send('get-primary-bank-card', data);
  }
}
