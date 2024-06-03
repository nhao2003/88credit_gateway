import { Controller, Get, Post } from '@nestjs/common';
import { PostService } from './post.service';
import { CreateRpcPayload } from 'src/common';

@Controller('post')
export class PostController {
  constructor(private readonly postService: PostService) {}

  @Post()
  createPost(@CreateRpcPayload() data) {
    return this.postService.createPost(data);
  }

  @Get()
  getPosts(@CreateRpcPayload() data) {
    return this.postService.getPosts(data);
  }
}
