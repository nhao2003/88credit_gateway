import {
  All,
  Controller,
  Get,
  NotFoundException,
  Post,
  Req,
} from '@nestjs/common';
import { AppService } from './app.service';
import { Request } from 'express';
import { MessagePattern } from '@nestjs/microservices';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @All()
  notFound() {
    throw new NotFoundException();
  }
}
