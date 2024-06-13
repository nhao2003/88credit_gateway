import { Controller, Delete, Get, Post } from '@nestjs/common';
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

  @Get(':id')
  getPostById(@CreateRpcPayload() data) {
    return this.postService.getPostById(data);
  }

  @Post(':id/approve')
  approvePost(@CreateRpcPayload() data) {
    return this.postService.approvePost(data);
  }

  @Post(':id/reject')
  rejectPost(@CreateRpcPayload() data) {
    return this.postService.rejectPost(data);
  }

  @Delete(':id')
  deletePost(@CreateRpcPayload() data) {
    return this.postService.deletePost(data);
  }
}
