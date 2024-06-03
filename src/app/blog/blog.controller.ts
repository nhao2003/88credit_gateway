import {
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  Put,
} from '@nestjs/common';
import { BlogService } from './blog.service';
import { ApiBearerAuth, ApiResponse, ApiTags } from '@nestjs/swagger';
import { CreateRpcPayload } from 'src/common';

@ApiTags('Blog')
@Controller('blog')
@ApiBearerAuth()
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  @HttpCode(HttpStatus.CREATED)
  @ApiResponse({
    status: HttpStatus.CREATED,
    description: 'Blog created successfully',
  })
  async createBlog(@CreateRpcPayload() payload) {
    return this.blogService.createBlog(payload);
  }

  @Get()
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Blogs fetched successfully',
  })
  async getBlogs(@CreateRpcPayload() payload) {
    return this.blogService.getBlogs(payload);
  }

  @Get(':id')
  async getBlogById(@CreateRpcPayload() payload) {
    return this.blogService.getBlog(payload);
  }

  @Put(':id')
  @HttpCode(HttpStatus.OK)
  @ApiResponse({
    status: HttpStatus.OK,
    description: 'Blog updated successfully',
  })
  async updateBlog(@CreateRpcPayload() payload) {
    return this.blogService.updateBlog(payload);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async deleteBlog(@CreateRpcPayload() payload) {
    return this.blogService.deleteBlog(payload);
  }
}
