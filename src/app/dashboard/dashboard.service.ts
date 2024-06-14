import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class DashboardService {
  constructor(
    @Inject(Microservices.SERVER)
    private readonly serverClient: ClientProxy,
  ) {}

  async getDashboardData(data: RpcPayload) {
    return this.serverClient.send('getDashboardData', data);
  }
}
