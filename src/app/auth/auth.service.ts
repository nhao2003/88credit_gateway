import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Microservices } from 'src/core/constants/constants';
import { catchError, firstValueFrom, map, timeout } from 'rxjs';
import { time } from 'console';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
@Injectable()
export class AuthService {
  constructor(
    @Inject(Microservices.SERVER) private readonly client: ClientProxy,
  ) {}
  forgotPassword(data: RpcPayload) {
    return this.client.send('forgot-password', data).pipe();
  }
  resetPassword(data: RpcPayload) {
    return this.client.send('reset-password', data).pipe();
  }
  refreshToken(data: RpcPayload) {
    return this.client.send('refresh-token', data).pipe();
  }
  profile(data: RpcPayload) {
    return this.client.send('profile', data).pipe();
  }
  async signIn(data: RpcPayload) {
    return this.client.send('sign-in', data).pipe();
  }
  signUp(data: RpcPayload) {
    return this.client.send('sign-up', data).pipe();
  }
  signOut(data: RpcPayload) {
    return this.client.send('sign-out', data).pipe();
  }
}
