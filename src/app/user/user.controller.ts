import { Controller, Get, Patch } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateRpcPayload, Public } from 'src/common';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  @Public()
  getUsers(@CreateRpcPayload() payload) {
    return this.userService.getUsers(payload);
  }

  @Patch(':id/ban')
  banUser(@CreateRpcPayload() payload) {
    return this.userService.banUser(payload);
  }

  @Patch(':id/unban')
  unbanUser(@CreateRpcPayload() payload) {
    return this.userService.unbanUser(payload);
  }

  @Get(':id')
  @Public()
  getUserById(@CreateRpcPayload() payload) {
    return this.userService.getUserById(payload);
  }

  @Patch(':id')
  updateUser(@CreateRpcPayload() payload) {
    return this.userService.updateUser(payload);
  }

  @Get('me')
  getMe(@CreateRpcPayload() payload) {
    return this.userService.getMe(payload);
  }
}
