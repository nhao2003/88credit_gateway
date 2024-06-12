import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Public } from 'src/common';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class UserService {
  getMe(payload: any) {
    return this.serverClient.send('user.me', payload);
  }
  constructor(
    @Inject(Microservices.SERVER)
    private readonly serverClient: ClientProxy,
  ) {}
  getUserById(payload: RpcPayload) {
    return this.serverClient.send('user.get-by-id', payload);
  }

  getUsers(payload: RpcPayload) {
    return this.serverClient.send('user.get-all', payload);
  }

  banUser(payload: RpcPayload) {
    return this.serverClient.send('user.ban', payload);
  }

  unbanUser(payload: RpcPayload) {
    return this.serverClient.send('user.unban', payload);
  }

  updateUser(payload: RpcPayload) {
    return this.serverClient.send('user.update', payload);
  }
}
