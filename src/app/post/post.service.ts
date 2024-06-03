import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class PostService {
  constructor(
    @Inject(Microservices.SERVER)
    private readonly serverClient: ClientProxy,
  ) {}

  async createPost(data: any) {
    return this.serverClient.send('post.create', data);
  }

  getPosts(data: any) {
    return this.serverClient.send('post.get', data);
  }
}
