import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { AuthService } from './auth.service';
import {
  CreateRpcPayload,
  Public,
  ResponseMessage,
} from 'src/common/decorators';
import { RefreshTokenJwtGuard } from 'src/common/guards/refresh-token.guard';
import { AccessTokenJwtGuard } from 'src/common/guards/access-token.guard';
import {
  ApiBearerAuth,
  ApiHeader,
  ApiResponse,
  ApiTags,
} from '@nestjs/swagger';

@ApiTags('Authentications')
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('profile')
  @HttpCode(HttpStatus.OK)
  async profile(@CreateRpcPayload() payload) {
    return this.authService.profile(payload);
  }

  @Public()
  @Post('sign-in')
  async signIn(@CreateRpcPayload() payload) {
    return this.authService.signIn(payload);
  }

  @Public()
  @Post('sign-up')
  @HttpCode(HttpStatus.CREATED)
  async signUp(@CreateRpcPayload() payload) {
    return this.authService.signUp(payload);
  }

  @UseGuards(AccessTokenJwtGuard)
  @Post('sign-out')
  @ApiBearerAuth()
  @HttpCode(HttpStatus.OK)
  async signOut(@CreateRpcPayload() payload) {
    return this.authService.signOut(payload);
  }

  @Public()
  @Post('forgot-password')
  async forgotPassword(@CreateRpcPayload() payload) {
    return this.authService.forgotPassword(payload);
  }

  @Post('reset-password')
  @ApiBearerAuth()
  async resetPassword(@CreateRpcPayload() payload) {
    return this.authService.resetPassword(payload);
  }

  @Public()
  @UseGuards(RefreshTokenJwtGuard)
  @Post('refresh-token')
  @ApiHeader({
    name: 'Authorization',
    description: 'Bearer <refresh_token>',
  })
  @HttpCode(HttpStatus.OK)
  async refreshToken(@CreateRpcPayload() payload) {
    return this.authService.refreshToken(payload);
  }
}
