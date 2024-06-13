import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class PostService {
  deletePost(data: any) {
    return this.serverClient.send('post.delete', data);
  }
  getPostById(data: any) {
    return this.serverClient.send('post.getOne', data);
  }
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

  approvePost(data: any) {
    return this.serverClient.send('post.approve', data);
  }

  rejectPost(data: any) {
    return this.serverClient.send('post.reject', data);
  }
}
