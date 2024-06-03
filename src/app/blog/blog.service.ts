import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';
import { RpcPayload } from 'src/common/types/rpc_payload.type';
import { Microservices } from 'src/core/constants/constants';

@Injectable()
export class BlogService {
  constructor(
    @Inject(Microservices.SERVER) private readonly client: ClientProxy,
  ) {}

  createBlog(data: RpcPayload) {
    return this.client.send('blog.create', data);
  }

  getBlog(data: RpcPayload) {
    return this.client.send('blog.get-by-id', data);
  }

  getBlogs(data: RpcPayload) {
    return this.client.send('blog.get', data);
  }

  updateBlog(data: RpcPayload) {
    return this.client.send('blog.update', data);
  }

  deleteBlog(data: RpcPayload) {
    return this.client.send('blog.delete', data);
  }
}
